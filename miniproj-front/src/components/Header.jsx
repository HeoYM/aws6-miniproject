import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';
import { logout } from '../services/Logout';

function Header() {
    // 세션에서 사용자 이름을 가져옴 (예: 세션에 'username'이 저장된 경우)
    const username = sessionStorage.getItem('username');

    return (
        <header className={styles.header}>
            <h1>[AWS 6기] 4조 Version 1</h1>
            <Link to="/">메인 화면</Link> | <Link to="/post">글 작성</Link> | <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
            <nav>
                <Link to="/">메인 화면</Link> |
                {username ? (
                    // 세션이 존재하는 경우
                    <>
                        <Link to="/post">글 작성</Link> |
                        <span>{username}님 환영합니다</span> |
                        <Link to="/" onClick={logout}>로그아웃</Link>
                    </>
                ) : (
                    // 세션이 존재하지 않는 경우
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