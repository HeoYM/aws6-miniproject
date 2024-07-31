// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

function App() {
    return (
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    );
}

export default App;
