import React from 'react'
import { BsStars } from "react-icons/bs";
import { data } from '@/Components/TapeData';
const TapeSection = () => {
  return (
    <div className='mt-16 mb-16' >
        <div className='-rotate-2 w-[99.99%]' >
        <div className='flex whitespace-nowrap bg-linear-to-r from-green-400 to-blue-400 lg:p-4 p-2 lg:gap-6 gap-2 overflow-hidden items-center ' >
            {
                data.items.map((item,index)=>{
                    return(
                        <div 
                        key={index}
                        className='flex text-black font-extrabold text-[0.7rem] lg:text-[1rem]'
                        > <BsStars className='lg:mr-6 mr-2' /> {item}</div>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default TapeSection