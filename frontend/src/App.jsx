import "./App.css";
import QuoteLogo from "./components/QuoteLogo";
import QuoteForm from "./components/QuoteForm";
import QuoteList from "./components/QuoteList";
import FilterButtons from "./components/FilterButtons";
import useQuotes from "./hooks/UseQuotes";

function App() {
  const { quotes, fetchQuotes, addQuote } = useQuotes();

  return (
    <div className="App">
      <h1 className="header">
        <QuoteLogo /> Hack at UCI Tech Deliverable
      </h1>

      <div className="submission">
        <h2 className="submissionTitle">Submit a quote</h2>

        <QuoteForm onSubmit={addQuote} />
      </div>

      <div className="filterButtons">
        <FilterButtons onFilter={fetchQuotes} />
      </div>

      <div className="messages">
        {quotes && <QuoteList quotes={quotes} title="All Quotes!" />}
      </div>
    </div>
  );
}

export default App;