import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { CiSaveDown2 } from 'react-icons/ci';
import { MdOutlineLocalPhone } from 'react-icons/md';
import Typer from "react-natural-typing-effect";
import { Link } from 'react-scroll';
const Banner = () => {
    const arrays = ['Rony Riman..', `Clean Heart
a Front-End Developer..`, 'Computer Engineer ..' , 'MERN Stack Developer..', `Web Designer..  ` , 'Web Developer..' , 'Windows Expert..']
    return (
        <div   className='lg:flex space-y-6   justify-between mt-8  items-center    '>
            <div  className='space-y-8 lg:w-1/2 mx-auto lg:mx-0'>
                <motion.h1
                 
                 initial={{y:-10, opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{duration:.2, delay:.4}}
                className='text-2xl lg:text-left text-center lg:text-4xl font-bold'>Hi, I  am
                
               <p className='text-[#EF013F] logoFont mt-2'> 
               <Typewriter 
                 options={{
                    strings : arrays,
                    autoStart:true,
                    loop :true
                 }}
                >
                 </Typewriter>
               </p>
                </motion.h1>
                <motion.p
                initial={{y:-10, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:.2, delay:.5}}
                className=' text-black font-semibold drop-shadow-lg '>
                    <Typer text={`"Experienced MERN stack developer proficient in React, Node.js, and MongoDB. Skilled in building dynamic web applications with expertise in frontend and backend technologies. Passionate about creating responsive and scalable solutions from design to deployment."`} />
                </motion.p>
                <motion.div 
                initial={{y:-10, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:.2, delay:.6}}
                className='space-x-4'>
                   <a download  href="/images/rony.pdf">
                   <button  className='bg-btnColor px-4 py-2 rounded text-white font-semibold'><CiSaveDown2 className='inline font-semibold' /> Download CV</button>
                   </a>
                       
                   <Link to='footer'
                   smooth={true}
                   offset={-80}
                   duration={500}
                   >
                   <button
                    className='border-btnColor border-[1px] text-btnColor px-4 py-2 rounded   font-semibold'
                    ><MdOutlineLocalPhone className='inline' /> Contact</button>
                   </Link>
                </motion.div>
            </div>
            <div className='pt-4' >
                <motion.img 
                 
                src="/images/roniriman.png" alt="" className='mx-auto relative top-[32px]  w-[95%]  lg:w-full ' />
            </div>
        </div>
    );
};

export default Banner;