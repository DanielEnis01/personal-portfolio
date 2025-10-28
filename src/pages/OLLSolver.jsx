import React from 'react';
import { motion } from 'framer-motion';
import './OLLSolver.css';

const OLLSolver = () => {
  const techStack = ['Python', 'CustomTkinter', 'PyInstaller'];
  
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
      className="ollsolver-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <motion.div className="header-content" variants={itemVariants}>
            <h1 className="page-title">Orientation of the Last Layer Solver</h1>
            <p className="page-subtitle">
              The following is a breakdown of the first step of my python based Rubik's Cube Solver, 
              wherein it solves the upper most layer of the cube.
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
              <img src="/Images/ollsolverprogress2.png" alt="OLL Solver Screenshot" />
            </div>
            <div className="text-container">
              <p>
                This is v1.0.0 of OLLSolver. I plan to make multiple GUI updates as I implement 
                the other layers in the future.
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
              The purpose of creating the Rubik's Cube solver was to develop a deeper understanding of Python. 
              I started the project with no prior knowledge of Python and planned to use multiple libraries 
              to expand my experience with the language.
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
              I approached the idea from multiple angles but ultimately decided to use two matrices to define 
              the squares and edges of the cube. I used CustomTkinter to create a grid of buttons, and then 
              updated the value of each square when a button was pressed. This approach gave me thorough 
              experience with Tkinter widgets and Python GUI development as a whole. Initially, I manually 
              typed out each algorithm from memory, drawing on my prior knowledge of Rubik's Cubes. However, 
              this method required an absurd amount of direct mapping of the cubes and edges, even for minor changes.
            </p>
            
            <div className="image-text-wrapper">
              <div className="image-container">
                <img src="/Images/image.png" alt="Process Image" />
              </div>
            </div>
            
            <p>
              After taking some time away from the project, I realized that using an algorithm to detect the 
              rotation of the cube's face would save many lines of code and provide a more efficient approach. 
              Instead of creating a new pattern for each "U" rotation, I implemented a variable that iterated 
              each time the face rotated. Once I finalized the cube's logic, I began researching ways to package 
              my code as an executable. After encountering multiple issues while learning the Windows terminal, 
              I eventually gained a solid understanding of setting up virtual environments and using PyInstaller 
              to create an executable file for my project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="learned-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What I Learned</h2>
          </motion.div>

          <motion.div
            className="learned"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Overall, my experience with this project helped me develop a deeper understanding of both Python 
              and Python's GUI libraries, specifically Tkinter and CustomTkinter. I explored every widget 
              CustomTkinter had to offer and learned the ins and outs of how pack() and grid() work, as well 
              as how to style my project to my liking. Additionally, after hours of troubleshooting with the 
              Windows terminal, I can now efficiently navigate file paths using cd and have gained a deeper 
              understanding of how to manage virtual environments.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default OLLSolver;
