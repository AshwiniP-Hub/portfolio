import React from 'react'
import portfolio_img from '../../public/portfolio_img.png'
import bandhanEvent from '../../public/bandhan-event.png'
import infinite_library from '../../public/infinite_library.png'
import goaltracker from '../../public/goal-tracker.png'


const Projects = () => {
    return (
        <>
            <div className='mt-5 bg-gray-950'>
                <hr className="w-10 h-1 mx-auto my-2 bg-teal-600  border-0 rounded  md:my-2"></hr>
                <div className="flex items-center justify-center  ">
                    <h1 className="text-4xl tracking-tight uppercase font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                        Projects
                    </h1>
                </div>
                <hr className="w-10 h-1 mx-auto my-2 bg-teal-600 border-0  rounded md:my-2"></hr>
            </div>
            {/* ----------------------------------------------------------------------------------------------  */}
            <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10'>
                <div>
                    <p className='text-center md:text-xl text-lg mt-10'>
                        Here you will find some of the my projects that I created with each project containing its own detail study.
                    </p>
                    <h1 className='text-pink-600 font-semibold text-2xl mt-8 ' >My Projects</h1>
                    {/* ----------------------------------------------------------------------------------------------  */}
                    {/* project 1  */}
                    <div className='flex flex-col md:flex-row mt-8 '>
                        <div className='w-full '>
                            <img src={infinite_library} alt="error" style={{ width: '100%' }} />
                        </div>
                        <div className='w-full items-center mt-8 '>
                            <h1 className='text-2xl text-purple-500 font-semibold'>Infinte Library </h1>
                            <p className='md:text-xl text-lg mt-4 text-justify '>Infinite Library is a comprehensive full-stack MERN development
                                portfolio designed to highlight my technical expertise and creative problem-solving abilities.
                                This platform demonstrates my proficiency in frontend technologies like React and Tailwind CSS,
                                as well as robust backend development using Node.js, Express, and MongoDB.
                            </p>
                            <a href="/project_Infinitelibrary.html" target="_blank">
                                <button className='w-[200px] h-10 mt-8 bg-blue-900 text-white rounded-lg font-semibold  text-lg uppercase'>Explore project</button>
                            </a>
                        </div>
                    </div>
                    {/* ----------------------------------- */}
                    {/* project 2  */}
                    <div className='flex flex-col md:flex-row mt-8 '>
                        <div className='w-full '>
                            <img src={goaltracker} alt="error" style={{ width: '100%' }} />
                        </div>
                        <div className='w-full items-center mt-8 '>
                            <h1 className='text-2xl text-purple-500 font-semibold'>Goal Tracker</h1>
                            <p className='md:text-xl text-lg mt-4 text-justify'>Goal Tracker website is a full-stack MERN project
                                 that showcases my expertise in backend development.
                                  This application helps users set, track, and achieve their goals efficiently,
                                   demonstrating my ability to build and integrate dynamic backend solutions.
                            </p>
                            <a href="/project_goaltracker.html" target="_blank">
                                <button className='w-[200px] h-10 mt-8 bg-blue-900 text-white rounded-lg font-semibold  text-lg uppercase'>Explore project</button>
                            </a>
                        </div>
                    </div>
                   
                    {/* ----------------------------------- */}
                    {/* project 3  */}
                    <div className='flex flex-col md:flex-row mt-8 '>
                        <div className='w-full '>
                            <img src={bandhanEvent} alt="error" style={{ width: '100%' }} />
                        </div>
                        <div className='w-full items-center mt-8 '>
                            <h1 className='text-2xl text-purple-500 font-semibold'>Bandhan Events </h1>
                            <p className='md:text-xl text-lg mt-4 text-justify'>Bhandhan Event is a dynamic frontend website that showcases my expertise in frontend development and creative design.
                                This project highlights my ability to craft visually appealing and user-friendly interfaces using modern
                                technologies like React and Tailwind CSS.It emphasizes responsive design principles to ensure seamless
                                functionality across various devices, providing an engaging experience for users.</p>
                            <a href="/project_bandhanevent.html" target="_blank">
                                <button className='w-[200px] h-10 mt-8 bg-blue-900 text-white
                      rounded-lg font-semibold  text-lg uppercase'>Explore project</button>
                            </a>
                        </div>
                    </div>
                  
                    {/* ----------------------------------- */}
                    {/* project 4  */}
                  
                    <div className='flex flex-col md:flex-row mt-8 '>
                        <div className='w-full '>
                            <img src={portfolio_img} alt="error" style={{ width: '100%' }} />
                        </div>
                        <div className='w-full items-center mt-8 '>
                            <h1 className='text-2xl text-purple-500 font-semibold'>Portfolio </h1>
                            <p className='md:text-xl text-lg mt-4 text-justify'>It's my own portfolio website, where I showcase my journey
                                as a full stack developer. With a blend of creativity and technical expertise,
                                I've crafted this site to not only highlight my skills and projects but also to reflect my
                                passion for clean design and intuitive user experience. Explore my work and get to know the
                                developer behind the code.
                            </p>
                            <a href="/project_portfolio.html" target="_blank">
                                <button className='w-[200px] h-10 mt-8 bg-blue-900 text-white rounded-lg font-semibold  text-lg uppercase'>Explore project</button>
                            </a>
                        </div>
                    </div>
                    {/* ----------------------------------- */}
                </div>
            </div>

        </>

    )
}

export default Projects
