import React, { useState, useEffect } from 'react';
import styles from './css/Post.module.css';
import { createPost } from '../services/Post';  // 서비스 파일에서 함수 import

function Post({ addPost }) {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    // 세션 정보에서 사용자 이름을 가져와서 자동으로 설정
    useEffect(() => {
        const sessionUsername = localStorage.getItem('username'); // localStorage에서 사용자 이름 가져오기
        if (sessionUsername) {
            setUsername(sessionUsername);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPostData = {
            username,
            content,
            image,
            date: new Date().toLocaleString(),
        };

        try {
            const newPost = await createPost(newPostData);  // 서버에 새 게시글 전송
            addPost(newPost); // 새 게시글을 리스트에 추가
            setContent(''); // 폼 초기화
            setImage(null);
        } catch (error) {
            alert('게시글 작성 실패: ' + error.message);
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
            <button type="submit" className={styles.button}>작성</button>
        </form>
    );
}

export default Post;