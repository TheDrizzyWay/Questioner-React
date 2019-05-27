import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import types from '../../actiontypes';
import { toggleCreateModal } from '../../actions';

const { TOGGLE_CREATE_MODAL } = types;
const mockStore = configureMockStore([thunk]);
const store = mockStore();
let action;

describe('modal actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    test('it should return correct action for open modal state', () => {
        action = toggleCreateModal();
        expect(action).toEqual({ type: TOGGLE_CREATE_MODAL });
    });
});
