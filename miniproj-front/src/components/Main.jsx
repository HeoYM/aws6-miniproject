import React from 'react';
import styles from './css/Main.module.css';

function Main({ posts }) {
    return (
        <div className={styles.board}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.usernameHeader}>작성자</th>
                    <th className={styles.contentHeader}>내용</th>
                    <th className={styles.imageHeader}>이미지</th>
                    <th className={styles.dateHeader}>작성 날짜</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <tr key={index} className={styles.post}>
                        <td className={styles.username}>{post.username}</td>
                        <td className={styles.content}>{post.content}</td>
                        <td className={styles.imageCell}>
                            {post.image && <img src={URL.createObjectURL(post.image)} alt="첨부 이미지" className={styles.image} />}
                        </td>
                        <td className={styles.date}>
                            {post.date.split(' ')[0] + ' ' + post.date.split(' ')[1] + ' ' + post.date.split(' ')[2] + ' ' + post.date.split(' ')[4]}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Main;