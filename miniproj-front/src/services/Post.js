import axios from 'axios';
import { fetchUserData } from './UserService'; // UserService에서 사용자 정보 가져오기

// 게시글 생성 및 데이터 준비 함수
export async function preparePostData(content, image) {
    const username = await fetchUserData(); // 로그인된 사용자 이름 가져오기
    const formData = new FormData();
    formData.append('username', username);
    formData.append('content', content);
    if (image) {
        formData.append('image', image);
    }
    formData.append('date', new Date().toLocaleString());

    return formData;
}

// 게시글 등록 함수
export async function submitPost(content, image) {
    try {
        const postData = await preparePostData(content, image); // 게시글 데이터 준비
        const response = await axios.post('http://your-springboot-server/api/posts', postData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data; // 서버에서 반환된 데이터를 반환
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.response?.data?.message || '게시글 작성 실패');
    }
}
