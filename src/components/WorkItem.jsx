import React from 'react'
import { FaGithub, FaLink } from "react-icons/fa";

const WorkItem = ({image, liveLink, github}) => {
  return (
    <div
    style={{ backgroundImage: `url(${image})` }}
    className="shadow-lg shadow-gray-500 group container rounded-md flex justify-center items-center mx-auto content-div"
  >
    {/* Hover Effects */}
    <div className="opacity-0 group hover:opacity-100 py-9 px-9">
      <span className="text-2xl font-bold text-white tracking-wider work-title"></span>
      <div className="pt-8 text-center">
        <a href={liveLink}>
          <button className="text-center rounded-lg px-4 py-3 bg-black text-white font-bold text-lg work-buttons">
            <FaLink />
          </button>
        </a>
        <a href={github}>
          <button className="text-center rounded-lg px-4 py-3 mx-5 bg-black text-white font-bold text-lg">
            <FaGithub />
          </button>
        </a>
      </div>
    </div>
  </div>
  )
}

export default WorkItem