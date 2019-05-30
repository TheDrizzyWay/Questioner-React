import types from '../actiontypes';
const {
    GET_MEETUPS, MEETUPS_LOADING, MEETUPS_ERROR,
    CREATE_MEETUP, CREATE_MEETUP_ERROR, CREATE_MEETUP_LOADING,
    CLEAR_CREATE_ERROR, ONE_MEETUP_LOADING, ONE_MEETUP_SUCCESS,
    ONE_MEETUP_ERROR, TOP_QUESTIONS
} = types;
import axiosInstance from '../utils/axiosRequest';

const meetupsLoading = (value) => ({
    type: MEETUPS_LOADING,
    payload: value
});

const meetupsError = (error) => ({
    type: MEETUPS_ERROR,
    payload: error
});

const createMeetupError = (error) => ({
    type: CREATE_MEETUP_ERROR,
    payload: error
});

const createMeetupLoading = (value) => ({
    type: CREATE_MEETUP_LOADING,
    payload: value
});

const clearCreateError = () => ({ type: CLEAR_CREATE_ERROR });

const oneMeetupLoading = (value) => ({
    type: ONE_MEETUP_LOADING,
    payload: value
});

const oneMeetupError = (err) => ({
    type: ONE_MEETUP_ERROR,
    payload: err
});

const getMeetups = () => async (dispatch) => {
    try {
        dispatch(meetupsLoading(true));

        const { data } = await axiosInstance.get('/meetups', {
            headers: { 'Content-Type': 'application/json' }
        });
        return dispatch({
            type: GET_MEETUPS,
            payload: data.data
        });
    } catch (err) {
        const { response: { data: { error } } } = err;
        return dispatch(meetupsError(error));
    }
};

const createMeetup = (meetupObject) => async dispatch => {
    try {
        dispatch(createMeetupLoading(true));

        const formData = new FormData();
        Object.keys(meetupObject).forEach(key => formData.append(key, meetupObject[key]));
        formData.delete('tags');
        meetupObject.tags.forEach((tag) => {
            formData.append('tags[]', tag);
        });

        const { data } = await axiosInstance.post('/meetups', formData);
        return dispatch({
            type: CREATE_MEETUP,
            payload: data.data
        });
    } catch (err) {
        const { response: { data: { error } } } = err;
        return dispatch(createMeetupError(error));
    }
};

const getTopQuestions = (id) => async dispatch => {
    try {
        const { data } = await axiosInstance.get(`/meetups/${id}/top`, {
            headers: { 'Content-Type': 'application/json' }
        });
        return dispatch({
            type: TOP_QUESTIONS,
            payload: data.data
        });
    } catch (err) {
        const { response: { data: { error } } } = err;
        return console.log(error);
    }
};

const getOneMeetup = (id) => async dispatch => {
    try {
        dispatch(oneMeetupLoading(true));

        const { data } = await axiosInstance.get(`/meetups/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        });
        dispatch({
            type: ONE_MEETUP_SUCCESS,
            payload: data.data
        });
        return dispatch(getTopQuestions(id));
    } catch (err) {
        const { response: { data: { error } } } = err;
        return dispatch(oneMeetupError(error));
    }
};

export {
    getMeetups, meetupsError, meetupsLoading,
    createMeetup, clearCreateError, createMeetupLoading,
    createMeetupError, getOneMeetup, oneMeetupError,
    oneMeetupLoading
};
