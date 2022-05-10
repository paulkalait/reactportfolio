import React from "react";
import HTML from "../assets/htmlbadge.png";
import CSS from "../assets/csslogo.png";
import JS from "../assets/jslogo.png";
import MYSQL from "../assets/mysql.png";
import NODE from "../assets/node.js.png";
import REACT from "../assets/react.png";

const Skills = () => {
  return (
    <div className="bg-black w-full h-screen" name="skills">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Skills
          </p>
          <p className="py-8">Technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6 ">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-3">HTML</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto" src={JS} alt="html icon" />
            <p className="my-3">JS</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto" src={CSS} alt="html icon" />
            <p className="my-3">CSS</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto" src={REACT} alt="html icon" />
            <p className="my-3">REACT</p>
          </div>
          <div className="shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-6">
            <img className="w-20 mx-auto" src={MYSQL} alt="html icon" />
            <p className="my-3">MySQL</p>
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
