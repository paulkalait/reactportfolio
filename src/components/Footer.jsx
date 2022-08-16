import React from "react";
import CV from "../assets/Paul's CV 2022 .pdf";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <div className="w-full   bg-slate-900 md:hidden">
      <div className="flex flex-row  items-center justify-center w-full icons-footer ">
        <div className="my-3 mx-4  mt-20 ">
          <a
            href="https://www.linkedin.com/in/paul-kalaitzidis-393555196"
            className="linkedin"
          >
          <motion.button
          whileHover={{ scale: 1.2}}>
          <FaLinkedin />
          </motion.button>
          </a>
        </div>
        <div className="my-3 mx-4 mt-20">
          <a href="https://github.com/paulkalait" className="github">
          <motion.button
          whileHover={{ scale: 1.2}}>
          <FaGithub />
          </motion.button>
          </a>
        </div>
        <div className="my-3 mx-4  mt-20">
          <a href="mailto:kalaitzidispaul@gmail.com" className="google">
          
          <motion.button
          whileHover={{ scale: 1.2}}>
          <FaGoogle />
          </motion.button>
          </a>
        </div>
        <div className="my-3 mx-4 mt-20">
          <a href={CV} className="resume">
          <motion.button
          whileHover={{ scale: 1.2}}>
          <BsFillPersonLinesFill />
          </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};


export default Footer;
