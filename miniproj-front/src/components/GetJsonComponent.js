import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetJsonComponent = ({ endpoint }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // API 서버 주소
    const API_SERVER_URL = 'http://localhost:8080';

    useEffect(() => {
        // 데이터를 가져오는 함수
        const fetchData = async () => {
            try {
                // 엔드포인트를 API 서버 주소와 결합
                const response = await axios.get(`${API_SERVER_URL}${endpoint}`);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h3>End-point = root{endpoint}</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default GetJsonComponent;
