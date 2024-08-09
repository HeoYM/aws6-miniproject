import axios from 'axios';

export async function loginUser(username, password) {
    const data = {
        username: username,
        password: password
    };

    try {
        const response = await axios.post('http://your-springboot-server/api/login', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // JWT 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', response.data.token);
        return response.data; // 토큰이 포함된 응답 데이터 반환
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.response?.data?.message || '로그인 실패');
    }
}