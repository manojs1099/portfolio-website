import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -25
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: 25
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };


  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            exact
              path="/"
            element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <About />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/experience"
            element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <Experience />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
  

export default App;
