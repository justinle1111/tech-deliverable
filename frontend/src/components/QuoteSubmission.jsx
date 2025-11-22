import { useState } from 'react';

function QuoteSubmission({ onAddQuote }) {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("message", message);

        fetch("api/quote", {
            method: "POST",
            body: formData,
        })
         .then((res) => res.json())
         .then((newQuote) => {
            onAddQuote(newQuote);
            setName("");
            setMessage("");
         }) 
         .catch((err) => console.error("Error:", err))
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="input-name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="text"
                id="input-message"
                placeholder="Quote"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />

            <button type="submit">Submit</button>
        </form>
    )
    
}

export default QuoteSubmission;