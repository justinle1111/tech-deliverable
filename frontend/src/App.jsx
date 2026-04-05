import "./App.css";
import { useEffect, useState } from "react";
import QuoteLogo from './components/QuoteLogo'


function App() {
	const [quotes, setQuotes] = useState([]);
	useEffect(() => {
		const fetchQuotes = async () => {
			const res = await fetch("/api/quotes");
			const data = await res.json();
			setQuotes(data);
		};

		fetchQuotes();
	}, []);
	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<h1 className="header"> <QuoteLogo/> Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			{/* TODO: implement custom form submission logic to not refresh the page */}
			<form action="/api/quote" method="post">
				<label htmlFor="input-name">Name</label>
				<input type="text" name="name" id="input-name" required />
				<label htmlFor="input-message">Quote</label>
				<input type="text" name="message" id="input-message" required />
				<button type="submit">Submit</button>
			</form>

			<h2>Previous Quotes</h2>
			{/* TODO: Display the actual quotes from the database */}
			<div className="messages">
				{quotes.map((quote, index) => (
					<div key={index}>
						<p><strong>{quote.name}</strong></p>
						<p>{quote.message}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
