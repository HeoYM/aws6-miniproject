import axios from 'axios';

export async function signupUser(username, password) {
    const data = {
        username: username,
        password: password
    };

    try {
        const response = await axios.post('http://your-springboot-server/api/signup', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data; // 서버에서 반환된 데이터를 반환
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.response?.data?.message || '회원가입 실패');
    }
}