import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/pkblack.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[10%] flex justify-between items-center px-4 bg-black text-gray-500'>
        <div>
        <img src={Logo} alt="Logo Image" style={{width: '60px'}} />
        </div>

        {/* men */}
       
        <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Skills</li>
        <li>Contact</li>
        </ul>
        

        {/* Hamburger */}
        <div className='md:hidden z-10'> <FaBars /> </div>
        
        {/* Mobile menu */}
        <div className='hidden absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center '>
        <ul>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Contact</li>
        </ul>
        </div>


  {/* Social Icons */}
  <div className='hidden'></div>
    </div>
  )
}

export default Navbar