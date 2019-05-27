import types from '../actiontypes';

const { MEETUPS_LOADING, GET_MEETUPS, MEETUPS_ERROR,
    CREATE_MEETUP, CREATE_MEETUP_LOADING, CREATE_MEETUP_ERROR,
    CLEAR_CREATE_ERROR
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
                isLoading: false
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
                createLoading: true
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
        default:
            return {
                ...state
            };
    }
};

export default meetupsReducer;
