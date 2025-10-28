import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ExtraCurricular.css';

const ExtraCurricular = () => {
  const activities = [
    {
      id: 1,
      title: 'ACM Mentee',
      description: 'Participating in the Association for Computing Machinery mentorship program',
      image: '/Images/acmutd_logo_larger_background.jpg',
      organization: 'UTD ACM',
      projectUrl: '/acm'
    },
    {
      id: 2,
      title: 'SAE Software Division',
      description: 'Member of the Society of Automotive Engineers software development team',
      image: '/Images/DFR-Logo.webp',
      organization: 'UTD SAE',
      projectUrl: '/sae'
    },
    {
      id: 3,
      title: 'AIM - AI Mentorship',
      description: 'Mentee in the Artificial Intelligence Society mentorship program',
      image: '/Images/aim.png',
      organization: 'AIS UTD',
      projectUrl: '/aim'
    }
  ];

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
    <section id="extracurricular" className="extracurricular-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Extra Curricular</h2>
          <p className="section-subtitle">My involvement in university organizations</p>
        </motion.div>

        <motion.div
          className="activities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              className="activity-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={activity.projectUrl} className="activity-link">
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                </div>
                <div className="activity-content">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-organization">{activity.organization}</p>
                  <p className="activity-description">{activity.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
