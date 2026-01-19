import React from 'react'
import memojiImage from  "@/assets/images/memoji-computer.png"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-center items-center' >
        <div className='container flex flex-col justify-center items-center'>
          <Image src={memojiImage.src} alt="Memoji at Computer" width={100} height={100}  
          className=' pt-40 '
          />
            <div 
            className='flex items-center justify-center bg-black p-1 rounded-md px-4'>
              <div className=' justify-center rounded-full items-center inline-block h-3 w-3 bg-green-400 mr-4' ></div>
              Available for new Projects
            </div>
            <div className=' text-5xl font-bold text-center mt-8 ' >
              Building Exceptional
            </div>
            <div className=' text-5xl font-bold text-center mt-1'>
              User Experiences
            </div>
            <div className=' text-center text-gray-400 mt-6 max-w-xl ' >
              I specialized in transforming designs into high-quality code, ensuring seamless user experiences across web and mobile platforms.
            </div>
            <div className=' mt-8 flex gap-4 text-[1.2rem] font-semibold ' >
              <button
              className='border-2 border-gray-500 px-4 py-2 rounded-lg '  >
                Explore My Work

                </button>
              <button 
              className='border-2 border-gray-500 px-4 py-1.5 rounded-lg bg-gray-100 text-black  '  >
               <span className='mr-1' >👋</span> Let's Connect</button>
            </div>
        </div>
    </div>
  )
}

export default Hero