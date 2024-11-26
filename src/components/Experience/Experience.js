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
      'Engineered software solutions using Java and Spring Boot, achieving a significant reduction in processing time and enhanced system performance.',
      'Designed and implemented RESTful APIs, which improved data integration and increased data accuracy by 30%.',
      'Developed CI/CD pipelines and utilized AWS and Azure to accelerate deployment times, boosting overall operational efficiency.',
      'Collaborated with cross-functional teams to ensure software solutions aligned with business objectives, resulting in a 15% improvement in project delivery timelines.',
      'Established data analytics and reporting features with SQL and BI tools, enabling better resource allocation and actionable insights.',
      'Conducted unit and integration testing to ensure software reliability, reducing production bugs and maintaining software quality.',
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
      'Developed and optimized scalable software using Java, Python, and SQL, increasing operational efficiency for diverse client applications.',
      'Implemented Agile methodologies, accelerating project delivery times by 20% and enhancing team collaboration.',
      'Optimized databases using SQL and NoSQL technologies, achieving faster data retrieval and high-volume data processing capabilities.',
      'Worked with various teams to gather requirements and deliver software that aligned with business goals, achieving a 25% client satisfaction increase.',
      ' Reduced operational costs by 18% through effective use of AWS and Azure in deployment, ensuring scalability and cost-efficiency.',
      'Conducted rigorous testing and performance tuning to improve application functionality and user experience.',
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
