import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { submitPost, updatePost } from '../services/postService';
import { fetchUserData } from '../services/userService';
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

    const validateImage = (file) => {
        const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
        const maxSizeInBytes = 5 * 1024 * 1024; // 5MB

        if (!allowedFormats.includes(file.type)) {
            alert('지원되는 이미지 포맷은 JPEG, PNG, GIF입니다.');
            return false;
        }

        if (file.size > maxSizeInBytes) {
            alert('이미지 파일 크기는 5MB 이하이어야 합니다.');
            return false;
        }

        return true;
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && validateImage(file)) {
            setImage(file);
        } else {
            setImage(null); // 이미지 파일이 유효하지 않은 경우 null로 설정
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (location.state && location.state.post) {
                await updatePost(location.state.post.id, { content, image });
            } else {
                await submitPost(content, image);
            }
            navigate('/'); // 성공 시 메인 페이지로 이동
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
                <input type="file" onChange={handleImageChange} />
            </div>
            <button type="submit" className={styles.button}>
                {location.state && location.state.post ? '수정 완료' : '등록'}
            </button>
        </form>
    );
};

export default Post;
