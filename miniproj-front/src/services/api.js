import axios from 'axios';
import { logout } from './auth';

const api = axios.create({
    baseURL: 'http://your-springboot-server/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Authorization 헤더를 자동으로 추가하는 인터셉터
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

// 응답 인터셉터: 전역 에러 처리 및 401 Unauthorized 처리
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