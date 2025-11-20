import "./App.css";
import { useState, useEffect} from 'react';
import QuoteList from './components/QuoteList'
import FilterButtons from './components/FilterButtons'

function App() {
	const [quotes, setQuotes] = useState([])
	const [filter, setFilter] = useState('all')

	const handleFilterClick = (selected) => {
		setFilter(selected);
	}
	
	useEffect(() => {
		let url = 'api/quotes'

		if (filter == 'day') url += '?max_age=1'
		else if (filter == 'week') url += '?max_age=7'
		else if (filter == 'month') url += '?max_age=30'
		else if (filter == 'year') url += '?max_age=365'
		

		fetch(url)
		 .then(res => {
			return res.json()
		 })
		 .then(data => {
			setQuotes(data);
		 })
		 .catch((err) => console.error("Error: ", err));

	}, [filter]);

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
			
			<FilterButtons onFilterChange={setFilter} />

			<h2>Previous Quotes</h2>
			{/* TODO: Display the actual quotes from the database */}
			<div className="messages">
				{quotes && <QuoteList quotes={quotes} title="All Quotes!" />}
			</div>
		</div>
	);
}

export default App;
