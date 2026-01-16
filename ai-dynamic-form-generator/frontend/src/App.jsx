import { useState } from "react";
import { api } from "./api";
import FormRenderer from "./FormRenderer.jsx";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [schema, setSchema] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generateForm() {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/generate-form", { prompt });
      setSchema(res.data);
    } catch (err) {
      alert("Error generating form");
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px" }}>
      <h1>🧠 AI Dynamic Form Generator</h1>

      <textarea
        rows={4}
        placeholder="Describe the form you want..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        style={{ width: "100%", marginBottom: "12px" }}
      />

      <button onClick={generateForm} disabled={loading}>
        {loading ? "Generating..." : "Generate Form"}
      </button>

      <hr />

      {schema && <FormRenderer schema={schema} />}
    </div>
  );
}
