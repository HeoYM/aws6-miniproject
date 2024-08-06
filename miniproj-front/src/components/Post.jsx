import React, { useState } from 'react';
import styles from './css/Post.module.css';

function Post({ addPost }) {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            username,
            content,
            image,
            date: new Date().toLocaleString(),
        };
        addPost(newPost);
        setUsername('');
        setContent('');
        setImage(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
                <label>작성자</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
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