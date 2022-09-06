import {
    SET_LOADING,
    SET_ERROR,
    SET_IS_AUTH,
} from "../actions";

export const setLoading = loading => ({
    type: SET_LOADING,
    payload: loading
});

export const setError = error => ({
    type: SET_ERROR,
    payload: error
});

export const setIsAuth = isAuth => ({
    type: SET_IS_AUTH,
    payload: isAuth
});

export const authorize = (isAuth = true) => {
    return (dispatch, getState) => {

        const substituteFetch = async (value) => value;

        dispatch(setLoading(true));
        setTimeout(async () => {
            try {
                const res = await substituteFetch(isAuth);
                dispatch(setIsAuth(res));
            } catch (err) {
                dispatch(setError(err.message));
            } finally {
                dispatch(setLoading(false));
            }
        }, 1000)
    }
}