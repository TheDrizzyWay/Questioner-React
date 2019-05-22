import authTypes from '../actiontypes';
const { AUTH_LOADING, SIGN_UP_SUCCESS, SIGN_UP_ERROR,
    CLEAR_AUTH_ERROR, LOGIN_SUCCESS
} = authTypes;
import axiosInstance from '../utils/axiosRequest';

const setLoading = (value) => ({
    type: AUTH_LOADING,
    payload: value
});

const setError = (error) => ({
    type: SIGN_UP_ERROR,
    payload: error
});

const clearError = (field) => ({
    type: CLEAR_AUTH_ERROR,
    payload: field
});

const signUp = (formObject) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const requestBody = JSON.stringify(formObject);
        const header = { 'Content-Type': 'application/json' };

        const { data } = await axiosInstance.post('/auth/signup', requestBody, {
            headers: header
        });
        return dispatch({
            type: SIGN_UP_SUCCESS,
            payload: data.data
        });
    } catch (err) {
        dispatch(setLoading(false));
        const { response: { data: { status, error } } } = err;
        if (status === 400) return dispatch(setError(error));
        if (status === 409) {
            if (error.includes('email')) {
                return dispatch(setError({ email: [error] }));
            }
            return dispatch(setError({ username: [error] }));
        }
    }
};

const login = (formObject) => async dispatch => {
    try {
        dispatch(setLoading(true));
        const requestBody = JSON.stringify(formObject);
        const header = { 'Content-Type': 'application/json' };

        const { data } = await axiosInstance.post('/auth/login', requestBody, {
            headers: header
        });
        return dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data
        });
    } catch (err) {
        dispatch(setLoading(false));
        const { response: { data: { status, error } } } = err;
        if (status === 404) return dispatch(setError({ email: [error] }));
        if (status === 401) return dispatch(setError({ password: [error] }));
        if (status === 400) return dispatch(setError({ password: [error] }));
    }
};

export { signUp, clearError, setLoading, setError, login };
