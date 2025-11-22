import "./App.css";
import { useState, useEffect} from 'react';
import QuoteList from './components/QuoteList'
import QuoteSubmission from './components/QuoteSubmission'
import FilterButtons from './components/FilterButtons'
import QuoteLogo from './components/QuoteLogo'

function App() {
	const [quotes, setQuotes] = useState([])
	const [filter, setFilter] = useState('all')


	const handleAddQuote = (newQuote) => {
		setQuotes((prev) => [...prev, newQuote]);
	};
	
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

			<h1 className="header"> <QuoteLogo/> Hack at UCI Tech Deliverable</h1>

			<div className="submission">
				<h2 className="submissionTitle">Submit a quote</h2>
			{/* TODO: implement custom form submission logic to not refresh the page */}
				<QuoteSubmission onAddQuote={handleAddQuote} />
			</div>
			
			<div className="filterButtons">
				<FilterButtons onFilterChange={setFilter} />
			</div>

			{/* TODO: Display the actual quotes from the database */}
			<div className="messages">
				{quotes && <QuoteList quotes={quotes} title="All Quotes!" />}
			</div>
		</div>
	);
}

export default App;
