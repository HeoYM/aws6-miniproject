import React, { useState } from 'react';
import styles from './css/Signup.module.css';
import { signupUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validateInputs = () => {
        const usernamePattern = /^[a-zA-Z0-9]{4,12}$/;
        const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;

        if (!usernamePattern.test(username)) {
            alert('사용자 이름은 4~12자의 영문자 또는 숫자이어야 합니다.');
            return false;
        }

        if (!passwordPattern.test(password)) {
            alert('비밀번호는 6~20자의 영문자, 숫자, 특수문자이어야 합니다.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

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
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="4~12자의 영문자 또는 숫자"
                />
            </div>
            <div className={styles['form-group']}>
                <label>비밀번호</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="6~20자의 영문자, 숫자, 특수문자"
                />
            </div>
            <button type="submit" className={styles.button}>회원가입</button>
        </form>
    );
}

export default Signup;