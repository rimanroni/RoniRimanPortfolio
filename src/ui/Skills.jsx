import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Skills = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('skills.json')
        .then(res=>res.json())
        .then(rData=>setData(rData))
    },[])
     return (
        <motion.div 
         initial={{x:10, opacity:0}}
         animate={{x:0, opacity:1}}
         transition={{duration:.2, delay:.8}}
        
        className='flex  justify-center items-start py-12 px-4'>
            <div className=''>
               <div className='text-center px-8 space-y-4'>
               <h1 className='text-3xl font-bold'>What I do</h1>
                <p className='text-textColor font-thin'>I have skills in React, including building components, managing state, handling props, and using hooks for creating dynamic and responsive user interfaces.
                 In backend development with Node.js, I can set up servers, handle requests and responses, work with middleware, and integrate with databases like MongoDB. I am proficient in designing schemas, performing CRUD operations, indexing, and aggregating data to develop scalable and efficient database solutions.

                With this skill set, I am capable of developing fully functional, dynamic, and responsive full-stack web applications, from initial design to deployment.</p>
               </div>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-12 lg:grid-cols-4 gap-5'>
               {
                data.map((item)=>(
                    <div
                    className='shadow-lg
                    hover:translate-y-4
                    space-y-3 px-4 py-2 hover:cursor-pointer hover:bg-gray-700 duration-500 hover:text-white group'
                    
                    key={item.id}>
                        <img src={item.img} alt="" />
                        <h1 className='font-bold'>{item.title}</h1>
                        <p className='text-textColor text-justify group-hover:text-white '>{item.desc}</p>
                    </div>
                ))
               }
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;