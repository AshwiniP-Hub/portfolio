import { useState } from "react";
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://portfolioweb-bz80.onrender.com/send-email", { // Change to your backend URL
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
         <p className='md:text-xl text-lg mt-4 text-center'>
      Have any questions? Fill out the form, and I will answer your quetions.
        </p>
         <div className='flex flex-col items-center justify-center mt-8'>
         <form onSubmit={handleSubmit} className="p-4 m-8 w-[75%] md:w-[50%] text-black  border outline-none rounded-lg shadow">
            <input type="text" name="name" placeholder="Your Name" className="border outline-none p-2 w-full my-2" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" className="border outline-none p-2 w-full my-2" onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" className="border outline-none p-2 w-full my-2" onChange={handleChange} required></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white p-2 rounded w-full">Send Message</button>
        </form>
        <p className='md:text-xl text-lg mt-8 text-center'>
         You can contact me based on the information given below.
        </p>
                 <p className='md:text-xl text-lg mt-2 mb-4 text-center'>Mrs. Ashwini Vikram Patil. <br />
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
