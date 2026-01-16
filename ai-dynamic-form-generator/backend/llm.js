import axios from "axios";
import { SYSTEM_PROMPT } from "./schemaPrompt.js";

const OPENROUTER_URL = "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";

export async function generateFormSchema(userPrompt) {
  const response = await axios.post(
    OPENROUTER_URL,
    {
      model: "tngtech/deepseek-r1t2-chimera:free",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.2,
      max_tokens: 600
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  let content = response.data.choices[0].message.content;
  content = content.replace(/```json|```/g, "");

  return JSON.parse(content);
}
