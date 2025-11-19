import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Projects from '../components/Projects';
import ExtraCurricular from '../components/ExtraCurricular';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Daniel Enis
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Computer Scientist | Web Developer | UTD Undergraduate
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/certifications" className="btn btn-primary">
                Certifications
              </Link>
              <a 
                href="/Resume/DanielEnisResume252.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Extra Curricular Section */}
      <ExtraCurricular />

      {/* Contact Section */}
      <Contact />
    </motion.div>
  );
};

export default Home;
