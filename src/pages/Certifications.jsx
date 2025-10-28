import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const Certifications = () => {
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
      className="certifications-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <motion.div className="header-content" variants={itemVariants}>
            <h1 className="page-title">Certifications</h1>
            <p className="page-subtitle">
              This page contains any relevant certifications and coursework regarding my career as a Computer Scientist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Plan */}
      <section className="course-plan-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Computer Science Course Plan</h2>
          </motion.div>

          <motion.div
            className="course-plan-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="course-plan-content">
              <p className="course-plan-description">
                View my comprehensive Computer Science course plan and academic roadmap.
              </p>
              <a
                href="/Resume/Articles/CS-Flow-Chart-24.25-Final-updated-06132024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="course-plan-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                View Course Plan
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates */}
      <section className="certificates-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Certificates</h2>
            <p className="section-subtitle">Professional certifications and achievements</p>
          </motion.div>

          <motion.div
            className="certificates-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="certificate-card placeholder">
              <div className="certificate-content">
                <h3 className="certificate-title">Coming Soon</h3>
                <p className="certificate-description">
                  Additional certifications will be added as they are completed.
                </p>
              </div>
            </div>

            <div className="certificate-card placeholder">
              <div className="certificate-content">
                <h3 className="certificate-title">In Progress</h3>
                <p className="certificate-description">
                  Currently working on obtaining relevant industry certifications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Certifications;
