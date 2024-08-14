import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from './MSlogo.png';

const Navbar = () => {
 
    const variants = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 }
    };
  
    return (
      <nav className="navbar">
        <NavLink exact to="/" activeClassName="active">
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>
        <ul>
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
          >
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </motion.li>
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
          >
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </motion.li>
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
          >
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          </motion.li>
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
          >
            <NavLink to="/experience" activeClassName="active">Experience</NavLink>
          </motion.li>
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
          >
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </motion.li>
        </ul>
      </nav>
    );
  };

export default Navbar;
