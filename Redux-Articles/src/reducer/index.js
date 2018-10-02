import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {

    articles: []

}

const rootReducer = (state=initialState, action) => {
    console.log("Root-Reducer is been called....");
    switch (action.type) {
        case ADD_ARTICLE:
            console.log("State -> " + state.articles);
            return{
                ...state,
                articles: [...state.articles, action.payload ]
            }

        default:
            console.log("State -> " + state.articles);
            return state
    }
};

export default rootReducer;