import { useState } from "react"
import { useEffect } from "react"
import Country from "./components/Country";

const App = () => {
  const [searchedCountry, setSearchedCountry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Searching for country")
  }

  const handleCountryChange = (event) => {
    setSearchedCountry(event.target.value)
  }

  return (
    <div>
      <Country searchedCountry={searchedCountry}
        handleCountryChange={handleCountryChange}
        handleSubmit={handleSubmit} />
    </div>)
}

export default App
