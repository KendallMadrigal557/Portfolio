import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import '../css/home.css'

const HomeSection = () => {
    const handleDownload = () => {
        window.open(`/src/assets/Curriculum Vitae.pdf`)
    }
    const goLocation = (link) => {
        window.open(link, '_blank')
    }
    return (
        <section id='profile'>
            <div className='pic-container'>
                <img src="/img/profilepic.jpg" alt="" />
            </div>
            <div className='info-text'>
                <p className='p-hello'>Hello I'm</p>
                <h1 className='title-name'>Kendall Madrigal</h1>
                <p className='p-developer'>Software Developer</p>

                <div className='btn-container'>
                    <button className='btn-view' onClick={handleDownload}>Download CV</button>
                </div>

                <div className='icon-container' >
                    <FontAwesomeIcon className='icon' icon={faInstagram} onClick={() =>  goLocation('https://www.instagram.com/madrigal_557/')} />
                    <FontAwesomeIcon className='icon' icon={faLinkedin} onClick={() => goLocation('https://www.linkedin.com/in/ken-madrigal/')} />
                    <FontAwesomeIcon className='icon' icon={faGithub} onClick={() => goLocation(`https://github.com/KendallMadrigal557`)} />
                </div>
            </div>
        </section>
    );
};

export default HomeSection;