// src/components/UserListComp.js

import React, { useState, useEffect } from 'react';
import fetchJson from '../services/GetJsonSvc';
import './UserListComp.css';

const UserListComp = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const data = await fetchJson('/api/users');
            setUsers(data);
        } catch (error) {
            setError(error);
        }
        };

        fetchUsers();
    }, []);

    if (error) return <div>Error: {error.message}</div>;
    if (users.length === 0) return <div>Loading...</div>;

    return (
        <div>
        <h1>User List</h1>
        <table>
            <thead>
            <tr>
                <th>순번</th>
                <th>이름</th>
                <th>역할</th>
                <th>ID</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.id}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default UserListComp;
