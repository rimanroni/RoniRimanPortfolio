import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
const Footer = () => {
    const handleForm = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.email.value;
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks For Message ",
            showConfirmButton: false,
            timer: 1500
            
          });
          form.reset()
    }
    return (
        <motion.div
        initial={{x:-10, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:.2, delay:.9}}
        id='footer' className='lg:flex gap-5  py-4 justify-between bg-[#FFF8F3] px-4 items-center space-y-3 '>
            <div className='space-y-3 mx-auto lg:w-1/2 p-4'>
                <h1 className='text-2xl font-bold'>Lets Connect</h1>
                <p className='font-medium'>Please fill out the form on this section to contact  with me <br />  or  call between 9:00 A.M and 8.00 P.M BD,   through Friday.</p>
                <div className='space-x-4 relative top-4 flex text-white '>
                    <a 
                    className=''
                    href="https://www.facebook.com/roniriman100" target='_blank'>
                        <button className='bg-textColor w-[40px] duration-500 hover:bg-btnColor h-[40px] rounded-full text-2xl flex justify-center items-center'>
                        <FaFacebookF />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/rony-riman-445b00236" target='_blank' >
                        <button className='bg-textColor w-[40px] duration-500 hover:bg-btnColor h-[40px] rounded-full text-2xl flex justify-center items-center'>
                        <FaLinkedinIn />
                        </button>
                    </a>
                    <a href="https://x.com/rimanroni386" target='_blank'>
                        <button className='bg-textColor w-[40px] duration-500 hover:bg-btnColor h-[40px] rounded-full text-2xl flex justify-center items-center'>
                        <FaTwitter />
                        </button>
                    </a>
                </div>
            </div>
            <div className='lg:w-1/2 mx-auto p-4 space-y-3'>
                <h1 className='text-2xl font-bold '>Let’s Message me</h1>
                <form  onSubmit={handleForm } className='space-y-2' >

                    <input type="text" required className='px-3 py-2 outline-none border-none ring-0 w-full bg-white' placeholder='Your name' name='name'   /><br />
                    <input required className='px-3 py-2 outline-none border-none ring-0 w-full bg-white'  type="email" name='email' placeholder='Your email' /><br />
                    <textarea required className='px-3 py-2 outline-none border-none ring-0 w-full bg-white' placeholder='Message' name="massage" ></textarea><br />
                    <button className='bg-btnColor px-12 text-white rounded font-bold py-2'>Submit</button>
                </form>
            </div>
        </motion.div>
    );
};

export default Footer;