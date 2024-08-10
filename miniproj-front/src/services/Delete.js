import axios from 'axios';
import { fetchUserData } from './UserService';

// 게시글 삭제 함수
export const deletePost = async (postId, postAuthorId) => {
    try {
        const currentUserId = await fetchUserData(); // 현재 로그인된 사용자 ID 가져오기

        if (currentUserId !== postAuthorId) {
            alert("작성자만 글을 삭제할 수 있습니다.");
            return;
        }

        await axios.put(`http://your-springboot-server/api/posts/${postId}/delete`);

    } catch (error) {
        console.error('Error marking post as deleted:', error);
        throw error;
    }
};
