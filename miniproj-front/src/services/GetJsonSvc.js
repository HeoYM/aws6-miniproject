// src/services/GetJsonSvc.js

const API_BASE_URL = 'http://localhost:8080';

/**
 * Fetches data from the API endpoint.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response.
 */
const fetchJson = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchJson;
