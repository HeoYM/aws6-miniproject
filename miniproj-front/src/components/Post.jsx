import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './css/Post.module.css';

const Post = () => {
    const location = useLocation();  // 리다이렉트된 데이터 접근
    const navigate = useNavigate();
    const [content, setContent] = useState('');  // 본문 내용을 관리하는 상태
    const [image, setImage] = useState(null);  // 첨부 이미지를 관리하는 상태

    // 컴포넌트가 처음 렌더링될 때, location.state에 전달된 데이터를 사용해 상태를 초기화합니다.
    useEffect(() => {
        if (location.state && location.state.post) {
            setContent(location.state.post.content);  // 기존 게시글의 본문 내용 설정
            setImage(location.state.post.image);  // 기존 게시글의 이미지 설정
        }
    }, [location.state]);

    // 폼이 제출되었을 때 호출됩니다.
    const handleSubmit = async (e) => {
        e.preventDefault();  // 기본 폼 제출 동작 방지

        try {
            const updatedPost = {
                content,
                image,
                date: new Date().toLocaleString(),  // 수정된 시간으로 업데이트
            };

            // 백엔드로 수정된 데이터 전송 (ID 기반)
            await axios.put(`http://your-springboot-server/api/posts/${location.state.post.id}`, updatedPost);
            navigate('/');  // 수정 후 메인 화면으로 리다이렉트
        } catch (error) {
            console.error('Error updating post:', error);
            alert('게시글 수정 실패: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
                <label>작성자</label>
                <input type="text" value={location.state.post.username} readOnly />
            </div>
            <div className={styles['form-group']}>
                <label>본문</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <div className={styles['form-group']}>
                <label>첨부 이미지</label>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button type="submit" className={styles.button}>완료</button>
        </form>
    );
};

export default Post;
