import React, { useState, useEffect } from 'react';
import '../css/loadingAnimation.css';

const LoadingAnimation = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length < 3 ? prev + '.' : '.');
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-animation">
            <h2>Loading projects{dots}</h2> 
        </div>
    );
};

export default LoadingAnimation;
