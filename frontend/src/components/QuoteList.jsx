const QuoteList = ({quotes}) => {
    return (
        <div className="quoteList">
            {quotes.map((quote, index) => (
                <div className="quotePreview" key={index}>
                    <p className="quoteMessage"> {quote.message}</p>
                    <p className="quoteMetadata"> - { quote.name } on {new Date( quote.time).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
}

export default QuoteList;