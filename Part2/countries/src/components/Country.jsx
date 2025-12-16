const Country = ({ searchedCountry, handleCountryChange, handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                find countries <input type="text" value={searchedCountry} onChange={handleCountryChange} />
            </div>
        </form>
    </div>
)

export default Country;