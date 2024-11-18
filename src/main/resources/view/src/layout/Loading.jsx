import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import App from '../App';

function LoadingApp() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <div className="loading-screen" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ffffff', }} >
            <CircularProgress />
        </div>
    ) : (
        <App />
    );
}

export default LoadingApp;
