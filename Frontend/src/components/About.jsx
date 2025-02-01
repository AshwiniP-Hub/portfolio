import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  const handleResumeClick = () => {
    window.open("/Ashwini_Patil_resume.pdf", "_blank");
  };
  return (
    <>
    <div className='mt-5 bg-gray-950'>
    <hr className="w-10 h-1 mx-auto my-2 bg-teal-600  border-0 rounded  md:my-2"></hr>
     <div className="flex items-center justify-center  ">
      <h1 className="text-4xl tracking-tight uppercase font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        About
      </h1>
    </div>
    <hr className="w-10 h-1 mx-auto my-2 bg-teal-600 border-0  rounded md:my-2 mb-10"></hr>
    </div>
    {/* ----------------------------------------------------------------------------------------------  */}
      <div className="flex flex-wrap gap-8 mx-20  justify-center items-center ">
          {/* Aboutme image  */}
          <div className="relative group w-64 h-64">
            {/* <!-- Image --> */}
            <img
              src="https://github.com/AshwiniP-Hub/Images/blob/main/Portfolio/staff.png?raw=true"
              alt="Sample"
              className=" size-48"
            />
            {/* <!-- Card --> */}
            <div
              className="absolute inset-0 bg-[#030712] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* <button className="mx-2 my-1 bg-sky-900 text-white text-lg font-semibold">About me Read more</button> */}
              <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>About me <FaArrowAltCircleRight /></button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-black text-center">About Me</h3>
                  <p className="py-4 text-black">I hold a Bachelor's degree in Electronics Engineering from Shivaji University.
                    While my academic foundation lies in electronics, my heart and passion lie in web development.
                    I embarked on this thrilling journey by self-learning through online resources like YouTube,
                    and I've honed my skills in frontend and backend to craft captivating web experiences.</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          {/* -----------------------------------------------------------------------------------------------------------  */}
          {/* Education  */}
          <div className="relative group w-64 h-64">
            {/* <!-- Image --> */}
            <img
              src="https://github.com/AshwiniP-Hub/Images/blob/main/Portfolio/education.png?raw=true"
              alt="Sample"
              className="size-48"
            />
            {/* <!-- Card --> */}
            <div
              className="absolute inset-0 bg-[#030712]  bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Education <FaArrowAltCircleRight /></button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-black text-center">Education</h3>
                  <p className="py-4 text-black ">
                    --[2016-2019] B.E (Electronics), Shivaji University, Kolhapur,Maharashtra. with AGR 60 %
                    --[2014-2016] Diploma (E&TC), Maharashtra State Board of Technical Education. with AGR 72 %
                    --[2014] HSC, Maharashtra State Board. with 62 %
                    --[2012] SSC, Maharashtra State Board. with 81 %</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          {/* -----------------------------------------------------------------------------------------------------------  */}
          {/* What I Do  */}
          <div className="relative group w-64 h-64">
            {/* <!-- Image --> */}
            <img
              src="https://github.com/AshwiniP-Hub/Images/blob/main/Portfolio/programmer.png?raw=true"
              alt="Sample"
              className="size-48"
            />
            {/* <!-- Card --> */}
            <div
              className="absolute inset-0 bg-[#030712] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>What I Do <FaArrowAltCircleRight /></button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-black text-center">What I do</h3>
                  <p className="py-4 text-black ">I have a knack for turning ideas into reality by creating stunning,
                    user-friendly websites. My projects not only showcase my technical prowess but also reflect my keen
                    eye for design.</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------------------------  */}
          {/* Why Choose Me  */}
          <div className="relative group w-64 h-64">
            {/* <!-- Image --> */}
            <img
              src="https://github.com/AshwiniP-Hub/Images/blob/main/Portfolio/surprised%20(1).png?raw=true"
              alt="Sample"
              className="size-48"
            />
            {/* <!-- Card --> */}
            <div
              className="absolute inset-0 bg-[#030712] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Why Choose Me <FaArrowAltCircleRight /></button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-black text-center">Why Choose Me</h3>
                  <p className="py-4 text-black ">I believe in the power of the web to connect people and ideas,
                    and I'm committed to creating online experiences that leave a lasting impression. My technical expertise, coupled with my creative flair, sets me apart. Whether you're looking to bring your business online, revamp your existing website, or collaborate on a unique project, I'm here to make it happen.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------------------------------  */}
          {/* Hobbies  */}
          <div className="relative group w-64 h-64">
            {/* <!-- Image --> */}
            <img
              src="https://github.com/AshwiniP-Hub/Images/blob/main/Portfolio/time%20(1).png?raw=true"
              alt="Sample"
              className="size-48"
            />
            {/* <!-- Card --> */}
            <div
              className="absolute inset-0 bg-[#030712] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Hobbies <FaArrowAltCircleRight /></button>
              <dialog id="my_modal_5" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-black text-center">Hobbies</h3>
                  <p className="py-4 text-black ">When I'm not immersed in the digital world,
                    you can find me exploring new destinations, capturing the beauty of the world through my camera lens.
                    I'm also passionate about crafting and enjoy turning everyday materials into works of art.
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          {/* -----------------------------------------------------------------------------------------------------  */}
          {/* personal  */}
          <div className="relative group w-64 h-64">
            {/* <!-- Image --> */}
            <img
              src="https://github.com/AshwiniP-Hub/Images/blob/main/Portfolio/woman.png?raw=true"
              alt="Sample"
              className="size-48"
            />
            {/* <!-- Card --> */}
            <div
              className="absolute inset-0 bg-[#030712] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* <button className="mx-2 my-1 bg-sky-900 text-white text-lg font-semibold">About me Read more</button> */}
              <button className="btn" onClick={() => document.getElementById('my_modal_6').showModal()}>Personal  <FaArrowAltCircleRight /></button>
              <dialog id="my_modal_6" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-black text-center">Personal </h3>
                  <p className="py-4 text-black ">
                          I am Mrs. Ashwini Vikram Patil,I am born on  August 4, 1996, in Kolhapur, Maharashtra. I am a dedicated professional and a proud mother of a baby boy. After completing my graduation, I gained valuable experience working at Doot Transmission, Chakan, Pune, for six months. Then I took a four-year career break to focus on family development while continuing to nurture my passion for professional growth. During this period, I pursued a Full Stack Software Development course to enhance my technical skills. Although the COVID-19 lockdown temporarily interrupted my progress, it also provided me with an opportunity to reassess and strengthen my career aspirations. Now, equipped with new energy and upgraded skills, I am prepared to re-enter the workforce and make meaningful contributions to my field. </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------------------  */}
          {/* Let's Connect  */}
          <div className="relative group w-64 h-64">
            {/* <!-- Image --> */}
            <img
              src="https://github.com/AshwiniP-Hub/Images/blob/main/Portfolio/handshake.png?raw=true"
              alt="Sample"
              className="size-48"
            />
            {/* <!-- Card --> */}
            <div
              className="absolute inset-0 bg-[#030712] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="btn" onClick={() => document.getElementById('my_modal_7').showModal()}>Let's Connect<FaArrowAltCircleRight /></button>
              <dialog id="my_modal_7" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg text-black text-center">Let's Connect</h3>
                  <p className="py-4 text-black ">I'm always eager to embark on new projects and collaborations.
                    If you have a vision, if you want to chat about web development, don't hesitate to get in touch.
                    I'm just a message away!
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------------------  */}
          {/* Resume  */}
          <div className="relative group w-64 h-64">
            {/* <!-- Image --> */}
            <img
              src="https://github.com/AshwiniP-Hub/Images/blob/main/Portfolio/cv.png?raw=true"
              alt="Sample"
              className="size-48"
            />
            {/* <!-- Card --> */}
            <div
              className="absolute inset-0 bg-[#030712] bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handleResumeClick}
                className=" btn"
              >
                View the Resume<FaArrowAltCircleRight />
              </button>

            </div>
          </div>
        </div>
    </>
  )
}

export default About

