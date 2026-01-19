import React from 'react'
import memojiImage from  "@/assets/images/memoji-computer.png"
import Image from 'next/image'
import { FaArrowDown } from "react-icons/fa";


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
              I specialize in transforming design concepts into clean, scalable, and high-quality code. With a strong focus on performance, responsiveness, and accessibility, I build seamless user experiences that work flawlessly across web and mobile platforms using modern development practices.
            </div>
            <div className=' mt-8 flex gap-4 text-[1.2rem] font-semibold ' >
              <button
              className='border-2 border-gray-500 px-4 py-2 rounded-lg flex justify-center items-center
               '  >
                Explore My Work
                  {/* <Image src={downArrow} alt="Down Arrow" width={20} height={20} className='inline-block justify-center items-center font-bold' style={{filter: 'brightness(0) invert(1)'}} /> */}

                  <FaArrowDown className='text-white flex justify-center items-center ml-2' />

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