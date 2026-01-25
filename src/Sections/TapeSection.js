import React from 'react'
import { BsStars } from "react-icons/bs";
import { data } from '@/Components/TapeData';
const TapeSection = () => {
  return (
    <div className='mt-16 mb-16' >
        <div className='flex bg-linear-to-r from-green-400 to-blue-400 p-4 lg:gap-8 gap-2 overflow-hidden items-center justify-center ' >
            {
                data.items.map((item,index)=>{
                    return(
                        <div 
                        className='flex text-black font-extrabold text-[1rem]'
                        > <BsStars className='lg:mr-8 mr-2' /> {item}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TapeSection