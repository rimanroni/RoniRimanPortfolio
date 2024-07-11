import React, { useEffect, useState } from 'react';
import ResumeCard from './ResumeCard';
import { CiSaveDown2 } from 'react-icons/ci';
import { motion } from 'framer-motion';
const Resume = () => {
    const [eduction , setEducation] = useState([]);
    useEffect(()=>{
        fetch('resume.json')
        .then(res=>res.json())
        .then(data=>setEducation(data))
        
    },[])
   
    return (
        <motion.div
        initial={{y:20, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:.2, delay:.9}}
        >
            <h1 className='text-center text-3xl font-bold'>A summary of My Resume</h1>

            <div className='flex  py-12 px-4 justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                  <div className='space-y-3'>
                    <h1 className='text-2xl font-bold px-4'>My Education</h1>
                     {
                        eduction.map((item)=>(
                            <div
                            className=' lg:h-[295px] space-y-2 p-4 mt-4 border-b-2'
                            key={item.id}>
                              <h1 className='font-bold text-xl'>{item.cls}</h1>
                             <h1 className='font-bold capitalize'>{item.clgName}</h1>
                             <p className='capitalize text-textColor text-justify'>{item.desc}</p>
                            </div>
                        ))
                     }
                  </div>
                  <div className='space-y-3'>
                    <h1 className='text-2xl font-bold px-4'>My Experience</h1>
                    <ResumeCard/>
                  </div>
                   
                </div>
            </div>
            <div className='flex justify-center'>
            <a download  href="/images/rony.pdf">
                   <button  className='bg-btnColor px-4 py-2 rounded text-white font-semibold'><CiSaveDown2 className='inline font-semibold' /> Download CV</button>
                   </a>
            </div>
        </motion.div>
    );
};

export default Resume;