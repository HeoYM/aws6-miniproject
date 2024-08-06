import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './components/css/App.module.css';

function App() {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts([post, ...posts]);
    };

    return (
        <Router>
            <div className={styles.container}>
                <Header />
                <main className={styles.mainContent}>
                    <Routes>
                        <Route path="/" element={<Main posts={posts} />} />
                        <Route path="/post" element={<Post addPost={addPost} />} />
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