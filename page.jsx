import React, { useState } from "react";

function MyForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Submitted: ${input}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter something:
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginLeft: 10 }}
          />
        </label>
        <button type="submit" style={{ marginLeft: 10 }}>Submit</button>
      </form>
      <div style={{ marginTop: 20, color: "#555" }}>
        <strong>Notice:</strong> Please fill out the form and submit your response.
      </div>
    </div>
  );
}

export default MyForm;
