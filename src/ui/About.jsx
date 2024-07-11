import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
    return (
        <motion.div 
        
        initial={{y:-10, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:.2 , delay:.8} }
        className='flex py-12 px-4 justify-center items-center'>
            <div className='bg-[#FFF8F3] text-center p-12 space-y-5'>
              <h1 className='text-3xl font-bold'>About Me</h1>
              <p className='text-[#757575] capitalize'>I,<span className='lowercase'>m</span> a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <div className='px-4 py-2 space-y-3'>
                <p>Name</p>
                <h1 className='font-bold'>RONY RIMAN</h1>
               </div>
               <div className='px-4 py-2 space-y-3'>
                <p>Email </p>
                <h1 className='font-bold '>rimanroni386@gmail.com</h1>
               </div>
               <div className='px-4 py-2 space-y-3'>
               <p>Date of birth</p>
               <h1 className='font-bold'>25 July 2004</h1>
               </div>
               <div className='px-4 py-2 space-y-3'>
              <p> From</p>
               <h1 className='font-bold'>Rangpur, Bangladesh</h1>
               </div>
              </div>
            </div>
        </motion.div>
    );
};

export default About;