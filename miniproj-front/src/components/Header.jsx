import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';
import { logout } from '../services/auth';

function Header() {
    // 로컬 저장소에서 사용자 이름을 가져옴, 기본값을 빈 문자열로 설정
    const username = localStorage.getItem('username') || '';

    return (
        <header className={styles.header}>
            <h1>[AWS 6기] 4조 Version 1</h1>
            <nav>
                <Link to="/">메인 화면</Link> |
                {username ? (
                    // 사용자가 로그인한 경우
                    <>
                        <Link to="/post">글 작성</Link> |
                        <span>{username}님 환영합니다</span> |
                        <Link to="/" onClick={logout}>로그아웃</Link>
                    </>
                ) : (
                    // 사용자가 로그인하지 않은 경우
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