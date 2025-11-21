const Filter = ({searchedPerson, handleSearchChange}) => {
    return (
        <div>
            filter shown with <input type="text" value={searchedPerson} onChange={handleSearchChange}/>
        </div>)
}

export default Filter