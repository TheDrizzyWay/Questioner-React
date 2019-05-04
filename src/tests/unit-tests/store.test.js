import { createStore } from 'redux';
import rootReducer from '../../reducers';

const store = createStore(rootReducer);

describe('Root Reducer', () => {
    it('should return the initial state', () => {
        const expectedInitialState = { sample: true };
        expect(store.getState()).toEqual(expectedInitialState);
    });
});
