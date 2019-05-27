import { combineReducers } from 'redux';
import authReducer from './authReducer';
import meetupsReducer from './meetupsReducer';
import modalsReducer from './modalsReducer';

export default combineReducers({
    auth: authReducer,
    meetups: meetupsReducer,
    modals: modalsReducer
});
