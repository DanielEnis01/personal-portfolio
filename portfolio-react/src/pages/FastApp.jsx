import React from 'react';
import { motion } from 'framer-motion';
import './FastApp.css';

const FastApp = () => {
  const techStack = ['React', 'Firebase', 'JavaScript', 'CSS3'];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="fastapp-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <motion.div className="header-content" variants={itemVariants}>
            <h1 className="page-title">FastApp - Application Tracker</h1>
            <p className="page-subtitle">
              A job application tracking system to help users organize and manage their applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Tech Stack</h2>
          </motion.div>

          <motion.div
            className="tech-stack"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech) => (
              <div key={tech} className="tech-item">
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="image-section">
        <div className="container">
          <motion.div
            className="image-text-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img src="/Images/fastapp.png" alt="FastApp Screenshot" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Purpose */}
      <section className="purpose-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Purpose</h2>
          </motion.div>

          <motion.div
            className="purpose"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              FastApp was created to solve a real problem I and my friends faced during the job application process. 
              Keeping track of multiple applications across different platforms, remembering recruiter information, 
              application statuses, and login credentials was becoming overwhelming. This app provides a centralized 
              solution to organize and manage all job applications in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Key Features</h2>
          </motion.div>

          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="feature-card" variants={itemVariants}>
              <h3 className="feature-title">Application Tracking</h3>
              <p>Store and manage all your job applications with details including company, position, location, and application status.</p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <h3 className="feature-title">Recruiter Management</h3>
              <p>Keep track of recruiter information and communication status for each application.</p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <h3 className="feature-title">Secure Storage</h3>
              <p>Firebase integration ensures secure storage of login credentials and sensitive application data.</p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <h3 className="feature-title">Search & Filter</h3>
              <p>Quickly find applications by company, role, status, or location with built-in search and filter functionality.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FastApp;
