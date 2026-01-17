document.getElementById("generateBtn").addEventListener("click", generateForm);

async function generateForm() {
  const prompt = document.getElementById("prompt").value;

  if (!prompt.trim()) {
    alert("Please enter a prompt");
    return;
  }

  console.log("Prompt:", prompt);

  try {
    const response = await fetch("/generate-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const schema = await response.json();
    console.log("Schema:", schema);

    renderForm(schema);

  } catch (error) {
    console.error("Error:", error);
    alert("Error generating form");
  }
}

function renderForm(schema) {
  const container = document.getElementById("formContainer");
  container.innerHTML = "";

  const title = document.createElement("h2");
  title.innerText = schema.title;
  container.appendChild(title);

  const form = document.createElement("form");

  schema.fields.forEach(field => {
    const label = document.createElement("label");
    label.innerText = field.label;
    form.appendChild(label);
    form.appendChild(document.createElement("br"));

    let input;
    if (field.type === "textarea") {
      input = document.createElement("textarea");
    } else {
      input = document.createElement("input");
      input.type = field.type;
    }

    input.required = field.required;
    input.dataset.key = field.metaTag;

    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.innerText = "Submit";

  form.onsubmit = async (e) => {
    e.preventDefault();

    const data = {};
    [...form.elements].forEach(el => {
      if (el.dataset?.key) {
        data[el.dataset.key] = el.value;
      }
    });

    console.log("Submitting:", data);

    await fetch("/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Form submitted successfully!");
  };

  form.appendChild(submitBtn);
  container.appendChild(form);
}
