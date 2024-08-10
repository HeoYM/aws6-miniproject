import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { submitPost } from '../services/Post'; // 게시글 생성 함수
import { updatePost } from '../services/Edit'; // 게시글 수정 함수
import { fetchUserData } from '../services/UserService'; // 사용자 정보 가져오기 함수
import styles from './css/Post.module.css';

const Post = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const user = await fetchUserData();
                setUsername(user);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        loadUserData();

        if (location.state && location.state.post) {
            setContent(location.state.post.content);
            setImage(location.state.post.image);
        }
    }, [location.state]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (location.state && location.state.post) {
                await updatePost(location.state.post.id, content, image); // 수정
            } else {
                await submitPost({ username, content, image }); // 등록
            }
            navigate('/');
        } catch (error) {
            console.error('Error submitting post:', error);
            alert('게시글 처리 실패: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
                <label>작성자</label>
                <input type="text" value={username} readOnly />
            </div>
            <div className={styles['form-group']}>
                <label>본문</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <div className={styles['form-group']}>
                <label>첨부 이미지</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button type="submit" className={styles.button}>
                {location.state && location.state.post ? '수정 완료' : '등록'}
            </button>
        </form>
    );
};

export default Post;
