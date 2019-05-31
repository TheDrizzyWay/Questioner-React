import authReducer from '../../reducers/authReducer';
import types from '../../actiontypes';
import { successSignup, errorSignup } from '../dummydata';

const {
    AUTH_LOADING, SIGN_UP_SUCCESS, SIGN_UP_ERROR,
    CLEAR_AUTH_ERROR, LOGIN_SUCCESS
} = types;
const initialState = { isLoading: false };

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(authReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
    });

    it('should return AUTH_LOADING state when loading', () => {
        expect(authReducer(undefined, {
            type: AUTH_LOADING,
            payload: true
        })).toEqual({ isLoading: true });
    });

    it('should return SIGN_UP_ERROR state when signup is unsuccessful', () => {
        expect(authReducer(undefined, {
            type: SIGN_UP_ERROR,
            payload: errorSignup
        })).toEqual({ ...errorSignup, isLoading: false });
    });

    it('should return CLEAR_AUTH_ERROR when errors are cleared', () => {
        expect(authReducer(undefined, {
            type: CLEAR_AUTH_ERROR,
            payload: 'firstname'
        })).toEqual({ firstname: null });
    });

    it('should return SIGN_UP_SUCCESS on successful signup', () => {
        expect(authReducer(undefined, {
            type: SIGN_UP_SUCCESS,
            payload: [{ newUser: { firstname: 'name' } }]
        })).toEqual({
            signedUp: true,
            loggedIn: [{ newUser: { firstname: 'name' } }],
            isLoading: false,
            message: 'Thanks for signing up name. Redirecting...'
        });
    });

    it('should return LOGIN_SUCCESS on successful login', () => {
        expect(authReducer(undefined, {
            type: LOGIN_SUCCESS,
            payload: successSignup
        })).toEqual({
            loggedIn: successSignup,
            isLoading: false
        });
    });
});
