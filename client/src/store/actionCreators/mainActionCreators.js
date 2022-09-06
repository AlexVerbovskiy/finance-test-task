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
    return async (dispatch, getState) => {

        const substituteFetch = async (value) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(value);
                }, 1000)
            });
        };

        dispatch(setLoading(true));

        try {
            const res = await substituteFetch(isAuth);
            dispatch(setIsAuth(res));
        } catch (err) {
            dispatch(setError(err.message));
        } finally {
            dispatch(setLoading(false));
        }
    }
}