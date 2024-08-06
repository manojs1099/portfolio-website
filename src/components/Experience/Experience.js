import React from 'react';
import './Experience.css';
import cmuLogo from './cmuLogo.png';
import capgLogo from './capgLogo.png';

const experiences = [
  {
    title: 'Website Manager',
    company: 'CLARKE HISTORICAL LIBRARY',
    responsibilities: [
      'Involved in dynamic contributions to web and mobile development projects, actively influencing and improving project outcomes.',
      'Developed multiple shared components to simplify tasks for fellow developers, boosting efficiency and teamwork.',
      'Enhanced product performance through significant contributions to backend development, optimizing essential components for improved efficiency.',
      'Implemented data security for the company\'s product to provide role-based access control.',
    ],
    period: 'April 2023 - Present',
    logo: cmuLogo,
  },
  {
    title: 'Software Engineer',
    company: 'CAPGEMINI',
    responsibilities: [
      'Gained experience with Git version control contributing to the development and maintenance of code repositories.',
      'Worked on the application dashboard, making it more user-friendly and efficient.',
      'Collaborated with the team to troubleshoot and debug software issues, enhancing application performance.',
    ],
    period: 'Jan 2023 - March 2023',
    logo: capgLogo,
  },
];


const Experience = () => {
  return (
    <div className="timeline-container">
      <p>My Journey so far!</p>
      <h1>Work Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}> 
            <div className="timeline-dot">
              <img src={exp.logo} alt={`${exp.company} logo`} className="timeline-dot-image"/>
            </div>
            <div className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h2>{exp.title}</h2>
              <h3>{exp.company}</h3>
              <ul>
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`timeline-date ${index % 2 === 0 ? 'right' : 'left'}`}>
              <span>{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
