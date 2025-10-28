import React from 'react';
import { motion } from 'framer-motion';
import './ACM.css';

const ACM = () => {
  return (
    <motion.div
      className="acm-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">ACM Mentee</h1>
            <p className="page-subtitle">
              Association for Computing Machinery - University of Texas at Dallas
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
            <h2 className="section-title">Mentee Experience</h2>
            <p className="section-subtitle">January 2025 – May 2025 | Richardson, TX</p>
          </motion.div>

          <motion.div
            className="role-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="role-card-title">Key Responsibilities & Activities</h3>
            <ul className="activity-list">
              <li>
                <strong>Workshop Participation:</strong> Attended multiple workshops including AI chatbot building, web development, and GitHub version control.
              </li>
              <li>
                <strong>Technical Skill Development:</strong> Developed technical skills through hands-on learning and peer collaboration.
              </li>
              <li>
                <strong>Mentorship Engagement:</strong> Worked closely with experienced mentors to accelerate learning in computing fields.
              </li>
              <li>
                <strong>Community Involvement:</strong> Actively participated in ACM's collaborative computing community at UTD.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* About ACM */}
      <section className="about-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About ACM UTD</h2>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              ACM UTD is a team of students with one goal: building a greater, more collaborative computing community 
              at The University of Texas at Dallas. The organization provides opportunities for growth, learning, and 
              professional development through workshops, coding events, hackathons, networking opportunities, research 
              projects, and mentorship programs. ACM UTD consists of eight divisions including Media, Research, Development, 
              Projects, Education, Community, HackUTD, and Industry.
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
              href="https://acmutd.co"
              target="_blank"
              rel="noopener noreferrer"
              className="org-link"
            >
              Visit ACM UTD
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ACM;
