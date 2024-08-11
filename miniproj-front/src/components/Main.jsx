import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPosts, deletePost } from '../services/postService';
import styles from './css/Main.module.css';

const Main = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const currentUserId = localStorage.getItem('userId');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        getPosts();
    }, []);

    const handleEdit = (post) => {
        navigate('/post', { state: { post } });
    };

    const handleDelete = async (postId, postAuthorId) => {
        if (currentUserId !== postAuthorId) {
            alert("작성자만 글을 삭제할 수 있습니다.");
            return;
        }

        try {
            await deletePost(postId);
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div className={styles.board}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>작성자</th>
                    <th>내용</th>
                    <th>이미지</th>
                    <th>작성 날짜</th>
                    <th>수정/삭제</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.username}</td>
                        <td>{post.content}</td>
                        <td>
                            {post.image && <img src={post.image} alt="post" className={styles.image} />}
                        </td>
                        <td>{post.date}</td>
                        <td>
                            <button onClick={() => handleEdit(post)}>수정</button>
                            <button onClick={() => handleDelete(post.id, post.userId)}>삭제</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Main;