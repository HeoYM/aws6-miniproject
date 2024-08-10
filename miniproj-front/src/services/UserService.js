// src/services/UserService.js

import axios from 'axios';

// 로그인된 사용자 정보 가져오기 함수
export async function fetchUserData() {
    try {
        const response = await axios.get('http://your-springboot-server/api/user'); // 사용자 정보를 가져오는 API 호출
        return response.data.username; // 사용자 이름 반환 (ID나 username을 반환할 수 있음)
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}
