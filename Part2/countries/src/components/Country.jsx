const Country = ({ searchedCountry, handleCountryChange, countries, setCountries }) => (
    <div>
        <form>
            find countries <input type="text" value={searchedCountry} onChange={handleCountryChange} />
        </form>
        <br />
        <div>
            {countries.length > 10 && (
                <p>Too many matches, specify another filter</p>
            )}

            {countries.length <= 10 && countries.length > 1 && (
                countries.map(country => (
                    <div key={country.cca3}>{country.name.common} <button onClick={() => setCountries([country])}>Show</button></div>
                ))
            )}

            {countries.length === 1 && (
                <div key={countries[0].cca3}>
                    <h2>{countries[0].name.common}</h2>
                    <p>Capital: {countries[0].capital}</p>
                    <div>
                        Area: {countries[0].area.toLocaleString()} km<sup>2</sup>
                    </div>
                    <h2>Languages</h2>
                    <ul>
                        {Object.values(countries[0].languages).map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                    <img
                        src={countries[0].name.common === "Iran" ?
                            "https://upload.wikimedia.org/wikipedia/commons/f/fd/State_flag_of_Iran_%281964–1980%29.svg"
                            : countries[0].flags.png}
                    alt={`Flag of ${countries[0].name.common}`}
                    />
                </div>
            )
            }
        </div>
    </div>
)

export default Country;