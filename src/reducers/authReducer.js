const initialAuthState = {};

const authReducer = (state = initialAuthState, { type, payload }) => {
    switch (type) {
        case 'AUTH_LOADING':
            return {
                ...state,
                isLoading: payload
            };
        case 'SIGN_UP_SUCCESS':
            return {
                ...state,
                signedUp: true,
                isLoading: false,
                message: `Thanks for signing up ${payload.firstname}. You will be redirected to the login page shortly.`
            };
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                ...payload
            };
        case 'CLEAR_AUTH_ERROR':
            return {
                ...state,
                [payload]: null
            };
        case 'LOGIN_SUCCESS':
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
