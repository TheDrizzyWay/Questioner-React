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
                isLoading: false
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
        default:
            return {
                ...state,
                isLoading: false
            };
    }
};

export default authReducer;
