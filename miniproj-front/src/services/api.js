import axios from 'axios';
import { logout } from './auth';

const api = axios.create({
    baseURL: 'http://your-springboot-server/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            logout(); // 로그아웃 처리
        }
        return Promise.reject(error);
    }
);

export default api;
