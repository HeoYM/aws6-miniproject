import api from './api';
import { fetchUserData } from './userService';

export async function fetchPosts() {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function preparePostData(content, image) {
    const username = await fetchUserData();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('content', content);
    if (image) {
        formData.append('image', image);
    }
    formData.append('date', new Date().toLocaleString());

    return formData;
}

export async function submitPost(content, image) {
    try {
        const postData = await preparePostData(content, image);
        const response = await api.post('/posts', postData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error(error.response?.data?.message || '게시글 작성 실패');
    }
}

export async function updatePost(postId, updatedPost) {
    try {
        const formData = new FormData();
        formData.append('content', updatedPost.content);
        if (updatedPost.image) {
            formData.append('image', updatedPost.image);
        }
        formData.append('date', updatedPost.date);

        const response = await api.put(`/posts/${postId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}

export async function deletePost(postId, postAuthorId) {
    const currentUserId = localStorage.getItem('userId');

    if (currentUserId !== postAuthorId) {
        alert("작성자만 글을 삭제할 수 있습니다.");
        return;
    }

    try {
        await api.put(`/posts/${postId}/delete`);
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}