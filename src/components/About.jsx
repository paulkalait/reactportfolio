import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"


export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000})
    }, [])
  return (
    <div name="about" className="w-full h-[65vh] mt-20 bg-slate-900 text-gray-300 ">
      <div  data-aos="fade-up" className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold pl-4">
            <p>
              Hi. I'm Paul. Thanks for stopping by. Please take a look around
            </p>
          </div>
          <div>
            <p>
              I am currently attending UCONN coding bootcamp to become a full
              stack developer. Prior I graduated from Central Connecticut state
              university in a degree in finance and worked in tax; however,
              coding is where I believe I found my passion. It requires an
              endless journey of learning and persistence which I value highly.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
