// services/Main.js

import axios from 'axios';

// 게시글 조회 함수
export const fetchPosts = async () => {
    try {
        const response = await axios.get('http://your-springboot-server/api/posts');
        return response.data.filter(post => !post.isDeleted); // 삭제되지 않은 게시글만 반환
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};
