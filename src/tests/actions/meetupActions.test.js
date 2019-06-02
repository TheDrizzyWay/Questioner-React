import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../utils/axiosRequest';
import types from '../../actiontypes';
import {
    getMeetups, meetupsError, meetupsLoading,
    createMeetup, clearCreateError, createMeetupLoading,
    createMeetupError, oneMeetupLoading, oneMeetupError,
    getOneMeetup
} from '../../actions';

const {
    GET_MEETUPS, MEETUPS_LOADING, MEETUPS_ERROR,
    CREATE_MEETUP, CREATE_MEETUP_ERROR, CREATE_MEETUP_LOADING,
    CLEAR_CREATE_ERROR, ONE_MEETUP_LOADING, ONE_MEETUP_SUCCESS,
    ONE_MEETUP_ERROR, TOP_QUESTIONS
} = types;
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

    test('it should return correct action for loading meetups', () => {
        action = createMeetupLoading(true);
        expect(action).toEqual({
            type: CREATE_MEETUP_LOADING,
            payload: true
        });
    });

    test('it should return correct action for error when creating', () => {
        action = createMeetupError('error');
        expect(action).toEqual({
            type: CREATE_MEETUP_ERROR,
            payload: 'error'
        });
    });

    test('it should return correct action for clearing errors', () => {
        action = clearCreateError();
        expect(action).toEqual({ type: CLEAR_CREATE_ERROR });
    });

    test('it should return correct action for loading one meeetup', () => {
        action = oneMeetupLoading(true);
        expect(action).toEqual({
            type: ONE_MEETUP_LOADING,
            payload: true
        });
    });

    test('it should return correct action for error state when getting one meetup', () => {
        action = oneMeetupError('error');
        expect(action).toEqual({
            type: ONE_MEETUP_ERROR,
            payload: 'error'
        });
    });

    test('it should dispatch GET_MEETUPS on successfull creation', async () => {
        const expectedAction = [
            { type: MEETUPS_LOADING, payload: true },
            { type: GET_MEETUPS, payload: { meetups: [{ id: 1 }] } }
        ];
        axiosInstance.post = await jest.fn().mockResolvedValue({ data: { meetups: [{ id: 1 }] } });

        store.dispatch(getMeetups()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should dispatch CREATE_MEETUP on successfull creation', async () => {
        const expectedAction = [
            { type: CREATE_MEETUP_LOADING, payload: true },
            { type: CREATE_MEETUP, payload: [{ id: 1 }] }
        ];
        axiosInstance.post = await jest.fn().mockResolvedValue({ data: [{ id: 1 }] });

        store.dispatch(createMeetup({ id: 1 })).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should dispatch ONE_MEETUP_SUCCESS on successfully getting a meetup', async () => {
        const expectedAction = [
            { type: ONE_MEETUP_LOADING, payload: true },
            { type: ONE_MEETUP_SUCCESS, payload: undefined },
            { type: TOP_QUESTIONS, payload: undefined }
        ];
        axiosInstance.get = await jest.fn().mockResolvedValue({ data: [{ id: 1 }] });

        store.dispatch(getOneMeetup({ id: 1 })).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    test('it should dispatch ONE_MEETUP_ERROR on error state', async () => {
        const error = {
            response: { data: { error: 'error' } }
        };
        const expectedAction = [
            { type: ONE_MEETUP_LOADING, payload: true },
            { type: ONE_MEETUP_ERROR, payload: 'error' }
        ];
        axiosInstance.get = await jest.fn().mockRejectedValue(error);

        return store.dispatch(getOneMeetup({ id: 1 })).catch(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
