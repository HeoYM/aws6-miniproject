import api from './api';

export async function loginUser(username, password) {
    const data = { username, password };

    try {
        const response = await api.post('/login', data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('userId', response.data.userId); // 추가로 userId 저장
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.response?.data?.message || '로그인 실패');
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId'); // userId도 제거
    alert('로그아웃 되었습니다.');
    window.location.href = '/login';
}

export async function signupUser(username, password) {
    const data = { username, password };

    try {
        const response = await api.post('/signup', data);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.response?.data?.message || '회원가입 실패');
    }
}