import React from 'react';
import '../css/about.css';
import IconComponentText from './icon';
import { faJs, faReact, faHtml5, faCss3Alt, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const AboutSection = () => {
    const varIcons = [
        {
            icon: faJs,
            text: 'JavaScript'
        },
        {
            icon: faReact,
            text: 'React'
        },
        {
            icon: faHtml5,
            text: 'HTML'
        },
        {
            icon: faDatabase,
            text: 'MongoDB'
        },
        {
            icon: faCss3Alt,
            text: 'CSS'
        },
        {
            icon: faGithub,
            text: 'Github'
        },
        {
            icon: faNodeJs,
            text: 'Node JS'
        },
        {
            icon: faDatabase,
            text: 'MSSQL'
        }
    ]
    return (
        <section id='about'>
            <div id='about-info'>
                <div id='title-about'>
                    <h1>About me</h1>
                </div>
                <div id='info-about-me'>
                    I am a passionate student of <strong>Information Technology</strong> (IT) with a specialization in <strong>software development</strong>. My focus is on web development and mobile app creation, and I am committed to becoming a highly skilled professional in this field.
                    Although I am currently in the process of completing my degree. I have acquired strong technical skills in JavaScript, React, RESTful APIs, Node.js, MongoDB (through APIs), SQL Server, HTML, and CSS. I also have experience in mobile app development using React Native.
                </div>
            </div>
            <div id='about-skills'>
                <div id='skills'>
                    <div id='skills-title'><h1>Technical Skills</h1></div>
                    <div id='components'>

                        {varIcons.map((varIcon, index) => (
                            <IconComponentText key={varIcon.text} iconName={varIcon.icon} text={varIcon.text} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;