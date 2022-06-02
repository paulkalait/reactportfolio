import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/pkblack.png";
import { Link } from "react-scroll";
import CV from "../assets/Paul's CV 2022.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[12%] flex justify-between items-center px-4 bg-black text-gray-500 navBar z-50">
      <div>
      <a href="home">
      <img src={Logo} alt="Logo Image" style={{ width: "60px"}}/>
      </a>
        
      </div>

      {/* menu */}

      <ul className="menu-items hidden md:flex">
        <li >
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="text-white hover:text-lg duration-300"/> : <FaTimes />}
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

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white" target="_blank"
              href="https://www.linkedin.com/in/paul-kalaitzidis-393555196"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white" target="_blank"
              href="https://github.com/paulkalait"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
            <a
              className="flex justify-between items-center w-full text-red-500" target="_blank"
              href="mailto:kalaitzidispaul@gmail.com"
            >
              Gmail <FaGoogle size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] bg[#565f69] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-slate-400 duration-300">
            <a
              className="flex justify-between items-center w-full text-black" target="_blank"
              href={CV}
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
          
      
    </div>
  );
};


export default Navbar;
