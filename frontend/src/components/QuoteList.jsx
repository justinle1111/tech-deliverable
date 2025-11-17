const QuoteList = () => {
    return (
        <div className="quote-list">
            {quotes.map((quote) => (
                <div className="quote-preview" key={quote.name}>
                    <h2> {quote.message}</h2>
                    <p> Written by { quote.name }</p>
                </div>
            ))}
        </div>
    );
}

export default QuoteList;