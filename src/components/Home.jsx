import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import SPACE from '../assets/space.jpg'
import { Link } from "react-scroll";
import Navbar from './Navbar';

const Home = () => {
  return (

    <div style={{backgroundImage: `url(${SPACE})`}} name='home' className='w-100 h-screen bg-black home-bg'>

    {/* Container */} 
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-white'>Hi, my name is</p>
    <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Paul Kalaitzidis</h1>
    <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
    <p className='py-3 text-[#8892b0] mx-w-[700px]'> I am a full-developer currently attending the Univeristy of Connecticut Coding Bootcamp.</p>
    <div>
    <Link to="work" smooth={true} duration={500}>
    <button className='text-white border-2 px-5 py-2 flex items-center hover:bg-white hover:text-black hover:duration-300'>
        View Work
    <span className='group-hover:bg-white'>
    <HiArrowNarrowRight className='ml-3' />
    </span>
    </button>
    </Link>
   
    </div>
    

    </div>
    
    </div>
  )
}

export default Home