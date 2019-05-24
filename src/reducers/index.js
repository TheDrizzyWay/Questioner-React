import { combineReducers } from 'redux';
import authReducer from './authReducer';
import meetupsReducer from './meetupsReducer';

export default combineReducers({
    auth: authReducer,
    meetups: meetupsReducer
});
