import modalsReducer from '../../reducers/modalsReducer';
import types from '../../actiontypes';

const { TOGGLE_CREATE_MODAL } = types;
const initialState = { showCreateModal: false };

describe('modals reducer', () => {
    it('should return initial state', () => {
        expect(modalsReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
    });

    it('should return TOGGLE_CREATE_MODAL on modal toggle', () => {
        expect(modalsReducer(undefined, {
            type: TOGGLE_CREATE_MODAL
        })).toEqual({
            showCreateModal: true
        });
    });
});
