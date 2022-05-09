import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaGoogle} from 'react-icons/fa'
import {HiOutlineMail, hiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/pkblack.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

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
        <div onClick={handleClick} className='md:hidden z-10'> 
        {!nav ? <FaBars /> : <FaTimes />}
        </div>
        
        {/* Mobile menu */}
        <div className={!nav ? 'hidden' :  'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
        <ul>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Contact</li>
        </ul>
        </div>


  {/* Social Icons */}
  <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
    <a className='flex justify-between items-center w-full text-white' href='/'>
     Linkedin <FaLinkedin size={30}/>
    </a>
    </li>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
    <a className='flex justify-between items-center w-full text-white' href='/'>
     Github <FaGithub size={30}/>
    </a>
    </li> <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white'>
    <a className='flex justify-between items-center w-full text-red-500' href='/'>
     Gmail <FaGoogle size={30}/>
    </a>
    </li>
    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg[#565f69'>
    <a className='flex justify-between items-center w-full text-black' href='/'>
     CV <BsFillPersonLinesFill size={30}/>
    </a>
    </li>
    
   </ul></div>
    </div>
  )
}

export default Navbar