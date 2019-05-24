import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../utils/axiosRequest';
import types from '../../actiontypes';
const {
    AUTH_LOADING,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    CLEAR_AUTH_ERROR
} = types;
import { signUp, clearError, setLoading, setError } from '../../actions';
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
});
