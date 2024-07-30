import React from 'react';
import GetJsonComponent from './components/GetJsonComponent'; // 컴포넌트 경로 맞추기

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Spring Boot APIcall</h1>
                <GetJsonComponent endpoint="/api/test" />
                <GetJsonComponent endpoint="/api/json" />
                <GetJsonComponent endpoint="/api/user" />
            </header>
        </div>
    );
}

export default App;
