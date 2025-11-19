const QuoteList = ({quotes}) => {
    return (
        <div className="quote-list">
            {quotes.map((quote, index) => (
                <div className="quote-preview" key={index}>
                    <h2> {quote.message}</h2>
                    <p> Written by { quote.name }</p>
                </div>
            ))}
        </div>
    );
}

export default QuoteList;