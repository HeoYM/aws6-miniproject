import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './components/css/App.module.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 로그인 상태를 localStorage에서 확인
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const addPost = (post) => {
        setPosts([post, ...posts]);
    };

    return (
        <Router>
            <div className={styles.container}>
                <Header />
                <main className={styles.mainContent}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/main" />} />
                        <Route path="/main" element={<Main posts={posts} />} />
                        {/* 로그인 상태에 따른 접근 제어 */}
                        <Route path="/post" element={isLoggedIn ? <Post addPost={addPost} /> : <Navigate to="/login" />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
