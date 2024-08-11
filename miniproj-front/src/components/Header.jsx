import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './css/Header.module.css';
import { logout } from '../services/auth';

function Header() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username') || '';

    const handleLogout = () => {
        logout();
        navigate('/login'); // 로그아웃 후 로그인 페이지로 리디렉션
    };

    return (
        <header className={styles.header}>
            <h1>[AWS 6기] 4조 Version 1</h1>
            <nav>
                <Link to="/">메인 화면</Link> |
                {username ? (
                    <>
                        <Link to="/post">글 작성</Link> |
                        <span>{username}님 환영합니다</span> |
                        <button onClick={handleLogout} className={styles.logoutButton}>로그아웃</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">로그인</Link> |
                        <Link to="/signup">회원가입</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
