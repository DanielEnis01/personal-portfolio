import React from 'react';
import { motion } from 'framer-motion';
import './SAE.css';

const SAE = () => {
  return (
    <motion.div
      className="sae-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">SAE Software Division</h1>
            <p className="page-subtitle">
              Dallas Formula Racing - Society of Automotive Engineers
            </p>
          </div>
        </div>
      </section>


      {/* Role Details */}
      <section className="role-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Software Team Member</h2>
            <p className="section-subtitle">January 2025 – May 2025 | Richardson, TX</p>
          </motion.div>

          <motion.div
            className="role-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="role-card-title">Key Responsibilities & Achievements</h3>
            <ul className="activity-list">
              <li>
                <strong>Azure Functions Development:</strong> Developed Azure Functions for "Star-stream" project to process metric data from racing cars stored in Azure Event Hubs.
              </li>
              <li>
                <strong>Data Processing Systems:</strong> Implemented data formatting and transmission systems to send processed data to MongoDB.
              </li>
              <li>
                <strong>Logging & Monitoring:</strong> Utilized Loki for logging functionality and monitoring system performance.
              </li>
              <li>
                <strong>Real-time Data Pipeline:</strong> Built robust data pipelines to handle racing telemetry data in real-time.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* About SAE */}
      <section className="about-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Dallas Formula Racing</h2>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Dallas Formula Racing is a student-led organization and is the chapter for SAE International at the University 
              of Texas at Dallas. Founded in 2014, the team has successfully built three formula-style vehicles for the Formula 
              SAE competition. The organization features a diverse array of projects with student collaboration among four different 
              schools at UT Dallas, including software development, mechanical engineering, electrical systems, and business operations. 
              The team is dedicated to imparting enthusiasm for engineering and math, volunteering at STEM fairs in the DFW area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organization Link */}
      <section className="link-section">
        <div className="container">
          <motion.div
            className="org-link-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href="https://dallasformularacing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="org-link"
            >
              Visit Dallas Formula Racing
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SAE;
