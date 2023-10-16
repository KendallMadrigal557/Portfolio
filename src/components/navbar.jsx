import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import '../css/navbar.css';

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    const handleToggle = () => {
        toggleDarkMode();
    };
    function openNavbar() {
        document.getElementById("mobile-menu").style.width = "100%";
    }

    function closeNavbar() {
        document.getElementById("mobile-menu").style.width = "0%";
    }

    const handleMenuOpen = (e) =>{
        e.preventDefault();
        openNavbar();
    }

    const handleMenuClose = (e) =>{
        e.preventDefault();
        closeNavbar();
    }


    return (
        <nav className='navbar'>
            <div className='logo'></div>
            <ul className='navbarList'>
                <li className='navbarItem' href='#profile'>Home</li>
                <li className='navbarItem'>About</li>
                <li className='navbarItem'>Projects</li>
                <li className='navbarItem'>Contact</li>
            </ul>
            <div className='toggle-theme' onClick={handleToggle}></div>

            <a href="" onClick={handleMenuOpen} id='menu'>Menu</a>

            <div id='mobile-menu' className='overlay'>
                <a onClick={handleMenuClose} href="" className='close'>&times;</a>
                <div className='overlay-content'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Projects</a>
                    <a>Contact</a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;