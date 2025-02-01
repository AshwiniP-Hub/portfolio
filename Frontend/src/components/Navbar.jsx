import React, { useState } from 'react'
import pic from "../../public/girl2.png"
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        }, {
            id: 3,
            text: "Skills"
        }, {
            id: 4,
            text: "Projects"
        }, {
            id: 5,
            text: "Contact"
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20  h-16 fixed top-0 left-0 right-0 z-50 bg-gray-950  shadow-lg '>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} className='h-12 w-12 rounded-full ' alt="" />
                        <h1 className='font-bold text-3xl cursor-pointer'>Ashwini<span className='text-yellow-400 text-3xl'>P</span>
                            <p className='text-sm'>Full Stack Devloper</p>
                        </h1>
                    </div>
                    {/* desktop navbar */}
                    <div className='text-xl uppercase tracking-tight'>
                        <ul className='hidden md:flex space-x-8'>
                            {navItems.map(({ id, text }) => (
                                <li className='bg-yellow-400 px-2 py-1 rounded-md text-black hover:scale-105 duration-200 cursor-pointer hover:bg-parrot-500' key={id} >
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={-70}
                                        activeClass='active'
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ? <IoCloseSharp size={25} /> : <TiThMenu size={25} />}
                        </div>

                    </div>
                </div>
                {/* mobile navbar */}
                {menu && (

                    <div className='bg-[#030712] text-white ' >
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-3xl '>
                            {navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 hover:text-green-700 duration-200 font-semibold cursor-pointer' key={id} >
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={-70}
                                        activeClass='active'
                                    >
                                        {text}
                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>

                )}



            </div>
        </>
    );
}

export default Navbar
