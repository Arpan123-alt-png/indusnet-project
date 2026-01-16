import { useState } from "react";

export default function FormRenderer({ schema }) {
  const [formData, setFormData] = useState({});

  function handleChange(key, value) {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:5000/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    alert("Form submitted successfully!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{schema.title}</h2>

      {schema.fields.map(field => (
        <div key={field.name} style={{ marginBottom: "12px" }}>
          <label>{field.label}</label>
          <br />

          {field.type === "textarea" && (
            <textarea
              onChange={e =>
                handleChange(field.metaTag, e.target.value)
              }
            />
          )}

          {field.type === "select" && (
            <select
              onChange={e =>
                handleChange(field.metaTag, e.target.value)
              }
            >
              <option value="">Select</option>
              {field.options.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}

          {["text", "number"].includes(field.type) && (
            <input
              type={field.type}
              required={field.required}
              onChange={e =>
                handleChange(field.metaTag, e.target.value)
              }
            />
          )}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}
