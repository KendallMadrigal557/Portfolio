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
    const handleNavLinkClick = (e, target) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        closeNavbar();
    }


    return (
        <nav className='navbar'>
            <div className='logo'></div>
            <ul className='navbarList'>
                <li className='navbarItem' ><a href='#profile'>Home</a></li>
                <li className='navbarItem' ><a href="#about">About</a></li>
                <li className='navbarItem'><a href="#projects">Projects</a></li>
                <li className='navbarItem'><a href="">Contact</a></li>
            </ul>
            <div className='toggle-theme' onClick={handleToggle}></div>

            <a href="" onClick={handleMenuOpen} id='menu'>Menu</a>

            <div id='mobile-menu' className='overlay'>
                <a onClick={handleMenuClose} href="" className='close'>&times;</a>
                <div className='overlay-content'>
                    <a href='#profile' onClick={(e) => handleNavLinkClick(e, 'profile')}>Home</a>
                    <a href="#about"  onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
                    <a href='#projects'  onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
                    <a href='#contact' onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
                </div>
 
            </div>
        </nav>
    );
};

export default Navbar;