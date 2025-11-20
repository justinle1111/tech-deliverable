function FilterButtons( {onFilterChange }) {
    return (
        <div className="Button-Group">
			<button onClick={ () => onFilterChange('year')}>Year</button>
			<button onClick={() => onFilterChange('month')}>Month</button>
			<button onClick={() => onFilterChange('week')}>Week</button>
			<button onClick={() => onFilterChange('day')}>Day</button>
			<button onClick={() => onFilterChange()}>All</button>
		</div>
    )
}

export default FilterButtons;