import React, {useEffect} from "react";
import JS from "../assets/JS-Logo.png";
import MONGO from '../assets/mongodb1.png'
import NODE from "../assets/node.js.png";
import REACT from "../assets/react.png";
import Aos from "aos";
import Python from "../assets/Python-logo.png"
import "aos/dist/aos.css"
import SQL from "../assets/mysql.png"

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000})
    }, [])

  return (
    <div className="bg-slate-900 w-full mt-10" name="skills">
      {/* Container */}
      <div data-aos="fade-up" className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold inline rounded-xl  border-b-4 border-white">
            Skills
          </p>
          <p className="py-8">Technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6 ">
            <img className="w-20 mx-auto" src={Python} alt="html icon" />
            <p className="my-3">Python</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto rounded-md" src={JS} alt="html icon" />
            <p className="my-3">JS</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto" src={SQL} alt="html icon" />
            <p className="my-3">MySQL</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto" src={REACT} alt="html icon" />
            <p className="my-3">REACT</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto" src={MONGO} alt="html icon" />
            <p className="my-3">MongoDB</p>
          </div>{" "}
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto" src={NODE} alt="html icon" />
            <p className="my-3">Node.JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
