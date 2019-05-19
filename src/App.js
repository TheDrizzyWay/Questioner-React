import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
            <ToastContainer position="top-center"
                removeCloseButton autoClose={3000} hideProgressBar />
        </Provider>
    );
};

export default App;
