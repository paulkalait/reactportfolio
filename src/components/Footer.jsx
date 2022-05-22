import React from "react";
import CV from "../assets/Paul's CV 2022.pdf";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full   bg-slate-900 md:hidden">
      <div className="flex flex-col  items-center justify-center w-full icons-footer">
        <div className="my-3 ">
          <a
            href="https://www.linkedin.com/in/paul-kalaitzidis-393555196"
            className="linkedin"
          >
            <FaLinkedin />{" "}
          </a>
        </div>
        <div className="my-3">
          <a href="https://github.com/paulkalait" className="github">
            <FaGithub />
          </a>
        </div>
        <div className="my-3">
          <a href="mailto:kalaitzidispaul@gmail.com" className="google">
            <FaGoogle />
          </a>
        </div>
        <div className="my-3">
          <a href={CV} className="resume">
            <BsFillPersonLinesFill />
          </a>
        </div>
      </div>
    </div>
  );
};


export default Footer;
