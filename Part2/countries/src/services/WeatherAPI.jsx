    import axios from "axios";
    const weatherURL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = import.meta.env.VITE_API_KEY;

    const fetchWeather = ( capital ) => axios.get(`${weatherURL}?q=${capital}&units=metric&APPID=${API_KEY}`).then(res => res.data);

    export default fetchWeather;