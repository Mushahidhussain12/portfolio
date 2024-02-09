import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png'; 
import java from '../assets/java.png';
import sql from '../assets/sql.png';

const Skills = () => {
  return (
    <div name="Skills" className='w-full pt-96 bg-[#101820] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 inline border-[#FEE715]'>skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            {/*container for icons */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={HTML} alt="" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={CSS} alt="" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={JavaScript} alt="" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={ReactImg} alt="" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={Mongo} alt="" />
                    <p className='my-4'>Mongodb</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={Node} alt="" />
                    <p className='my-4'>Nodejs</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={sql} alt="" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={java} alt="" />
                    <p className='my-4'>Java</p>
                </div>
                <div className='hidden sm:block shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-2'>
                    <img className='mx-auto w-20' src={Tailwind} alt="" />
                    <p className='my-4'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills