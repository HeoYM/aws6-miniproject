// src/pages/UsersPage.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserListComp from '../components/UserListComp';


const UsersPage = () => {
    return (
        <div>
            <Header />
            <h1>Users Page</h1>
            <UserListComp />
            <Footer />
        </div>
    );
    };

export default UsersPage;
