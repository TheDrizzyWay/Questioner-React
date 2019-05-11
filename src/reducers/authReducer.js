import { SIGN_UP } from '../actions/authActions';

export const initialAuthState = {};

export const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                formObject: action.payload
            };
        default:
            return state;
    }
};
