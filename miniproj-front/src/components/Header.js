import React from 'react';
import './Header.css'; // 스타일이 필요할 경우 추가

const Header = () => {
    return (
        <header className="header">
        <h1>My Application</h1>
        <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            {/* 다른 링크들 추가 가능 */}
            </ul>
        </nav>
        </header>
    );
};

export default Header;
