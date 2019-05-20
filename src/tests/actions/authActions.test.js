import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../utils/axiosRequest';
import authTypes from '../../actiontypes';
import { signUp, clearError, setLoading, setError } from '../../actions';
import { successSignup, errorSignup } from '../dummydata';

const {
    AUTH_LOADING,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    CLEAR_AUTH_ERROR
} = authTypes;

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
});
