import React, { useContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import './main.css';
import AboutSection from './components/about';
import HomeSection from './components/home';
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
            <HomeSection />
            <AboutSection />
        </div>
    );
};

export default App;
