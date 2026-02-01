import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className=' p-4 lg:p-8 max-lg:flex-col  rounded-4xl my-20 flex lg:items-center w-full lg:w-4/5 lg:mx-auto bg-linear-to-r from-emerald-400 to-blue-400' >
        <div className="w-full lg:w-3/4">
            <div className='text-black font-bold text-2xl md:text-3xl mb-4 ' >
                Let's Create something amazing together! 
            </div>
            <div className=' text-black/70 text-[1rem] md:text-xl font-semibold ' >
                Ready to bring your ideas to life ? Let's connect and discuss how we can collaborate on your next project.
            </div>
        </div>
        <div className='flex justify-center  items-center w-full max-lg:pt-4 max-lg:pb-4 lg:w-1/4 text-xl font-semibold md:font-bold' >
            <button className='bg-black py-2 px-4 flex items-center justify-center gap-2 rounded-xl ' >Contact Me <MdArrowOutward/> </button>
        </div>
    </div>
  )
}

export default ContactSection