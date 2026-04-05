import "./App.css";
import { useEffect, useState } from "react";
import QuoteLogo from './components/QuoteLogo'

function App() {
	const [quotes, setQuotes] = useState([]);
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const fetchQuotes = async (maxAge = "") => {
		let url = "/api/quotes";

		if (maxAge) {
			url += `?max_age=${maxAge}`;
		}

		const res = await fetch(url);
		const data = await res.json();
		setQuotes(data);
	};

	useEffect(() => {
		fetchQuotes();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("message", message);

		await fetch("/api/quote", {
			method: "POST",
			body: formData,
		});

		setName("");
		setMessage("");

		fetchQuotes();
	};

	return (
		<div className="App">
			<h1 className="header"> <QuoteLogo/> Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>

			<form onSubmit={handleSubmit}>
				<label htmlFor="input-name">Name</label>
				<input
					type="text"
					id="input-name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>

				<label htmlFor="input-message">Quote</label>
				<input
					type="text"
					id="input-message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>

				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>

			<div>
				<button onClick={() => fetchQuotes("")}>All</button>
				<button onClick={() => fetchQuotes(7)}>Last Week</button>
				<button onClick={() => fetchQuotes(30)}>Last Month</button>
				<button onClick={() => fetchQuotes(365)}>Last Year</button>
			</div>

			<div className="messages">
				{quotes.map((quote, index) => (
					<div key={index}>
						<p><strong>{quote.name}</strong></p>
						<p>{quote.message}</p>
						<p>{new Date(quote.time).toLocaleString()}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;