import { useState, useEffect } from "react";

export default function useQuotes() {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async (maxAge = "") => {
    let url = "/api/quotes";

    if (maxAge) {
      url += `?max_age=${maxAge}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    setQuotes(data);
  };

  const addQuote = async (name, message) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);

    await fetch("/api/quote", {
      method: "POST",
      body: formData,
    });

    fetchQuotes();
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return { quotes, fetchQuotes, addQuote };
}