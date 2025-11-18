import "./App.css";
import { useState, useEffect} from 'react';
import QuoteList from './components/QuoteList'

function App() {
	const [quotes, setQuotes] = useState([])

	const handleClick = () => {
		console.log("button is clicked");
	}

	useEffect(() => {
		fetch('api/quotes')
		 .then(res => {
			return res.json()
		 })
		 .then(data => {
			console.log("Fetched Data: ", data)
			setQuotes(data);
		 })

	}, []);

	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}
			<h1>Hack at UCI Tech Deliverable</h1>

			<h2>Submit a quote</h2>
			{/* TODO: implement custom form submission logic to not refresh the page */}
			<form action="/api/quote" method="post">
				<label htmlFor="input-name">Name</label>
				<input type="text" name="name" id="input-name" required />
				<label htmlFor="input-message">Quote</label>
				<input type="text" name="message" id="input-message" required />
				<button type="submit">Submit</button>
			</form>
			<div className="Button-Group">
				<button onClick={handleClick}>Button1</button>
				<button onClick={handleClick}>Button2</button>
				<button onClick={handleClick}>Button3</button>

				<button onClick={handleClick}>Button4</button>
			</div>

			<h2>Previous Quotes</h2>
			{/* TODO: Display the actual quotes from the database */}
			<div className="messages">
				{quotes && <QuoteList quotes={quotes} title="All Quotes!" />}
			</div>
		</div>
	);
}

export default App;
