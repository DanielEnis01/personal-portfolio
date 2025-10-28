import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const techStack = ['HTML', 'JavaScript', 'CSS'];
  
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
      className="portfolio-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <motion.div className="header-content" variants={itemVariants}>
            <h1 className="page-title">Personal Website Project</h1>
            <p className="page-subtitle">
              The following is a breakdown of my first web development project
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
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="tech-item"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* First Release */}
      <section className="release-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">First Release</h2>
          </motion.div>

          <motion.div
            className="image-text-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img src="/Images/Website image.png" alt="Website Screenshot" />
            </div>
            <div className="text-container">
              <p>
                This is the description of the first release of my personal website project. 
                It highlights the design choices and features that were implemented in the initial version.
              </p>
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
              The purpose of developing this portfolio website is to have a platform in which my software 
              engineering journey can be reflected to others, for it documents my progress and growing experience. 
              I intend for this website to be the first stepping stone on a long path to mastering full stack development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">The Process</h2>
          </motion.div>

          <motion.div
            className="process"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              I started this project with minimal knowledge regarding Javascript or HTML. Therefore, I used challenges, 
              such as creating a project section or implementing a functioning roadmap, to build my experience with 
              these languages that are vital to my development skillset. Each update of the website is logged into 
              the changelog that can be found on the roadmap page. Piecing together sections of this website gave me 
              an authentic learning experience with CSS, for it took many attempts to have the website perfectly 
              aligned to the theme I had in mind. Although some features may be works in progress, this website was 
              crucial to my understanding of core web development components.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
