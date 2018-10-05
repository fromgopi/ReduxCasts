import axios from 'axios';


const API_KEY = "59ee4271096216bf0f9f3bfb07ef0b59";
const ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";


export function fetchWeather(city) {
    console.log("City Name -> " + city);
    const url = `${ENDPOINT}&q=${city}&units=metric`;
    console.log("Endpoint URL with city and key -> " + url);
    const request = axios.get(url);

    console.log("Requested Weather details of " + city + " -> " + request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}