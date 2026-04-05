import { timeAgo } from "../utils/timeAgo";

export default function QuoteList({ quotes }) {
  return (
    <div className="quoteList">
      {quotes.map((quote, index) => (
        <div className="quoteItem" key={index}>
          <p className="quoteName">{quote.name}</p>
          <p className="quoteMessage">{quote.message}</p>
          <p className="quoteTime">{timeAgo(quote.time)}</p>
        </div>
      ))}
    </div>
  );
}