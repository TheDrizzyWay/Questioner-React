import meetupsReducer from '../../reducers/meetupsReducer';
import types from '../../actiontypes';

const { MEETUPS_LOADING, GET_MEETUPS, MEETUPS_ERROR } = types;
const initialState = {
    meetups: [],
    isLoading: false
};

describe('meetups reducer', () => {
    it('should return initial state', () => {
        expect(meetupsReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
    });

    it('should return MEETUPS_LOADING state when loading', () => {
        expect(meetupsReducer(undefined, {
            type: MEETUPS_LOADING,
            payload: true
        })).toEqual({ isLoading: true, meetups: [] });
    });

    it('should return MEETUPS_ERROR state when signup is unsuccessful', () => {
        expect(meetupsReducer(undefined, {
            type: MEETUPS_ERROR,
            payload: 'error'
        })).toEqual({ error: 'error', isLoading: false, meetups: [] });
    });

    it('should return GET_MEETUPS on successful signup', () => {
        expect(meetupsReducer(undefined, {
            type: GET_MEETUPS,
            payload: ['dummy meetups']
        })).toEqual({
            meetups: ['dummy meetups'],
            isLoading: false
        });
    });
});
