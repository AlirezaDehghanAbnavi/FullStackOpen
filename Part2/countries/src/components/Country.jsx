const Country = ({ searchedCountry, handleCountryChange, countries, setCountries, setSelectedCountry, weather }) => (
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
                    <div key={country.cca3}>{country.name.common} <button onClick={() => { setCountries([country]), setSelectedCountry(country) }}>Show</button></div>
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
                    {weather && weather.main ? (
                        <div>
                            <h2>Weather in {countries[0].capital}</h2>
                            <p>Temperature: {weather.main.temp} Celsius</p>
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="weather icon"
                            />
                            <p>Wind: {weather.wind.speed} m/s</p>
                        </div>
                    ) : (
                        <p>Loading weather...</p>
                    )}
                </div>
            )
            }
        </div>
    </div>
)

export default Country;