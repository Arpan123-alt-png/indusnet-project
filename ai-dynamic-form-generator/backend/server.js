import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { generateFormSchema } from "./llm.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-form", async (req, res) => {
  try {
    const { prompt } = req.body;
    const schema = await generateFormSchema(prompt);
    res.json(schema);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Form generation failed" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
