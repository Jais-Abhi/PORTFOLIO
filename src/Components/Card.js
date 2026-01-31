import React from 'react'

const Card = ({heading,desc,children}) => {
  return (
    <div
        className=' w-full flex flex-col border-2 bg-white/10 border-white/50 rounded-2xl 
        h-[23rem] '
        >
          <div className=' w-full lg:pl-8 lg:pr-12  pt-4 pl-4 pr-2 ' >
            <div className='text-center font-bold text-2xl' >
              {heading}
            </div>
            <div className=' flex flex-col gap-4 lg:gap-6 mb-4 text-[1rem] text-white/60 ' >
            {desc}                
            </div> 
            {children}
            //dddvdfx
            
          </div>
        </div>
  )
}

export default Card