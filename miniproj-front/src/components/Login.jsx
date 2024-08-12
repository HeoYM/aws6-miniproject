import React, { useState } from 'react';
import styles from './css/Login.module.css';
import { loginUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginUser(username, password);
            alert('로그인 성공');
            navigate('/main'); // 대문자를 소문자로 변경
        } catch (error) {
            alert('로그인 실패: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
                <label>사용자 이름</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className={styles['form-group']}>
                <label>비밀번호</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className={styles.button}>로그인</button>
        </form>
    );
}

export default Login;
