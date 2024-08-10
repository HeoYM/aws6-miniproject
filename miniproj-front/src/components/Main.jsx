// components/Main.jsx

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './css/Main.module.css';

const Main = () => {
    const [posts, setPosts] = React.useState([]);
    const navigate = useNavigate();
    const currentUserId = localStorage.getItem('userId'); // 현재 로그인된 사용자 ID

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://your-springboot-server/api/posts');
                setPosts(response.data.filter(post => !post.isDeleted)); // 삭제되지 않은 게시글만 표시
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    // 사용자가 '수정' 버튼을 클릭했을 때 호출됩니다.
    const handleEdit = async (postId) => {
        try {
            const response = await axios.get(`http://your-springboot-server/api/posts/${postId}`);
            navigate('/edit', { state: { post: response.data } }); // 글 작성 페이지로 리다이렉트하며 데이터 전달
        } catch (error) {
            console.error('Error fetching post for editing:', error);
        }
    };

    // 사용자가 '삭제' 버튼을 클릭했을 때 호출됩니다.
    const handleDelete = async (postId, postAuthorId) => {
        if (currentUserId !== postAuthorId) {
            alert("작성자만 글을 삭제할 수 있습니다.");
            return;
        }

        try {
            // 게시글을 삭제된 것으로 표시합니다 (isDeleted를 true로 설정)
            await axios.put(`http://your-springboot-server/api/posts/${postId}/delete`);

            // 클라이언트 측에서 게시글 제거
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error marking post as deleted:', error);
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
                            <button onClick={() => handleEdit(post.id)}>수정</button>
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
