import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import ManojResume from './ManojResume-FullStack.pdf';

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
          Hi <span role="img" aria-label="wave">👋</span>, I'm Manoj Saddanapu, a 2024 graduate <span role="img" aria-label="graduation cap">🎓</span> with a passion for crafting robust backend systems and captivating mobile applications. As a seasoned Software Developer, I specialize in both MEAN and MERN stacks <span role="img" aria-label="tools">🛠️</span>.
        </p>
        <p>
          <span role="img" aria-label="light bulb">💡</span> Beyond coding, I love going for vacations and exploring new places. On a different note, I'm also into photography <span role="img" aria-label="camera">📸</span> and cooking <span role="img" aria-label="chef">🧑‍🍳</span>. In photography, it's not just a hobby; I see it as a way to capture moments <span role="img" aria-label="framed picture">🖼️</span>, tell stories.
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
