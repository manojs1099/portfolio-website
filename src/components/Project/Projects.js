import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-wrapper">
      <div className="project-card">
        <h2>Health Harbor (Hospital Management System)</h2>
        <p>
          <strong>Duration:</strong> Jan 2024 - May 2024
        </p>
        <ul>
          <li>Secured patient data with advanced encryption, ensuring compliance and enhancing trust.</li>
          <li>Optimized database schema, improving query performance by 30% and speeding up record retrieval.</li>
          <li>Streamlined appointment management by designing features with a multidisciplinary team, enhancing healthcare service efficiency.</li>
        </ul>
      </div>
      <div className="project-card">
        <h2>Content-Based Image Retrieval using Image Clustering and Color Descriptor</h2>
        <p>
          <strong>Duration:</strong> Jan 2020 - May 2020
        </p>
        <ul>
         <li>Deployed system on the cloud, improving scalability, and accessibility, and reducing costs by 20%.</li>
         <li>Used K-Means, DBSCAN, and advanced feature extraction, improving image search accuracy.</li>
         <li>Achieved 95% accuracy in image categorization through comprehensive testing.</li>
        </ul>
      </div>
      <div className="project-card">
        <h2>Automated Digitization Process</h2>
        <p>
          <strong>Organization:</strong> Clarke Historical Library
          <br />
          <strong>Duration:</strong> Oct 2022 - May 2024
        </p>
        <ul>
          <li>Automated digitization processes, reducing manual effort by 50% and increasing speed by 30%.</li>
          <li>Enhanced website to boost user engagement by 20% and reduce bounce rate by 15%.</li>
          <li>Improved website performance by 40% through user behavior analysis and ensured accessibility compliance, increasing satisfaction by 25%.</li>
        </ul>
      </div>
      <div className="project-card">
        <h2>Backend and Middleware Optimization</h2>
        <p>
          <strong>Organization:</strong> Capgemini Technology
          <br />
          <strong>Duration:</strong> Jun 2020 - Aug 2022
        </p>
        <ul>
          <li>Developed and optimized backend solutions using Python and Go, increasing data processing efficiency by 30% with improved SQL queries and automated validation scripts.</li>
          <li>Engineered middleware components using Java and Go, significantly enhancing communication between front-end and back-end systems and boosting overall application performance.</li>
          <li>Designed and implemented web interfaces with JavaScript, AngularJS, HTML, and CSS, leading to a 25% increase in user engagement through improved user experience.</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Projects;
