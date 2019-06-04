import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import types from '../../actiontypes';
import { showCreateModal, closeCreateModal } from '../../actions';

const { SHOW_CREATE_MODAL, CLOSE_CREATE_MODAL } = types;
const mockStore = configureMockStore([thunk]);
const store = mockStore();
let action;

describe('modal actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('it should return correct action for open modal state', () => {
        action = showCreateModal();
        expect(action).toEqual({ type: SHOW_CREATE_MODAL });
    });

    test('it should return correct action for close modal state', () => {
        action = closeCreateModal();
        expect(action).toEqual({ type: CLOSE_CREATE_MODAL });
    });
});
