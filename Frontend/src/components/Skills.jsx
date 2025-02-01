import React from 'react'

const Skills = () => {
  return (
    <>
    <div className='mt-5 bg-gray-950'>
    <hr className="w-10 h-1 mx-auto my-2 bg-teal-600  border-0 rounded  md:my-2"></hr>
     <div className="flex items-center justify-center  ">
      <h1 className="text-4xl tracking-tight uppercase font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        skills
      </h1>
    </div>
    <hr className="w-10 h-1 mx-auto my-2 bg-teal-600 border-0  rounded md:my-2"></hr>
    </div>
    {/* ----------------------------------------------------------------------------------------------  */}
    <div name="Skills" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
   <div >
          <h1 className='text-pink-600 font-semibold text-2xl mt-8' >My Skills</h1>
          <h1 className='text-lime-400 font-semibold md:text-xl text-lg mt-8'>Frontend Development (User Interface & Styling)</h1>
            <div className='flex flex-col items-center md:grid md:grid-cols-6 '>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>HTML</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>CSS</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Javascript</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>React</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Bootstrap</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Vite</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Tailwind CSS</div>
            </div>
            <h1 className='text-lime-400 font-semibold md:text-xl text-lg mt-8' >Backend Development (Server & Database) </h1>
             <div className='flex flex-col items-center md:grid md:grid-cols-6 '>
             <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Node js</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Mongodb</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Express</div>
             </div>
           <h1 className='text-lime-400 font-semibold md:text-xl text-lg mt-8'>Deployment (Hosting & API Testing)</h1>
            <div className='flex flex-col items-center md:grid md:grid-cols-6 '>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Postman</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Vercel</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Render</div>
            </div>
            <h1 className='text-lime-400 font-semibold md:text-xl text-lg mt-8'>Development Tools (Version Control & Code Editors)</h1>
            <div className='flex flex-col items-center md:grid md:grid-cols-6 '>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Github</div>
            <div className='w-[150px] h-10 mt-4 p-2 bg-blue-900 text-white text-center rounded-xl text-lg'>Vs Code</div>
            </div>
            </div>
    </div>
 
    </>
  )
}

export default Skills
