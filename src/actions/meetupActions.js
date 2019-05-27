import types from '../actiontypes';
const { GET_MEETUPS, MEETUPS_LOADING, MEETUPS_ERROR,
    CREATE_MEETUP, CREATE_MEETUP_ERROR, CREATE_MEETUP_LOADING,
    CLEAR_CREATE_ERROR
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

export {
    getMeetups, meetupsError, meetupsLoading,
    createMeetup, clearCreateError, createMeetupLoading,
    createMeetupError
};
