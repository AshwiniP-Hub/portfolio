import React from 'react'

import github from "../../public/github.png"
import linkedin from "../../public/linkedin.png"
import instagram from "../../public/instagram.png"
import facebook from "../../public/facebook.png"

const Footer = () => {
  return (
    <>
    <footer className='py-12 bg-gray-950'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
            <div className='flex flex-col justify-center items-center '>
                <div className='flex space-x-4'>
                <a href="https://github.com/AshwiniP-Hub"target="_blank">
                      <img src={github} alt="errror" className='size-10' />
                    </a>
                    <a href="https://www.linkedin.com/in/ashwini-patil-5b1522344/"target="_blank">
                    <img src={linkedin} alt="errror" className='size-10' />
                    </a>
                    <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank">
                    <img src={instagram} alt="errror" className='size-10' />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} alt="errror" className='size-10'/>
                    </a>
                </div>
                <div className='mt-8 border-t  border-gray-600 pt-8 flex flex-col items-center'>
                        <p>&copy;2025.Made by <span className=' underline text-sky-500'>Ashwini Patil.</span> All rights reserved.</p>
                        <p className='mt-5 text-pink-500'>Thank you for Visiting !</p>
                </div>
            </div>
        </div> 
    </footer>
    
    </>
  )
}

export default Footer
