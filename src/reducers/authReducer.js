const initialAuthState = {};

const authReducer = (state = initialAuthState, { type, payload }) => {
    switch (type) {
        case 'AUTH_LOADING':
            return {
                ...state,
                isLoading: payload
            };
        default:
            return {
                ...state,
                isLoading: false
            };
    }
};

export default authReducer;
