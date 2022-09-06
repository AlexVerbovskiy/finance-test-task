import {
    mainReducer
} from '../reducers';
import {
    setLoading,
    setError,
    setIsAuth,
    authorize
} from '../actionCreators';

describe('redux main reducer', () => {
    it('should return default state', () => {
        const res = mainReducer(undefined, {
            type: ''
        });

        expect(res).toEqual({
            isLoading: false,
            error: null,
            isAuth: false
        })
    })

    it('should return correct state.loading after setLoading', () => {
        const defaultState = mainReducer(undefined, {
            type: ''
        });

        const resTrue = mainReducer(defaultState, setLoading(true));
        const resFalse = mainReducer(defaultState, setLoading(false));

        expect(resTrue.isLoading).toBe(true);
        expect(resFalse.isLoading).toBe(false);
    })

    it('should return correct state.isAuth after setLoading', () => {
        const defaultState = mainReducer(undefined, {
            type: ''
        });

        const resTrue = mainReducer(defaultState, setIsAuth(true));
        const resFalse = mainReducer(defaultState, setIsAuth(false));

        expect(resTrue.isAuth).toBe(true);
        expect(resFalse.isAuth).toBe(false);
    })

    it('should return correct state.error after setLoading', () => {
        const defaultState = mainReducer(undefined, {
            type: ''
        });

        const resMessage = mainReducer(defaultState, setError("Error!"));
        const resEmpty = mainReducer(defaultState, setError(null));

        expect(resMessage.error).toBe("Error!");
        expect(resEmpty.error).toBeNull();
    })

    it('should return authorize with resolved response', async () => {
        const dispatch = jest.fn();
        const thunk = authorize(true);
        await thunk(dispatch, () => ({}));
        const {
            calls
        } = dispatch.mock;
        console.log(calls)
        expect(calls.length).toBe(3);

        const [startLoading, isAuth, endLoading] = calls;
        expect(startLoading[0].type).toBe("SET_LOADING");
        expect(startLoading[0].payload).toBe(true);

        expect(isAuth[0].type).toBe("SET_IS_AUTH");
        expect(isAuth[0].payload).toBe(true);

        expect(endLoading[0].type).toBe("SET_LOADING");
        expect(endLoading[0].payload).toBe(false);
    })
})