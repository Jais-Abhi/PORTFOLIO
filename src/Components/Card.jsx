import React from 'react'
import { BsStars } from "react-icons/bs";

const Card = ({heading,desc,children}) => {
  return (
    <div
        className=' w-full flex flex-col border-2 bg-white/10 border-white/50 rounded-2xl'
        >
          <div className=' w-full lg:pl-8 lg:pr-12  pt-4 pl-4 pr-2 ' >
            <div className=' flex items-center gap-4 font-bold text-2xl' >
             <BsStars className= 'text-3xl text-emerald-300' />
              {heading}
            </div>
            <div className=' flex flex-col gap-4 pt-2 lg:gap-6 mb-4 text-[1rem] text-white/60 ' >
            {desc}                
            </div>
            {/* <hr className=' text-center mb-4 mt-4  text-white/40' /> */}
            
            <div>
              {children} 
              </div>
          </div>
        </div>
  )
}

export default Card