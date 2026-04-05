export default function FilterButtons({ onFilter }) {
    return (
      <div className="buttonGroup">
        <button onClick={() => onFilter("")}>All</button>
        <button onClick={() => onFilter(7)}>Last Week</button>
        <button onClick={() => onFilter(30)}>Last Month</button>
        <button onClick={() => onFilter(365)}>Last Year</button>
      </div>
    );
  }