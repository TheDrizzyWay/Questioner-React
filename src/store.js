import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('state', state);
    } catch (e) {
        throw Error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return serializedState;
    } catch (e) {
        return undefined;
    }
};

const persistedState = loadFromLocalStorage() || {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    persistedState,
    compose(
        applyMiddleware(...middleware),
        ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
    )
);

store.subscribe(() => {
    saveToLocalStorage({
        auth: store.getState().auth
    });
});

export default store;
