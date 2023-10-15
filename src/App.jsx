// App.jsx
import React, { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import './main.css';
import { ThemeContext } from './ThemeContext';

const App = () => {
    const { isDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div>
            <Navbar />
        </div>
    );
};

export default App;
