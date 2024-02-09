import React from 'react';
import sql from '../assets/dev.png';
import cv from '../assets/cv.pdf'
import Typewriter from 'typewriter-effect';
import { HiDownload } from "react-icons/hi";                                    
import { FaArrowRightLong } from "react-icons/fa6";                                                      
const Hero = () => {
  return (
    <div name='Home' className= 'pb-32 max-[1070px]:pt-32 sm:pt-32 sm:pl-10 max[600px]:pb-72 grid grid-cols-1 lg:grid-cols-2  w-full bg-[#101820]'>
    <div className=' mx-4 px-10 max-w-[1000px] flex flex-col justify-center h-full'>
        <p className='text-[#FEE715]'>Hi, my name is</p>
        <h1 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6]'>Mushahid Hussain</h1>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0] '><Typewriter
        I am a
  options={{
    strings: ['ReactJS Developer','Mern Stack Developer','Software Engineer'],

    autoStart: true,
    loop: true,
  }}
/> </h2>
        <p className='max-w-[700px] text-[#8892b0] py-4'> As a full-stack developer, I bring a passion for crafting innovative and efficient solutions across the entire web development spectrum. From designing seamless user interfaces to implementing robust server-side logic
        </p>
       
        <div>

           {/*making this button as group to cause hover effect on icon when click on button */}
           <a href={cv} download="My_File.pdf">
            <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FEE715] hover:border-[#FEE715] hover:text-black'>Download CV
            <span className='group-hover:rotate-90 group-hover:mb-2 duration-200'>
          <  FaArrowRightLong className='ml-2' />
            </span></button>
            </a>  
            </div>
        </div>
        <div className='pt-16 md:pr-24 md:pb-16 lg:pt-20 m-auto'>
         <img className="full h-[250px] w-[250px]  sm:w-[400px] sm:h-[400px] " src={sql} alt="image description"></img> 
        </div>
       
    </div>
    
  )
}

export default Hero