import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/about.css';

const IconComponentText = ({ iconName, text }) => {
    return (
        <div className='icon-component'>
            <FontAwesomeIcon className='icon-text' icon={iconName}/>
            <p>{text}</p>
        </div>
    );
};

export default IconComponentText;