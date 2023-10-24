import React, { useContext, useEffect } from 'react';
import Navbar from './components/navbar';
import './main.css';
import AboutSection from './components/about';
import HomeSection from './components/home';
import ProjectsSection from './components/projects';
import ContactSection from './components/contact';
import { ThemeContext } from './ThemeContext';
import 'animate.css'

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
        <div className='animate__animated animate__fadeInLeft'>
            <Navbar />
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

export default App;
