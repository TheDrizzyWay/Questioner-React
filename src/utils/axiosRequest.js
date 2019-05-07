import axios from 'axios';

const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
});

const axiosRequest = (url, options = { method: 'GET' }) => {
    return axiosInstance({
        url,
        method: options.method,
        payload: options.body,
        headers: {
            Authorization: `Bearer ${token}` || null
        }
    })
        .then(res => res.data);
};

export default axiosRequest;
