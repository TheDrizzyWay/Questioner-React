import types from '../actiontypes';

const {
    MEETUPS_LOADING, GET_MEETUPS, MEETUPS_ERROR,
    CREATE_MEETUP, CREATE_MEETUP_LOADING, CREATE_MEETUP_ERROR,
    CLEAR_CREATE_ERROR, ONE_MEETUP_LOADING, ONE_MEETUP_SUCCESS,
    ONE_MEETUP_ERROR, TOP_QUESTIONS, CLEAR_CREATED
} = types;
const initialState = {
    meetups: [],
    isLoading: false,
    createLoading: false,
    createError: null,
    created: false
};

const meetupsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case MEETUPS_LOADING:
            return {
                ...state,
                isLoading: payload
            };
        case GET_MEETUPS:
            return {
                ...state,
                meetups: payload,
                isLoading: false,
                oneError: false
            };
        case MEETUPS_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        case CREATE_MEETUP_LOADING:
            return {
                ...state,
                createLoading: payload
            };
        case CREATE_MEETUP:
            return {
                ...state,
                meetups: {
                    paginatedResult: [payload, ...state.meetups.paginatedResult]
                },
                createLoading: false,
                created: true
            };
        case CREATE_MEETUP_ERROR:
            return {
                ...state,
                createError: payload,
                createLoading: false
            };
        case CLEAR_CREATE_ERROR:
            return {
                ...state,
                createError: null
            };
        case ONE_MEETUP_LOADING:
            return {
                ...state,
                oneLoading: payload
            };
        case ONE_MEETUP_SUCCESS:
            return {
                ...state,
                meetup: payload,
                oneLoading: false
            };
        case ONE_MEETUP_ERROR:
            return {
                ...state,
                oneLoading: false,
                oneError: payload
            };
        case TOP_QUESTIONS:
            return {
                ...state,
                topQuestions: payload
            };
        case CLEAR_CREATED:
            return {
                ...state,
                created: false
            };
        default:
            return {
                ...state
            };
    }
};

export default meetupsReducer;
