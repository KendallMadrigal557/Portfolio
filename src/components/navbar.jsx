import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import '../css/navbar.css';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    const handleToggle = () => {
        toggleDarkMode();
    };

    return (
        <nav className='navbar'>
            <div className='logo'></div>
            <ul className='navbarList'>
                <li className='navbarItem'>Home</li>
                <li className='navbarItem'>About</li>
                <li className='navbarItem'>Projects</li>
                <li className='navbarItem'>Contact</li>
            </ul>
            <button onClick={handleToggle}>Toggle Theme</button>
        </nav>
    );
};

export default Navbar;