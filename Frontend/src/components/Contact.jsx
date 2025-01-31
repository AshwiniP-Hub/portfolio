// import axios from 'axios'
// import React from 'react'
// import { useForm } from "react-hook-form"
// import toast from 'react-hot-toast'

// const Contact = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//       } = useForm()
    
//       const onSubmit = async (data) => {
//         const userInfo={
//             name:data.name,
//             email:data.email,
//             message:data.message
//         }
//         try {
//         await axios.post("https://getform.io/f/zazkgpyb",userInfo);
//             toast.success("Your message has been sent");
//         } catch (error) {
//            console.log(error) ;
//            toast.error("Something went wrong");
//         }
//       };
//   return (
//     <>
// <div className='mt-5'>
//     <hr class="w-10 h-1 mx-auto my-2 bg-teal-600  border-0 rounded  md:my-2"></hr>
//      <div className="flex items-center justify-center  ">
//       <h1 className="text-4xl tracking-tight uppercase font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
//        Contact
//       </h1>
//     </div>
//     <hr class="w-10 h-1 mx-auto my-2 bg-teal-600 border-0  rounded md:my-2"></hr>
//     </div>
//     {/* ----------------------------------------------------------------------------------------------  */}
//     <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
    
//         <h1 className='text-pink-600 font-semibold text-2xl' >Contact Me!</h1>
//         <p className='text-xl mt-4 text-center'>
//         Have any questions? Fill out the form, and I will answer your quetions.
//         </p>
//         <div className='flex flex-col items-center justify-center mt-8'>
//             <form 
//             onSubmit={handleSubmit(onSubmit)}
//             // action="https://getform.io/f/zazkgpyb"
//             // method="POST" 
//             className='bg-slate-300 w-96 px-8 py-6 rounded-xl'>

//                 <h1 className='text-2xl font-semibold  mb-4 text-gray-600'>Send Your Message</h1>
//                 <div className='flex flex-col mb-4'>
//                     <label className='block text-xl text-gray-800'>Full Name</label>
//                     <input
//                     {...register("name", { required: true })} 
//                     className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="name" name="name"  placeholder='Enter your fullname' />
//                     {errors.name && <span>This field is required</span>}

//                 </div>
//                 <div className='flex flex-col mb-4'>
//                     <label className='block text-xl text-gray-800'>Email </label>
//                     <input
//                      {...register("email", { required: true })} 
//                     className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" id="email" name="email" placeholder='Enter your Email address' />
//                      {errors.email && <span>This field is required</span>}
//                 </div>
//                 <div className='flex flex-col mb-4'>
//                     <label className='block text-xl text-gray-800'>Message</label>
//                     <textarea 
//                     {...register("message", { required: true })} 
//                     className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="message" name="message" placeholder='Live the message. for eg. Reason for contacting me' />
//                      {errors.message && <span>This field is required</span>}
//                 </div>
//                 <button  className='bg-gray-600 text-lg text-white rounded-xl px-3 py-2 hover:bg-slate-500 duration-300' type='submit'>Send</button>

//             </form>
//         </div>
//         <p className='text-xl mt-16 text-center'>
//         You can contact me based on the information given below.
//         </p>
//         <p className='text-xl mt-4 text-center'>Mrs. Ashwini Vikram Patil. <br />
//             A/p.Koparde,Kolhapur(416204) <br />
//             Email id :- ashwinivpatil2828@gmail.com <br />
//             Mob.No. :- +91 8657572828</p>
//     </div>
//     <br />
//     <br /><br />
//     <hr />
//     </>
//   )
// }

// export default Contact
import { useState } from "react";
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/send-email", { // Change to your backend URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // alert("Message sent successfully!");
            toast.success('Message sent successfully!');
            setFormData({ name: "", email: "", message: "" });
        } else {
            // alert("Failed to send message.");
            toast.error("Failed to send message");
        }
    };

    return (
        <>
        <div className='mt-5'>
    <hr class="w-10 h-1 mx-auto my-2 bg-teal-600  border-0 rounded  md:my-2"></hr>
      <div className="flex items-center justify-center  ">
<h1 className="text-4xl tracking-tight uppercase font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Contact
       </h1>
     </div>
     <hr class="w-10 h-1 mx-auto my-2 bg-teal-600 border-0  rounded md:my-2"></hr>
     </div>
     <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
     <h1 className='text-pink-600 font-semibold text-2xl' >Contact Me!</h1>
         <p className='text-xl mt-4 text-center'>
      Have any questions? Fill out the form, and I will answer your quetions.
        </p>
         <div className='flex flex-col items-center justify-center mt-8'>
         <form onSubmit={handleSubmit} className="p-4 m-8 w-[50%] text-black  border outline-none rounded-lg shadow">
            <input type="text" name="name" placeholder="Your Name" className="border outline-none p-2 w-full my-2" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" className="border outline-none p-2 w-full my-2" onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" className="border outline-none p-2 w-full my-2" onChange={handleChange} required></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white p-2 rounded w-full">Send Message</button>
        </form>
        <p className='text-xl mt-16 text-center'>
         You can contact me based on the information given below.
        </p>
                 <p className='text-xl mt-2 mb-4 text-center'>Mrs. Ashwini Vikram Patil. <br />
             A/p.Koparde,Kolhapur(416204) <br />
            Email id :- ashwinivpatil2828@gmail.com <br />
            Mob.No. :- +91 8657572828</p>
         </div>
         </div>
         <hr />
        </>
      
    );
};

export default ContactForm;
