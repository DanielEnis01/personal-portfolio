import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Hello, I'm a Computer Scientist pursuing my Bachelor's degree at the University of Texas at Dallas.
              This portfolio reflects my growing experience with full stack development and data engineering through various projects.
              My education and experience can be found in my resume linked below alongside my projects and contact information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
