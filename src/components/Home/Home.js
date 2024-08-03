import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import Homelogo from './Homelogo1.png';

const Home = () => {
  const fullName = 'Manoj Saddanapu';
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayName((prev) => {
        if (currentIndex <= fullName.length) {
          currentIndex++;
          return fullName.slice(0, currentIndex);
        }
        clearInterval(intervalId);
        return prev;
      });
    }, 200);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="background-image"></div>
          <div className='logo-container'>
            <img src={Homelogo} alt="Home Logo" className="home-logo"/>
          </div>
          <div className="intro-text">
            <h1 className="static-text">Hi, I'm <span role="img" arial-label="wave">👋</span></h1>
            <h1 className="highlighted-name">{displayName}</h1>
            <h2 className="job-title">Software Developer</h2>
          </div>
        <p className='paragraph'>I'm a Backend Developer with experience in building scalable and optimized backend systems.</p>
        <div className="buttons">
          <NavLink exact to="/contact" activeClassName="active">
            <button className="contact-btn">Contact Me</button>
          </NavLink>
        </div>
        <div className="social-icons">
          <a href="mailto:manoj.s91099@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="https://github.com/manojs1099" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/manoj-sa72199126/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );  
};


export default Home;
