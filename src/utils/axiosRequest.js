import axios from 'axios';
import store from '../store';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
});

axiosInstance.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
