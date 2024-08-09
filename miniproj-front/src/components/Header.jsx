import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';
import { logout } from '../services/Logout'; // 로그아웃 함수 import

function Header() {
    return (
        <header className={styles.header}>
            <h1>게시판</h1>
            <nav>
                <Link to="/">메인 화면</Link> | <Link to="/post">글 작성</Link> | <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link> |
                {/* 로그아웃 링크를 버튼으로 변경하여 클릭 시 로그아웃 함수 호출 */}
                <Link onClick={logout}>로그아웃</Link>
            </nav>
        </header>
    );
}

export default Header;