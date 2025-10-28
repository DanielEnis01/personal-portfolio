import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FastApp from './pages/FastApp';
import Portfolio from './pages/Portfolio';
import OLLSolver from './pages/OLLSolver';
import Certifications from './pages/Certifications';
import ACM from './pages/ACM';
import SAE from './pages/SAE';
import AIM from './pages/AIM';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Particles />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="main-content"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fastapp" element={<FastApp />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/ollsolver" element={<OLLSolver />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/acm" element={<ACM />} />
            <Route path="/sae" element={<SAE />} />
            <Route path="/aim" element={<AIM />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;