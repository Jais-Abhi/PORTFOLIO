import React from 'react'
import memojiImage from  "@/assets/images/memoji-computer.png"
import Image from 'next/image'
import { FaArrowDown } from "react-icons/fa";
import Ring from '@/Components/Ring';
import { LiaStarSolid } from "react-icons/lia";



const Hero = () => {
  return (
    <>
    <div id='hero' className='' >
    <div className=' w-full relative overflow-hidden  flex justify-center items-center' >

      <div className='absolute inset-0  md:-top-[25rem] -z-10  ' >
        <div
          className={`border border-emerald-500/20 shadow-[0_0_80px_inset] shadow-emerald-300/10 absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-start items-start size-[20rem] md:size-[40rem] animate-spin-md `} 
          >
            
            <LiaStarSolid 
            className='text-emerald-400/20 text-xl absolute top-120 left-1/2 translate-x-[20rem] '
            />
            <LiaStarSolid 
            className='text-emerald-400/80 text-2xl absolute top-30 left-60 translate-x-[20rem] '
            />
            <LiaStarSolid 
            className='text-emerald-400/80 text-3xl absolute top-0 left-0 translate-x-[20rem] '
            />
            <LiaStarSolid 
            className='text-emerald-400/80 text-2xl absolute bottom-0 -left-40 translate-x-[20rem] '
            />

            

          </div>
        <div
          className={`border border-emerald-500/20 shadow-[0_0_80px_inset] shadow-emerald-300/10 absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-start items-start size-[30rem] md:size-[60rem] animate-spin-slow `} 
          >
            <LiaStarSolid 
            className='text-emerald-400/50 text-4xl absolute bottom-100 -left-100 translate-x-[30rem] '
            />
            <LiaStarSolid 
            className='text-emerald-400/30 text-2xl absolute top-30 -left-80 translate-x-[30rem] '
            />
            
            <LiaStarSolid 
            className='text-emerald-400/80 text-2xl absolute top-50 right-120 translate-x-[30rem] '
            />

            
          </div>
        <div
          className={`border border-emerald-500/20 shadow-[0_0_80px_inset] shadow-emerald-300/10 absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-start items-start size-[40rem] md:size-[80rem] animate-spin-slow `} 
          >
            <LiaStarSolid 
            className='text-emerald-400/50 text-4xl absolute bottom-200 -left-150 translate-x-[40rem] '
            />
            <LiaStarSolid 
            className='text-emerald-400/30 text-2xl absolute top-10 right-10 translate-y-[40rem] '
            />
            
            <LiaStarSolid 
            className='text-emerald-400/80 text-2xl absolute bottom-80 -left-120 translate-x-[40rem] '
            />

          </div>
        <div
          className={`border border-emerald-500/20 shadow-[0_0_80px_inset] shadow-emerald-300/10 absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-start items-start size-[50rem] md:size-[100rem] max-md:hidden animate-spin-slow `} 
          >
            <LiaStarSolid 
            className='text-emerald-400/50 text-4xl absolute bottom-50 left-100 translate-x-[50rem] '
            />
            <LiaStarSolid 
            className='text-emerald-400/80 text-5xl absolute top-320 left-50 translate-x-[50rem] '
            />
            <LiaStarSolid 
            className='text-emerald-400/30 text-2xl absolute -top-50 right-10 translate-y-[50rem] '
            />
            
            <LiaStarSolid 
            className='text-emerald-400/80 text-2xl absolute bottom-150 -left-180 translate-x-[50rem] '
            />

          </div>
         {/* <Ring size="30" mdSize="60" />
         <Ring size="30" mdSize="52" />
         <Ring size="40" mdSize="67" />
         <Ring size="50" mdSize="82" />
         <Ring size="60" mdSize="95" /> */}
      </div>
        <div className=' w-full md:h-[60rem] h-[45rem] flex flex-col md:mt-16   items-center  '>
          <Image src={memojiImage} alt="Memoji at Computer" width={100} height={100}  
          className='pt-20 '
          />

            <div 
            className='flex items-center justify-center bg-black p-1 rounded-md px-4'>
              <div className=' justify-center rounded-full items-center inline-block h-3 w-3 bg-green-400 mr-4 relative ' > 
                <div className=' justify-center rounded-full items-center inline-block h-3 w-3 bg-green-400 mr-4 animate-ping-large absolute inset-0 ' ></div>
              </div>
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
    </div>
    </>
  )
}

export default Hero