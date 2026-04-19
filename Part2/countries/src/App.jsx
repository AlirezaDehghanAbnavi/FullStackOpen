import { useState, useEffect } from "react";
import Country from "./components/Country";
import fetchCountry from "./services/API";

const App = () => {
  const [searchedCountry, setSearchedCountry] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (searchedCountry === '') {
      setCountries([]);
      return;
    }

    fetchCountry(searchedCountry)
      .then(data => {
        setCountries(data);
      })
      .catch(err => {
        setCountries([]);
      });
  }, [searchedCountry]);

  const handleCountryChange = (event) => {
    setSearchedCountry(event.target.value)
  }

  return (
    <div>
      <Country searchedCountry={searchedCountry}
        handleCountryChange={handleCountryChange}
        countries={countries}
        setCountries={setCountries}
      />
    </div>)
}

export default App
