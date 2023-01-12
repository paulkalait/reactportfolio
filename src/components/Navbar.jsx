import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[65px] flex justify-between items-center px-4 text-slate-900 navBar z-50">
      <div>
      <a href="home">
      <span className="text-white text-2xl">PK</span>
      </a>
        
      </div>
 
      {/* menu */}

      <ul className="menu-items hidden md:flex">
        <li className="text-2xl" >
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-2xl">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li >
        <li className="text-2xl">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="text-2xl">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="text-2xl">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <motion.button whileHover={{ scale: 1.2}}> <FaBars className="text-white"/></motion.button> :  <motion.button whileHover={{ scale: 1.2}}> <FaTimes className="text-white"/> </motion.button>}
      </div>

      {/* Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
          
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

     
          
      
    </div>
  );
};


export default Navbar;
