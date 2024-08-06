import style from './components/css/index.module.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className={style.div}>
            <App />
        </div>
    </React.StrictMode>
);

