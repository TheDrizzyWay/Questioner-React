const initialAuthState = {};

const authReducer = (state = initialAuthState, { type, payload }) => {
    switch (type) {
        case 'SIGN_UP':
            console.log(payload);
            return {
                ...state,
                formObject: payload
            };
        default:
            return state;
    }
};

export default authReducer;
