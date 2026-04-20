import axios from "axios";
const countryURL = "https://restcountries.com/v3.1/name"

const fetchCountry = ( country ) => axios.get(`${countryURL}/${country}`).then(res => res.data);


export default fetchCountry;