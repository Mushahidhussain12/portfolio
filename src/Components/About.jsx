import React from 'react'

const About = () => {
  return (
    <div name="About" className='sm:pt-96 w-full h-screen bg-[#101820] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pl-4 pb-16 '>
                <p className='text-4xl font-bold inline border-b-4 border-[#FEE715]'>About</p>
           </div>
           <div></div>
           </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 px-8 gap-8' >
             <div className='text-4xl font-bold sm-text-right'>
                <p> I specialize in integrating front-end aesthetics with back-end functionality</p>
             </div>
             <div>
                <p>As a full-stack developer, I bring a passion for crafting innovative and efficient solutions across the entire web development spectrum. From designing seamless user interfaces to implementing robust server-side logic, I thrive on the challenges of creating dynamic and scalable web applications 
                </p>
             </div>
            </div>
        </div>
    </div>
  )
}

export default About