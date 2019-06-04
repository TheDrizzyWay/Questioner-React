import modalsReducer from '../../reducers/modalsReducer';
import types from '../../actiontypes';

const { SHOW_CREATE_MODAL, CLOSE_CREATE_MODAL } = types;
const initialState = { displayModal: false };

describe('modals reducer', () => {
    it('should return initial state', () => {
        expect(modalsReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
    });

    it('should return SHOW_CREATE_MODAL on modal toggle', () => {
        expect(modalsReducer(undefined, {
            type: SHOW_CREATE_MODAL
        })).toEqual({ displayModal: true });
    });

    it('should return CLOSE_CREATE_MODAL on modal close', () => {
        expect(modalsReducer(undefined, {
            type: CLOSE_CREATE_MODAL
        })).toEqual({ displayModal: false });
    });
});
