import React, { useState } from 'react';
import styles from './css/Signup.module.css';
import { signupUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signupUser(username, password);
            alert('회원가입 성공');
            navigate('/login');
        } catch (error) {
            alert('회원가입 실패: ' + error.message);
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
            <button type="submit" className={styles.button}>회원가입</button>
        </form>
    );
}

export default Signup;
