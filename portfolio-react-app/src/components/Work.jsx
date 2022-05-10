import React from "react";
import employeeTracker from "../assets/employeeTracker.png";
import evalueat from "../assets/evalueatsc.png"
import wearshare from "../assets/wearshare.png"
import weatherdash from "../assets/weatherdash.png"

export const Work = () => {
  return (
    <div name="work" className="w-full  md:mt-80 text-gray-300 bg-slate-900">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className="text-4xl font-bold inline border-b-4 text-white border-white">Work</p>
          <p className="py-8">Check out some of my recent projects</p>
        </div>

  {/* Grid Container right bellow */}
        <div 
        className="grid sm:grid-cols-2 gap-6">


          <div style={{backgroundImage: `url(${employeeTracker})`}} className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider work-title'>
              Employee MySql Tracker</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Video</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 mx-5 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div> <div style={{backgroundImage: `url(${evalueat})`}} className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider work-title'>
              Employee MySql Tracker</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Video</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 mx-5 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${wearshare})`}} className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover Effects */}
            <div>
              <span className='text-2xl font-bold text-white tracking-wider work-title'>
              Employee MySql Tracker</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Video</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 mx-5 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          
          <div style={{backgroundImage: `url(${weatherdash})`}} className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover Effects */}
            <div className="opacity-0 group hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider work-title'>
              Employee MySql Tracker</span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">Video</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 mx-5 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
