import axios from 'axios';
import store from '../store';

let apiUrl = 'http://localhost:3000/api/v1';
if (window.location.href.split('.').includes('herokuapp')) {
    apiUrl = 'https://drizzyquestioner.herokuapp.com/api/v1';
}
const axiosInstance = axios.create({
    baseURL: apiUrl
});

axiosInstance.interceptors.request.use((config) => {
    const token = store.getState().auth.loggedIn ? store.getState().auth.loggedIn[0].token : null;
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
