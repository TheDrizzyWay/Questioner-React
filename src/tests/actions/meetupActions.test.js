import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../utils/axiosRequest';
import types from '../../actiontypes';
import { getMeetups, meetupsError, meetupsLoading } from '../../actions';

const { GET_MEETUPS, MEETUPS_LOADING, MEETUPS_ERROR } = types;
const mockStore = configureMockStore([thunk]);
const store = mockStore();
let action;

describe('get meetup actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('it should return correct action for loading state', () => {
        action = meetupsLoading(true);
        expect(action).toEqual({
            type: MEETUPS_LOADING,
            payload: true
        });
    });

    test('it should return correct action for error state', () => {
        action = meetupsError('error');
        expect(action).toEqual({
            type: MEETUPS_ERROR,
            payload: 'error'
        });
    });

    test('it should dispatch GET_MEETUPS on successfull signup', async () => {
        const expectedAction = [
            { type: MEETUPS_LOADING, payload: true },
            { type: GET_MEETUPS, payload: { meetups: [{ id: 1 }] } }
        ];
        axiosInstance.post = await jest.fn().mockResolvedValue({ data: { meetups: [{ id: 1 }] } });

        store.dispatch(getMeetups()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
