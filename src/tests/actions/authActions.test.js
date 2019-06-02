import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../utils/axiosRequest';
import types from '../../actiontypes';
const {
    AUTH_LOADING,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    CLEAR_AUTH_ERROR,
    LOGIN_SUCCESS
} = types;
import { signUp, clearError, setLoading, setError, login } from '../../actions';
import { successSignup, errorSignup } from '../dummydata';

const mockStore = configureMockStore([thunk]);
const store = mockStore();
let action;

describe('sign up actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('it should return correct action for loading state', () => {
        action = setLoading(true);
        expect(action).toEqual({
            type: AUTH_LOADING,
            payload: true
        });
    });

    test('it should return correct action for error state', () => {
        action = setError(errorSignup);
        expect(action).toEqual({
            type: SIGN_UP_ERROR,
            payload: errorSignup
        });
    });

    test('it should return correct action for clear error state', () => {
        action = clearError('id');
        expect(action).toEqual({
            type: CLEAR_AUTH_ERROR,
            payload: 'id'
        });
    });

    test('it should dispatch SIGN_UP_SUCCESS on successfull signup', async () => {
        const expectedAction = [
            { type: AUTH_LOADING, payload: true },
            { type: SIGN_UP_SUCCESS, payload: undefined }
        ];
        axiosInstance.post = await jest.fn().mockResolvedValue({ data: successSignup });

        store.dispatch(signUp(successSignup)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should dispatch LOGIN_SUCCESS on successfull signup', async () => {
        const expectedAction = [
            { type: AUTH_LOADING, payload: true },
            { type: LOGIN_SUCCESS, payload: undefined }
        ];

        axiosInstance.post = await jest.fn().mockResolvedValue({ data: {
            email: 'user@email.com', password: 'password'
        } });

        store.dispatch(login({ email: 'user@email.com', password: 'password', token: 'token' })).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should dispatch SIGN_UP_ERROR on failed signup', async () => {
        const error = {
            response: { data: errorSignup }
        };
        const expectedAction = [
            { type: AUTH_LOADING, payload: true },
            { type: AUTH_LOADING, payload: false }
        ];
        axiosInstance.post = await jest.fn().mockRejectedValue({ error });

        store.dispatch(signUp(errorSignup)).catch(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should return correct action for bad request', async () => {
        const error = {
            response: { data: { status: 400, error: 'error' } }
        };
        const expectedAction = [
            { type: AUTH_LOADING, payload: true },
            { type: AUTH_LOADING, payload: false },
            { type: SIGN_UP_ERROR, payload: 'error' }
        ];
        axiosInstance.post = await jest.fn().mockRejectedValue(error);

        return store.dispatch(signUp(successSignup)).catch(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should return correct action for username error', async () => {
        const error = {
            response: { data: { status: 409, error: 'error' } }
        };
        const expectedAction = [
            { type: AUTH_LOADING, payload: true },
            { type: AUTH_LOADING, payload: false },
            { type: SIGN_UP_ERROR, payload: { username: ['error'] } }
        ];
        axiosInstance.post = await jest.fn().mockRejectedValue(error);

        return store.dispatch(signUp(successSignup)).catch(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should return correct action for email error', async () => {
        const error = {
            response: { data: { status: 409, error: 'email error' } }
        };
        const expectedAction = [
            { type: AUTH_LOADING, payload: true },
            { type: AUTH_LOADING, payload: false },
            { type: SIGN_UP_ERROR, payload: { email: ['email error'] } }
        ];
        axiosInstance.post = await jest.fn().mockRejectedValue(error);

        return store.dispatch(signUp(successSignup)).catch(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should return correct action for email not found', async () => {
        const error = {
            response: { data: { status: 404, error: 'email error' } }
        };
        const expectedAction = [
            { type: AUTH_LOADING, payload: true },
            { type: AUTH_LOADING, payload: false },
            { type: SIGN_UP_ERROR, payload: { email: ['email error'] } }
        ];
        axiosInstance.post = await jest.fn().mockRejectedValue(error);

        return store.dispatch(login({ email: 'user@email.com', password: 'password' })).catch(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should return correct action for incorrect password', async () => {
        const error = {
            response: { data: { status: 401, error: 'password error' } }
        };
        const expectedAction = [
            { type: AUTH_LOADING, payload: true },
            { type: AUTH_LOADING, payload: false },
            { type: SIGN_UP_ERROR, payload: { password: ['password error'] } }
        ];
        axiosInstance.post = await jest.fn().mockRejectedValue(error);

        return store.dispatch(login({ email: 'user@email.com', password: 'password' })).catch(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
