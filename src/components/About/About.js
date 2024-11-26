import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import ManojResume from './Manoj Saddanapu - SE Java.pdf';

const About = () => {

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(ManojResume, '_blank');
  };

  return (
    <div className="about-container">
      <div className="introduction">
        <h1>Introduction</h1>
        <p> 
          Hi <span role="img" aria-label="wave">👋</span>, I'm Manoj Saddanapu, a Software Engineer with 3+ years of experience in building high-performance backend systems and optimizing full-stack applications. I specialize in crafting scalable solutions using Python, Java, and SQL, with a focus on enhancing efficiency and reliability <span role="img" aria-label="gear">⚙️</span>.
        </p>
        <p>
        <span role="img" aria-label="light bulb">💡</span> Beyond coding, I love to travel <span role="img" aria-label="airplane">✈️</span>, capture the world through my lens <span role="img" aria-label="camera">📸</span>, and experiment with new culinary creations <span role="img" aria-label="chef">🧑‍🍳</span>. These hobbies let me explore creativity in all aspects of life.
        </p>
        <p>
          Check out my projects <Link className="projects-link" to="/projects">here</Link>.
        </p>
        <a href= {ManojResume} className="view-resume-btn" onClick={handleResumeClick}>View Resume <span className="arrow-icon">&#8594;</span></a>
      </div>
    </div>
  );
};

export default About;
