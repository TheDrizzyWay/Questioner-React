import types from '../actiontypes';

const { MEETUPS_LOADING, GET_MEETUPS, MEETUPS_ERROR } = types;
const initialState = {
    meetups: [],
    isLoading: false
};

const meetupsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case MEETUPS_LOADING:
            return {
                ...state,
                isLoading: true
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
        default:
            return {
                ...state
            };
    }
};

export default meetupsReducer;
