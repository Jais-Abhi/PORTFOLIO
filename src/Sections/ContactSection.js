import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className=' p-8  rounded-4xl lg:my-20 flex items-center w-4/5 mx-auto bg-linear-to-r from-emerald-400 to-blue-400' >
        <div className="w-3/4">
            <div className='text-black font-bold text-3xl mb-4 ' >
                Let's Create something amazing together! 
            </div>
            <div className=' text-black/80 text-xl font-semibold ' >
                Ready to bring your ideas to life ? Let's connect and discuss how we can collaborate on your next project.
            </div>
        </div>
        <div className='flex justify-center items-center w-1/4 text-xl text-whit font-bold' >
            <button className='bg-black py-2 px-4 flex items-center justify-center gap-2 rounded-xl ' >Contact Me <MdArrowOutward/> </button>
        </div>
    </div>
  )
}

export default ContactSection