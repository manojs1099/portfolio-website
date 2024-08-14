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
      'Designed and deployed RESTful APIs using Golang and Python, enhancing frontend-backend integration and significantly reducing response times.',
      'Developed scalable frontend components with React and AngularJS, leading to a 20% increase in user engagement and satisfaction.',
      'Streamlined development with CI/CD pipelines using Jenkins and Docker, drastically reducing deployment times.',
      'Automated critical processes using Python, resulting in a 35% reduction in operational costs and faster task completion.',
      'Optimized backend performance in Golang and Python, boosting website performance, user satisfaction, and conversion rates.',
      'Mentored junior developers, improving overall team productivity and code quality by 20% through consistent technical guidance and code reviews.',
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
      'Created and launched scalable microservices using Golang and C#, integrating them seamlessly with Cassandra databases to reduce backend response times.',
      'Implemented JWT authentication and integrated with AWS EC2, enhancing system security and uptime by 20%.',
      'Utilized Apache Kafka for real-time data streaming, improving data processing efficiency across microservices.',
      'Migrated legacy systems from SOAP to RESTful APIs, improving API performance and scalability by 25%.',
      'Leveraged Kubernetes for container orchestration, significantly enhancing deployment and scaling efficiency.',
      'Contributed to Agile workflows, including sprint planning and estimation, reducing deployment times by 20% through the use of Jenkins for CI/CD.',
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
