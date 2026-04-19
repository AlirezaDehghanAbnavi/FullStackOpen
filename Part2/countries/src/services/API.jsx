import axios from "axios";
const baseURL = "   https://restcountries.com/v3.1/name"

const fetchCountry = ( country ) => axios.get(`${baseURL}/${country}`).then(res => res.data);

export default fetchCountry;