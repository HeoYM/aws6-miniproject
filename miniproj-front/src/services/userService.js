import api from './api';

export async function fetchUserData() {
    try {
        const response = await api.get('/user');
        return response.data.username;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}
