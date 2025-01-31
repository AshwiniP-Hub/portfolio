import React from 'react'
import { ReactTyped} from "react-typed";

import pic from "../../public/girl2.png"
import github from "../../public/github.png"
import linkedin from "../../public/linkedin.png"
import instagram from "../../public/instagram.png"
import facebook from "../../public/facebook.png"
import mongodb from "../../public/mongodb.png"
import react from "../../public/react.png"
import express from "../../public/express.png"
import node from "../../public/node.png"


const Home = () => {
  return (
   <>
    <div name="Home"  className='max-w-screen-2xl container mx-auto md:px-20 bg-gray-950 px-4 ' >
      <div className='flex flex-col md:flex-row  '>
         <div className='md:w-1/2 md:mt-24 mt-12 space-y-2 order-2 md:order-1' >
            <span className='md:text-3xl text-xl text-violet-700 ' >Welcome to my digital playground!</span>
            <div className='flex space-x-2 text-2xl md:text-4xl '>
            <h1 className='mt-4'>Hello,I'm a </h1>
            <ReactTyped className='text-rose-600 font-bold mt-4 '
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className='text-xl md:text-md text-justify'>"As a fresh and passionate full stack developer, I thrive on crafting dynamic web experiences from front to back. Explore my projects, delve into my code, and witness my dedication to innovation and problem-solving. Let's build something remarkable together!"</p>
            <br />
            {/* social media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 '>
                <div className='space-y-2'>
                <h1 className='font-bold text-lg text-center'>Available on </h1>  
                <div className='flex space-x-5'>
                    <a href="">
                      <img src={github} alt="errror" className='size-10' />
                    </a>
                    <a href="">
                    <img src={linkedin} alt="errror" className='size-10' />
                    </a>
                    <a href="" target="_blank">
                    <img src={instagram} alt="errror" className='size-10' />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} alt="errror" className='size-10'/>
                    </a>
                </div>      
                </div>

                <div className='space-y-2'>
                <h1 className='font-bold text-lg text-center'>Currently working on </h1>  
                <div className='flex space-x-5'>
                    <img src={mongodb} alt="errror" className='size-10 hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    {/* <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/> */}
                    <img src={express} alt="errror" className='size-10 hover:scale-110 duration-200 rounded-full bg-white border-[2px]'/>
                  
                    <img src={react} alt="errror" className='size-10 hover:scale-110 duration-200 rounded-full border-[2px]'/>
                   
                    <img src={node} alt="errror" className='size-10 hover:scale-110 duration-200 rounded-full border-[2px]'/>
                   
                </div>      
                </div>
            </div>
           
         </div>

         <div className='md:w-1/2 md:ml-48 md:mt-20  mt-8 order-1 md:order-2'>
             <img src={pic} className='rounded-full border-4 shadow-xl shadow-violet-700 border-violet-700  w-[450px] h-[450px]' alt="Error" />
         </div>
      </div>
   </div>
   <br /> 
   <br />
   </>
  );
}
export default Home