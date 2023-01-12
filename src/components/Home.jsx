import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import headshot from '../assets/headshot.svg'
import {
  FaGithub,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";
import CV from "../assets/Paul's CV 2022 .pdf"
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="w-100 h-screen bg-slate-900 home-bg"
    >
      {/* Container */}
      <div className=" home-container max-w-[1000px] mx-auto px-8 flex flex-row justify-center items-center h-full">
        <div className="px-8 flex flex-col justify-center ">
        <p className="text-white">Hi There!</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          I'm Paul Kalaitzidis
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          Full Stack Developer.
        </h2>
        <p className="py-3 text-[#8892b0] mx-w-[700px]">
          {" "}
          I am a full-developer currently attending the Univeristy of
          Connecticut Coding Bootcamp.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white border-2 px-5 py-2 rounded-lg flex items-center hover:bg-white hover:text-black hover:duration-300">
              View Work
              <span className="group-hover:bg-white">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
        </div>
  
        <div className="webdeveloper" style={{ backgroundImage: `url(${headshot})` }}>
        </div>
      </div>
       {/* Social Icons */}
       <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-50">
        <ul>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-lg">
            <a
              rel="noreferrer"
              className="flex justify-between items-center w-full text-white" target="_blank"
              href="https://www.linkedin.com/in/paul-kalaitzidis-393555196"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              rel="noreferrer"
              className="flex justify-between items-center w-full text-white" target="_blank"
              href="https://github.com/paulkalait"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white">
            <a
              rel="noreferrer"
              className="flex justify-between items-center w-full text-red-500" target="_blank"
              href="mailto:kalaitzidispaul@gmail.com"
            >
              Gmail <FaGoogle size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] bg[#565f69] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-slate-400 duration-300 rounded-br-lg">
            <a
              rel="noreferrer"
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

export default Home;
