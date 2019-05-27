import types from '../actiontypes';

const { TOGGLE_CREATE_MODAL } = types;

const initialState = { showCreateModal: false };

const modalsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_CREATE_MODAL:
            return {
                ...state,
                showCreateModal: !state.showCreateModal
            };
        default:
            return {
                ...state
            };
    }
};

export default modalsReducer;
