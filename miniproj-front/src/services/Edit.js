import axios from 'axios';

// 게시글 수정 함수
export const updatePost = async (postId, updatedPost) => {
    try {
        const formData = new FormData();
        formData.append('content', updatedPost.content);
        if (updatedPost.image) {  // updatedPost 객체 내의 image가 있는 경우에만 추가
            formData.append('image', updatedPost.image);
        }
        formData.append('date', updatedPost.date);

        const response = await axios.put(`http://your-springboot-server/api/posts/${postId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
};
