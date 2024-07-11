import React, { useEffect, useState } from 'react';

const ResumeCard = () => {
    const [experiencs, setExperiencs] = useState([])

    useEffect(()=>{
        fetch('e.json')
        .then(res=>res.json())
        .then(data=>setExperiencs(data))
  },[])
    return (
        <div>
            {
                experiencs.map((item)=>(
                    <div
                    className='border-b-2 odd:pb-2 lg:h-[295px] space-y-2 p-4 mt-2'
                    key={item.id}>
                              <h1 className='font-bold text-xl'>{item.title}</h1>
                             <h1 className='font-bold capitalize'>{item.name}</h1>
                              <p className='capitalize text-textColor text-justify'>{item.desc}</p>
                            </div>
                ))
            }
        </div>
    );
};

export default ResumeCard;