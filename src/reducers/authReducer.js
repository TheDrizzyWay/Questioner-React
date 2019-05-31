import types from '../actiontypes';

const { AUTH_LOADING, SIGN_UP_SUCCESS, SIGN_UP_ERROR, CLEAR_AUTH_ERROR, LOGIN_SUCCESS } = types;
const initialAuthState = {};

const authReducer = (state = initialAuthState, { type, payload }) => {
    switch (type) {
        case AUTH_LOADING:
            return {
                ...state,
                isLoading: payload
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signedUp: true,
                loggedIn: payload,
                isLoading: false,
                message: `Thanks for signing up ${payload[0].newUser.firstname}. Redirecting...`
            };
        case SIGN_UP_ERROR:
            return {
                ...state,
                ...payload,
                isLoading: false
            };
        case CLEAR_AUTH_ERROR:
            return {
                ...state,
                [payload]: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: payload,
                isLoading: false
            };
        default:
            return {
                ...state,
                isLoading: false
            };
    }
};

export default authReducer;
