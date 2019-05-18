import authTypes from '../actiontypes';
const { AUTH_LOADING, /*SIGN_UP_SUCCESS,*/ SIGN_UP_ERROR } = authTypes;
// import axiosInstance from '../utils/axiosRequest';

const setLoading = (value) => ({
    type: AUTH_LOADING,
    payload: value
});

const setError = (errorMessage) => ({
    type: SIGN_UP_ERROR,
    payload: errorMessage
});

const signUp = (formObject) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
    } catch (err) {
        dispatch(setLoading(false));
        const { response: { data: { message } } } = err;
        dispatch(setError(message));
    }
    /* type: SIGN_UP_SUCCESS,
    payload: formObject */
};

export { signUp, setLoading };
