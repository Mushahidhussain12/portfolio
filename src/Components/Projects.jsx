import React from 'react'
import p5  from'../assets/chat1.png';
import p4 from '../assets/2d.png';
import p2 from '../assets/weather.png'; 
import p3 from '../assets/social.png';
import p1 from '../assets/threads4.png';
import p6 from '../assets/yt.png';



const Projects = () => {
  return (
    <div name='Projects' className='pt-72 w-full text-gray-300 bg-[#101820]'>
        <div className='pt-20 mx-auto p-4 max-w-[1000px] flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FEE715]'>Projects</p>
                <p className='py-6'>Check out some of my projects</p>
            </div>
            <div className='grid sm:grid-cols-3 md:gird-cols-3 gap-4'>
                {/*card item*/}
                
                <div
    style={{ backgroundImage: `url(${p2})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    <div className="opacity-0 group-hover:opacity-100 duration-100">
      <span className="text-sm font bold text-white tracking-wider ">
      A completely responsive weather app that taps into Application programming interfaces (APIs) for real-time updates. 
      </span>
      <div className="pt-8 text-center ">
    
        
        <a href='https://www.linkedin.com/posts/mushahid-hussain-86354b25b_apnacollege-delta-apis-activity-7095897579107852288-es7f?utm_source=share&utm_medium=member_desktop' target="_blank">
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Video Demo
          </button>
          </a>
          <a href='https://mushahidsweather.netlify.app/'>
            
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  </div>
  <div
    style={{ backgroundImage: `url(${p3})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >

    <div className="opacity-0 group-hover:opacity-100 duration-100">
      <span className="text-sm font bold text-white tracking-wider ">
        A non-responsive mini social app built using react and bootstrap where  users can create, view, react and delete posts 
      </span>
      <div className="pt-8 text-center ">
    
        
        <a href='' target="_blank">
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Video Demo
          </button>
          </a>
          <a href='https://facebookreact.netlify.app'>
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  </div>
  <div
    style={{ backgroundImage: `url(${p5})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >

    <div className="opacity-0 group-hover:opacity-100 duration-100">
      <span className="text-sm font bold text-white tracking-wider ">
      A dynamic MERN stack chat app with real-time online status feature.
      </span>
      <div className="pt-8 text-center ">
    
        
        <a href='https://www.linkedin.com/posts/mushahid-hussain-86354b25b_built-a-responsive-full-stack-social-app-activity-7143683580047667202-gRgu?utm_source=share&utm_medium=member_desktop' target="_blank">
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Video Demo
          </button>
          </a>
          <a href="https://haalehwaal.onrender.com">
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  </div>
  <div
    style={{ backgroundImage: `url(${p6})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >

    <div className="opacity-0 group-hover:opacity-100 duration-100">
      <span className="text-sm font bold text-white tracking-wider ">
        A frontend youtube webpage clone made using HTML,CSS with the mix of javascript.
      </span>
      <div className="pt-8 text-center ">
    
        
        <a href='https://www.linkedin.com/posts/mushahid-hussain-86354b25b_learning-by-doing-presenting-my-front-end-activity-7088399486045028352-mKKi?utm_source=share&utm_medium=member_desktop' target="_blank">
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Video Demo
          </button>
          </a>
          <a href='https://65bf950092a9335fd5b4b456--mushahidsyt.netlify.app/'>
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  </div>
  <div
    style={{ backgroundImage: `url(${p1})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >

    <div className="opacity-0 group-hover:opacity-100 duration-100">
      <span className="px-1 text-sm font bold text-white tracking-wider ">
     A full stack social app using MERN stack. it switches effortlessly between light and dark modes.✨
      </span>
      <div className="pt-8 text-center ">
    
        
        <a href='https://www.linkedin.com/posts/mushahid-hussain-86354b25b_built-a-responsive-full-stack-social-app-activity-7143683580047667202-gRgu?utm_source=share&utm_medium=member_desktop' target="_blank">
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Video Demo
          </button>
          </a>
          <a href='https://haalehwaal.onrender.com/'>
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  </div>
  <div
    style={{ backgroundImage: `url(${p4})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >

    <div className="opacity-0 group-hover:opacity-100 duration-100">
      <span className="text-sm font bold text-white tracking-wider ">
      A non-responsive 2D Breaker Game which is built using pure JavaScript and HTML Canvas.It uses physics concepts to detect ball-to-wall, ball-to-paddle, ball-to-brick collisions and Angle of reflection.
      </span>
      <div className="pt-8 text-center ">
    
        
        <a href='https://www.linkedin.com/posts/mushahid-hussain-86354b25b_stepping-up-my-web-development-journey-just-activity-7106900651497914368-7e1F?utm_source=share&utm_medium=member_desktop' target="_blank">
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Video Demo
          </button>
          </a>
          <a href='https://2dbbreakout.netlify.app'>
          <button
            className="hover:bg-gray-400 text-center rounded-lg px-3 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live Demo
          </button>
        </a>
      </div>
    </div>
  </div>
  

            </div>
        </div>
    </div>
  )
}

export default Projects