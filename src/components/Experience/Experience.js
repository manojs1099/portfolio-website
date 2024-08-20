import React from 'react';
import './Experience.css';
import subaruLogo from './subarulogo.png';
import capgLogo from './capgLogo.png';
import ZTlogo from './ZTlogo.png';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Subaru Automative',
    responsibilities: [
      'Engineered full-stack applications with Python, Go, C#, and React, enhancing data management and analysis for projects.',
      'Designed and integrated APIs and microservices using RESTful and GraphQL architectures, boosting data retrieval efficiency by 35%.',
      'Optimized models with advanced algorithms and data structures in Python, improving visualization performance.',
      'Established intuitive React-based web interfaces for model exploration, enhancing user engagement and collaboration by 50%.',
      'Executed comprehensive testing (unit, integration, end-to-end), elevating application reliability and reducing bugs.',
      'Partnered with architects, engineers, and project managers to deliver solutions, streamlining project workflows and reducing delivery times by 20%.',
      'Advanced cloud-based platform using AWS or Azure, incorporating serverless computing and containerization, reducing deployment time.',
    ],
    period: 'October 2023 - July 2024',
    logo: subaruLogo,
  },
  {
    title: 'Full Stack Software Engineer Intern',
    company: 'ZT Systems',
    responsibilities: [
      'Built and maintained high-performance web applications using React, Node.js, and MongoDB, enhancing user satisfaction for online banking and investment platforms.',
      'Developed secure RESTful APIs, reducing transaction errors by 30% through enhanced data integration and third-party integrations.',
      'Optimized application performance by leveraging AWS services (EC2, S3, Lambda), leading to significant improvements in load times and scalability.',
      'Collaborated with cross-functional teams to design and deploy new features, ensuring alignment with business objectives and increasing feature adoption.',
      'Implemented unit and integration tests, improving code reliability and quality by 35%.',
    ],
    period: 'May 2023 - August 2023',
    logo: ZTlogo,
  },
  {
    title: 'Software Engineer',
    company: 'Capgemini Technology',
    responsibilities: [
      'Developed and optimized scalable web applications using Python, React, and PostgreSQL, achieving increase in user satisfaction ratings through enhanced performance.',
      'Collaborated with diverse teams to create RESTful APIs using Go, facilitating seamless integrations that reduced downtime by 15%.',
      'Engineered server-side logic in C#, improving data processing efficiency and reducing average response times',
      'Employed Docker and Kubernetes for application containerization, enhancing deployment efficiency and increasing scalability across cloud platforms by 25%.',
      'Conducted thorough code reviews and performance testing, implementing best practices that resulted decrease in bug reports through CI/CD pipeline integration.',
    ],
    period: 'May 2020 - August 2022',
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
