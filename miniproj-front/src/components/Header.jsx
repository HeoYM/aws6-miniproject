import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './css/Header.module.css';
import { logout } from '../services/Logout';

function Header() {
    // 세션에서 사용자 이름을 가져옴 (예: 세션에 'username'이 저장된 경우)
    const username = sessionStorage.getItem('username');

    return (
        <header className={styles.header}>
            <h1>[AWS 6기] 4조 Version 1</h1>
            <nav>
                <NavLink to="/main" className={({ isActive }) => isActive ? styles.active : undefined}>메인 화면</NavLink> |
                {username ? (
                    <>
                        <NavLink to="/post" className={({ isActive }) => isActive ? styles.active : undefined}>글 작성 </NavLink>|
                        <span>{username}님 환영합니다</span> |
                        <NavLink to="/" onClick={logout} className={({ isActive }) => isActive ? styles.active : undefined}>로그아웃</NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : undefined}>로그인</NavLink> |
                        <NavLink to="/signup" className={({ isActive }) => isActive ? styles.active : undefined}>회원가입</NavLink>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;