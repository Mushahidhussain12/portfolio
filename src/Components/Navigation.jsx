import React, { useEffect, useState } from 'react'
import Logo from '../assets/portLogo.png'

import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"


const Navigation = () => {
  const [on,off] = useState(false);


  useEffect(() => {
    const body = document.body;
    if (on) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }, [on]);

   function handler(){
  off(!on);
  }


  return (
    <div className='w-full px-4 bg-[#101820] text-gray-300 h-[80px] fixed flex justify-between items-center '>
      <div>
      <img src={Logo} className='max-w-[160px]' alt="" />
      </div>
       
        <ul className='md:flex hidden'>


       

          <li className='hover:text-[#FEE715] py-2'> <Link 
      to="Home" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      Home
    </Link></li>
    <li className='hover:text-[#FEE715] py-2'> <Link 
      to="About" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      About
    </Link></li>
    <li className='hover:text-[#FEE715] py-2'> <Link 
      to="Skills" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      Skills
    </Link></li>
    <li className='hover:text-[#FEE715] py-2'> <Link 
      to="Projects" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      Projects
    </Link></li>
    <li className='hover:text-[#FEE715] py-2'> <Link 
      to="Contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
      Contact
    </Link></li>
        </ul>
      <div className='text-xl z-50'>
        { !on? <FaBarsStaggered onClick={handler}></FaBarsStaggered> : <FaTimes onClick={handler}></FaTimes>}
       
      </div>

      {/* mobile hamburger menu */}
      <ul className={ !on ? 'hidden' : ' absolute left-0 top-0 h-screen  w-full bg-[#101820] flex flex-col justify-center items-center'}>
      <Link 
      onClick={handler}
      to="Home" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
     <li className='text-2xl py-6'>Home</li>
    </Link>
      <Link 
      onClick={handler}
      to="About" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
     <li className='text-2xl py-6'>About</li>
    </Link>

          
    <Link 
      onClick={handler}
      to="Skills" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
     <li className='text-2xl py-6'>Skills</li>
    </Link>
    <Link 
      onClick={handler}
      to="Projects" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
     <li className='text-2xl py-6'>Projects</li>
    </Link>
    <Link 
      onClick={handler}
      to="Contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      
    >
     <li className='text-2xl py-6'>Contact</li>
    </Link>
        </ul>
        {/* <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script> */}
    </div>
  )
}

export default Navigation