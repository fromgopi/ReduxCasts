import {FETCH_WEATHER} from "../actions/FetchWeather";

export default function (state = [], action) {

    console.log("Inside Weather Reducer -> " + state);

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    console.log("Action -> " + action);
    return state
    
}