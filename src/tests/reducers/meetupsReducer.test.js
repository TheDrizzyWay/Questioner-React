import meetupsReducer from '../../reducers/meetupsReducer';
import types from '../../actiontypes';

const {
    MEETUPS_LOADING, GET_MEETUPS, MEETUPS_ERROR,
    CREATE_MEETUP_LOADING, CREATE_MEETUP_ERROR,
    CLEAR_CREATE_ERROR
} = types;
const initialState = {
    meetups: [],
    isLoading: false,
    createError: null,
    createLoading: false,
    created: false
};

describe('meetups reducer', () => {
    it('should return initial state', () => {
        expect(meetupsReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
    });

    it('should return MEETUPS_LOADING state when loading', () => {
        expect(meetupsReducer(undefined, {
            type: MEETUPS_LOADING,
            payload: true
        })).toEqual({
            isLoading: true,
            meetups: [],
            createError: null,
            createLoading: false,
            created: false
        });
    });

    it('should return MEETUPS_ERROR state when meetups are not retrieved', () => {
        expect(meetupsReducer(undefined, {
            type: MEETUPS_ERROR,
            payload: 'error'
        })).toEqual({
            error: 'error',
            isLoading: false,
            meetups: [],
            createError: null,
            createLoading: false,
            created: false
        });
    });

    it('should return GET_MEETUPS on successful retrieval of meetups', () => {
        expect(meetupsReducer(undefined, {
            type: GET_MEETUPS,
            payload: ['dummy meetups']
        })).toEqual({
            createError: null,
            createLoading: false,
            meetups: ['dummy meetups'],
            isLoading: false,
            created: false
        });
    });

    it('should return CREATE_MEETUP_LOADING on loading state', () => {
        expect(meetupsReducer(undefined, {
            type: CREATE_MEETUP_LOADING,
            payload: true
        })).toEqual({
            createLoading: true,
            meetups: [],
            isLoading: false,
            createError: null,
            created: false
        });
    });

    it('should return CREATE_MEETUP_ERROR on error state', () => {
        expect(meetupsReducer(undefined, {
            type: CREATE_MEETUP_ERROR,
            payload: 'error'
        })).toEqual({
            isLoading: false,
            meetups: [],
            createError: 'error',
            createLoading: false,
            created: false
        });
    });

    it('should return CLEAR_CREATE_ERROR on clear error state', () => {
        expect(meetupsReducer(undefined, {
            type: CLEAR_CREATE_ERROR
        })).toEqual({
            isLoading: false,
            meetups: [],
            createError: null,
            createLoading: false,
            created: false
        });
    });
});
