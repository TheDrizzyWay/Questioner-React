import meetupsReducer from '../../reducers/meetupsReducer';
import types from '../../actiontypes';

const {
    MEETUPS_LOADING, GET_MEETUPS, MEETUPS_ERROR,
    CREATE_MEETUP_LOADING, CREATE_MEETUP_ERROR,
    CLEAR_CREATE_ERROR, CREATE_MEETUP, ONE_MEETUP_LOADING,
    ONE_MEETUP_SUCCESS, ONE_MEETUP_ERROR, TOP_QUESTIONS,
    CLEAR_CREATED
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
            created: false,
            oneError: false
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

    it('should return CREATE_MEETUP on success state', () => {
        expect(meetupsReducer({ meetups: { paginatedResult: [] } }, {
            type: CREATE_MEETUP,
            payload: 'dummy meetup'
        })).toEqual({
            meetups: { paginatedResult: ['dummy meetup'] },
            createLoading: false,
            created: true
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

    it('should return ONE_MEETUP_LOADING on loading state', () => {
        expect(meetupsReducer(undefined, {
            type: ONE_MEETUP_LOADING,
            payload: true
        })).toEqual({
            oneLoading: true,
            createError: null,
            createLoading: false,
            created: false,
            isLoading: false,
            meetups: []
        });
    });

    it('should return ONE_MEETUP_SUCCESS on success state', () => {
        expect(meetupsReducer(undefined, {
            type: ONE_MEETUP_SUCCESS,
            payload: 'dummy meetup'
        })).toEqual({
            meetup: 'dummy meetup',
            oneLoading: false,
            createError: null,
            createLoading: false,
            created: false,
            isLoading: false,
            meetups: []
        });
    });

    it('should return ONE_MEETUP_ERROR on error state', () => {
        expect(meetupsReducer(undefined, {
            type: ONE_MEETUP_ERROR,
            payload: 'error'
        })).toEqual({
            oneLoading: false,
            oneError: 'error',
            createError: null,
            createLoading: false,
            created: false,
            isLoading: false,
            meetups: []
        });
    });

    it('should return TOP_QUESTIONS on success state', () => {
        expect(meetupsReducer(undefined, {
            type: TOP_QUESTIONS,
            payload: 'dummy question'
        })).toEqual({
            topQuestions: 'dummy question',
            createError: null,
            createLoading: false,
            created: false,
            isLoading: false,
            meetups: []
        });
    });

    it('should return CLEAR_CREATED on clear created state', () => {
        expect(meetupsReducer(undefined, {
            type: CLEAR_CREATED
        })).toEqual({
            createError: null,
            createLoading: false,
            created: false,
            isLoading: false,
            meetups: []
        });
    });
});
