import React, { useEffect } from "react";
import evalueat from "../assets/evalueatsc.png";
import playDate from "../assets/playdate.png";
import rentafit from "../assets/rentafit.jpg";
import finnApp from "../assets/finn-app.png";
import Aos from "aos";
import "aos/dist/aos.css";
import WorkItem from "./WorkItem";

export const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="work"
      className="w-full  md:mt-80 text-gray-300 bg-slate-900 mt-52"
    >
      <div
        data-aos="fade-up"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 rounded-xl  text-white border-white">
            Work
          </p>
          <p className="py-8">Check out some of my recent projects</p>
        </div>

        {/* Grid Container right bellow */}
        <div className="grid sm:grid-cols-2 gap-6">
          <WorkItem image={rentafit} liveLink="https://rentafit.onrender.com/" github="https://github.com/chris-15/Rent-A-Fit-Project3" />
          <WorkItem image={finnApp} liveLink="https://paulkalait.github.io/finn-app/" github="https://github.com/paulkalait/finn-app" />
          <WorkItem image={evalueat} liveLink="https://rocky-escarpment-91263.herokuapp.com/" github="https://github.com/paulkalait/evalueat-seperate"/>
          <WorkItem image={playDate} liveLink="https://playdate-mern-app.herokuapp.com/start" github="https://github.com/paulkalait/playDate" />   
        </div>
      </div>
    </div>
  );
};

export default Work;
