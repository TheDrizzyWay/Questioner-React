import types from '../actiontypes';
const { GET_MEETUPS, MEETUPS_LOADING, MEETUPS_ERROR } = types;
import axiosInstance from '../utils/axiosRequest';

const meetupsLoading = (value) => ({
    type: MEETUPS_LOADING,
    payload: value
});

const meetupsError = (error) => ({
    type: MEETUPS_ERROR,
    payload: error
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

export { getMeetups, meetupsError, meetupsLoading };
