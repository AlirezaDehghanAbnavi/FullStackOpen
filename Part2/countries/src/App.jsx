import { useState, useEffect } from "react";
import Country from "./components/Country";
import fetchCountry from "./services/CountryAPI";
import fetchWeather from "./services/WeatherAPI";

const App = () => {
  const [searchedCountry, setSearchedCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const delayFetchAPI = setTimeout(() => {
      if (searchedCountry.trim() === '') {
        setCountries([]);
        setSelectedCountry(null);
        return;
      }

      fetchCountry(searchedCountry)
        .then(data => {
          setCountries(data);
          if (data.length === 1) {
            setSelectedCountry(data[0]);
          }
        })
        .catch(() => setCountries([]));
    }, 500);

    return () => clearTimeout(delayFetchAPI);
  }, [searchedCountry]);


  useEffect(() => {
    if (!selectedCountry) {
      setWeather(null);
      return;
    }

    fetchWeather(selectedCountry.capital)
      .then(data => setWeather(data))
      .catch(() => setWeather(null));
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSearchedCountry(event.target.value)
  }

  return (
    <div>
      <Country searchedCountry={searchedCountry}
        handleCountryChange={handleCountryChange}
        countries={countries}
        setCountries={setCountries}
        setSelectedCountry={setSelectedCountry}
        weather={weather}
      />
    </div>)
}

export default App
