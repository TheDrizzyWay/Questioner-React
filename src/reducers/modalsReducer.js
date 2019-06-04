import types from '../actiontypes';

const { SHOW_CREATE_MODAL, CLOSE_CREATE_MODAL } = types;

const initialState = { displayModal: false };

const modalsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_CREATE_MODAL:
            return {
                displayModal: true
            };
        case CLOSE_CREATE_MODAL:
            return {
                displayModal: false
            };
        default:
            return {
                ...state
            };
    }
};

export default modalsReducer;
