import React, { useState } from "react";
import { valid_token } from '../config';
import '../css/contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [messageText, setMessageText] = useState('');
    const handleClick = () => {
        if (email.trim() === '' || messageText.trim() === '') {
            setMessage('Por favor complete todos los campos.');
        } else {

            const data = {
                name: email,
                message: message,
                token: valid_token 
            };

            fetch('https://portfolio-kendall-madrigal.onrender.com/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setMessage('Se envió su información correctamente');
                })
                .catch(error => {
                    setMessage('No se pudo enviar su información');
                    console.error('Error:', error);
                });
        }
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-title">
                    <h1>Contact</h1>
                </div>
                <div className="contact-info">
                    <div className="contact-me">
                        <div className="contact-me">
                            <h2>Get in Touch</h2>
                            <p>Feel free to reach out to me for any inquiries or questions you might have.  You can contact me: </p>
                            <ul className="contact-list">
                                <li><FontAwesomeIcon icon={faPhone} /> (506) 8867-7811</li>
                                <li><FontAwesomeIcon icon={faEnvelope} /> kendallmadrigal14@gmail.com</li>
                            </ul>
                            <p>I am always ready to assist you.</p>
                        </div>
                    </div>
                    <div className="contact-form">
                        
                        <label htmlFor="email-contact" className="form-contact">Email</label>
                        <input type="email" id="email-contact" className="btn-form-contact" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="message-contact" className="form-contact">Message</label>
                        <textarea type="text" id="message-contact" rows="5" cols="30" resize='none' className="btn-form-contact" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
                        <p>{message}</p>
                        <button className='btn-page' onClick={handleClick}>Send message</button>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection;