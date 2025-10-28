import React from 'react';
import { motion } from 'framer-motion';
import './AIM.css';

const AIM = () => {
  return (
    <motion.div
      className="aim-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="page-title">AIM - AI Mentorship</h1>
            <p className="page-subtitle">
              Artificial Intelligence Society - University of Texas at Dallas
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
            <p className="section-subtitle">August 2025 – Present | Richardson, TX</p>
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
                <strong>AI-Powered Mobile App:</strong> Collaborated with peers and mentors to design an AI-powered mobile app serving as a personal fashion assistant.
              </li>
              <li>
                <strong>Model Selection & Design:</strong> Contributed to model selection and system design discussions, applying computer vision and recommendation techniques in a team setting.
              </li>
              <li>
                <strong>Conversational AI Integration:</strong> Engaged in workshops on LangGraph and RAG pipelines to explore conversational AI integration for personalized recommendations.
              </li>
              <li>
                <strong>Hands-on Project Experience:</strong> Gained practical experience in AI application development through semester-long mentorship program.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* About AIM */}
      <section className="about-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About AIM Program</h2>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              The AIM program is designed to give students a hands-on experience to learn and create their first AI project 
              in the scope of a single semester. Students can apply for either mentor or mentee roles depending on experience level. 
              The program focuses on simplifying AI concepts through workshops and seminars, connecting with industry leaders, and 
              providing opportunities for collaborative projects. AIS UTD hosts various events including HackAI and Machine Learning 
              Mondays to engage students in AI and machine learning.
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
              href="https://aisutd.org"
              target="_blank"
              rel="noopener noreferrer"
              className="org-link"
            >
              Visit AI Society UTD
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AIM;
