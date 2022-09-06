import {
    SET_LOADING,
    SET_ERROR,
    SET_IS_AUTH
} from "./actions";

const initialStore = {
    isLoading: false,
    error: null,
    isAuth: false
}

export const mainReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            };
        default:
            return state
    }
}