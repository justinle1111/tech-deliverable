function FilterButtons( {onFilterChange }) {
    return (
        <div className="Button-Group">
			<button onClick={() => onFilterChange('day')}>From Today</button>
			<button onClick={() => onFilterChange('week')}>Past Week</button>
			<button onClick={() => onFilterChange('month')}>Past Month</button>
			<button onClick={ () => onFilterChange('year')}>Past Year</button>
			<button onClick={() => onFilterChange()}>All</button>
		</div>
    )
}

export default FilterButtons;