import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';


export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen mt-40 flex justify-center items-center p-4'>
    <form target="_blank" method='POST' action="https://getform.io/f/9ac79705-cff5-43ab-a726-ecd9cbd6eacf" className="flex flex-col max-w-[600px] w-full">
    <div className='pb-8'>
    <p className='text-4xl font-bold inline border-b-4 border-white text-white'>
    Contact</p>
    <p className='pt-8 text-gray-500 py-4'>Submit the form below or send an email: kalaitzidispaul@gmail.com</p>
    </div>
    <input className='p-2' type='text' placeholder='Name' name='name'/>
    <input className='my-4 p-2' type='text' placeholder='Email' name='email'/>
    <textarea className='bg-white p-2' name='message' rows='10' placeholder='Message'></textarea>
  FaGoogle,
    <button className='text-white border-2 px-5 py-3 mx-auto mt-4 flex items-center hover:bg-white hover:text-black hover:duration-300'>Reach Out <FaPaperPlane className='inline ml-2'/></button>
    </form></div>
  )
}

export default Contact;