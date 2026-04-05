import { useState } from "react";

export default function QuoteForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, message);
    setName("");
    setMessage("");
  };

  return (
    <form className="quoteForm" onSubmit={handleSubmit}>
      <div className="formGroup">
        <label className="formLabel">Name</label>
        <input
          className="formInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="formGroup">
        <label className="formLabel">Quote</label>
        <input
          className="formInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button className="submitButton" type="submit">
        Submit
      </button>
    </form>
  );
}