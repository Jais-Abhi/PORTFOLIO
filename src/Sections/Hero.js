import React from 'react'
import memojiImage from  "@/assets/images/memoji-computer.png"
import Image from 'next/image'
import { FaArrowDown } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import Ring from '@/Components/Ring';


const Hero = () => {
  return (
    <div className=' relative w-full h-screen overflow-x-hidden flex justify-center items-center' >
      {/* <div 
      className=' absolute rounded-full size-[20rem] md:size-[37rem] top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 boreder-red-600 rotate-0 ' >
        <IoStarSharp className=" text-emerald-400/80 absolute top-1/2 left-1/2 translate-x-[9.5rem] md:translate-x-[18rem]"/>
      </div>
      <div 
      className=' absolute rounded-full size-[30rem] md:size-[52rem] top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 boreder-red-600 rotate-300 ' >
        <IoStarSharp className=" text-emerald-400/80 absolute top-1/2 left-1/2 translate-x-[14.5rem] md:translate-x-[18rem]"/>
      </div>
      <div 
      className=' absolute rounded-full size-[40rem] md:size-[67rem] top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 boreder-red-600 rotate-0 ' >
        <IoStarSharp className=" text-emerald-400/80 absolute top-1/2 left-1/2 translate-x-[9.5rem] md:translate-x-[18rem]"/>
      </div>
      <div 
      className=' absolute rounded-full size-[50rem] md:size-[82rem] top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 boreder-red-600 rotate-0 ' >
        <IoStarSharp className=" text-emerald-400/80 absolute top-1/2 left-1/2 translate-x-[9.5rem] md:translate-x-[18rem]"/>
      </div>
      <div 
      className=' absolute rounded-full size-[60rem] md:size-[97rem] top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 boreder-red-600 rotate-0 ' >
        <IoStarSharp className=" text-emerald-400/80 absolute top-1/2 left-1/2 translate-x-[9.5rem] md:translate-x-[18rem]"/>
      </div> */}
      {/* <div className=' absolute inset-0 -z-10 border-2 border-red-800 ' >
        
        <IoStarSharp className="absolute top-1/2 left-1/2 translate-x-[10rem] md:translate-x-[18rem]"/>
        <IoStarSharp className="absolute top-1/2 left-1/2 translate-x-[10rem] md:translate-x-[18rem]"/>
        <IoStarSharp className="absolute top-1/2 left-1/2 translate-x-[10rem] md:translate-x-[18rem]"/>
        <IoStarSharp className="absolute top-1/2 left-1/2 translate-x-[10rem] md:translate-x-[18rem]"/>

      </div> */}
      <div className='absolute inset-0 -z-10  ' >
         <Ring size="20" mdSize="37" />
         <Ring size="30" mdSize="52" />
         <Ring size="40" mdSize="67" />
         <Ring size="50" mdSize="82" />
         <Ring size="60" mdSize="95" />
      </div>
        <div className=' container flex flex-col justify-center items-center  '>
          <Image src={memojiImage} alt="Memoji at Computer" width={100} height={100}  
          className='pt-20 '
          />

            <div 
            className='flex items-center justify-center bg-black p-1 rounded-md px-4'>
              <div className=' justify-center rounded-full items-center inline-block h-3 w-3 bg-green-400 mr-4' ></div>
              Available for new Projects
            </div>
            <div className=' text-3xl md:text-5xl font-bold text-center mt-8 ' >
              Building Exceptional
            </div>
            <div className=' text-3xl md:text-5xl font-bold text-center mt-1'>
              User Experiences
            </div>
            <div className='text-[] max-md:mx-4 text-center text-gray-400 mt-6 max-w-xl ' >
              I specialize in transforming design concepts into clean, scalable, and high-quality code. With a strong focus on performance, responsiveness, and accessibility, 
            </div>
            <div className=' mt-8 flex gap-4 text-[1.2rem] max-md:text-[0.9rem] font-semibold ' >
              <button
              className='border-2 border-gray-500 px-4 py-2 rounded-lg flex justify-center items-center
               '  >
                Explore My Work
                  {/* <Image src={downArrow} alt="Down Arrow" width={20} height={20} className='inline-block justify-center items-center font-bold' style={{filter: 'brightness(0) invert(1)'}} /> */}

                  <FaArrowDown className='text-white flex justify-center items-center ml-2' />

                </button>
              <button 
              className='border-2 hover:border-gray-500 px-4 py-1.5 rounded-lg bg-gray-100 text-black  '  >
               <span className='mr-1' >👋</span> Let's Connect</button>
            </div>
        </div>
    </div>
  )
}

export default Hero