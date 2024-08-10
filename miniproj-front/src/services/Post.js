// services/Post.js
import axios from 'axios';

// 게시글 생성 함수 (기존 코드)
export async function createPost(postData) {
    const formData = new FormData();
    formData.append('username', postData.username);
    formData.append('content', postData.content);
    if (postData.image) {
        formData.append('image', postData.image);
    }
    formData.append('date', postData.date);

    try {
        const response = await axios.post('http://your-springboot-server/api/posts', formData, {
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

// 게시글 조회 함수
export async function fetchPosts() {
    try {
        const response = await axios.get('http://your-springboot-server/api/posts');
        return response.data; // 서버에서 반환된 데이터를 반환
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('게시글 조회에 실패했습니다.');
    }
}
