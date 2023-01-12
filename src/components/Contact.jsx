import React, { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md" 
import { ImPhoneHangUp } from "react-icons/im"
import Aos from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      name="contact"
      className="w-full h-screen mt-40 flex justify-center items-center p-4"
    >
      <form
        target="_blank"
        method="POST"
        action="https://getform.io/f/9ac79705-cff5-43ab-a726-ecd9cbd6eacf"
        className="flex flex-col max-w-[600px] w-full text-center"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 rounded-xl  border-white text-white ">
            Contact
          </p>
          <p className="pt-8 text-gray-500 py-4">
            Submit the form below or reach me via email or phone
          </p>
          <div className="labels-container flex flex-row justify-evenly m-3">
            <div className="p-4 bg-slate-200 w-[50%] flex justify-center rounded-xl mr-3 items-center">
              <MdEmail className="email-icon"/>
              <span className="labels ml-2 px-1">+1 860 712 4788</span>
            </div>
            <div className="p-4 bg-slate-200 w-[50%] flex justify-center rounded-xl items-center">
              <ImPhoneHangUp  className="phone-icon" /> 
              <span className="labels  ml-2">kalaitzidispaul@gmail.com</span>
            </div>
          </div>
        </div>
        <input className="p-2 rounded-lg" type="text" placeholder="Name" name="name" />
        <input
          className="my-4 p-2 rounded-lg"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2 rounded-lg"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white  rounded-lg border-2 px-5 py-3 mx-auto mt-4 flex items-center hover:bg-white hover:text-black hover:duration-300">
          Reach Out <FaPaperPlane className="inline ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
