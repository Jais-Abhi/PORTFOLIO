import { Icon } from '@iconify/react'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className=' relative lg:pt-30 pt-10 ' >
        {/* <div className='absolute rounded-t-full inset-0 bg-linear-to-b from-blue-400/0 
        to-emerald-400/50 -z-10 backdrop-blur-3xl 
        mask-image-[linear-gradient(to_bottom,transparent,black)]' /> */}

        
    <hr className='text-white/30 lg:w-4/5 mx-auto' />
    <div className='flex justify-between py-6 lg:w-4/5 md:mx-auto max-lg:items-center mx-4 max-lg:flex-col ' >
        <div className=' text-white/60 ' >
            © 2026 Abhishek Jaiswal. All rights reserved.
        </div>

        <div className='flex justify-center items-center gap-4 text-white/80' >
        <div className='flex sm:gap-4 max-sm:flex-col justify-center' >
    
            <div>
                <a target='blank' href="https://github.com/Jais-Abhi"
                className='flex items-center gap-1 p-2'
                >
                <Icon icon="mdi:github" className='text-xl' />
                Github
                <MdArrowOutward/>
                </a>
            </div>
            <div>
                <a target='blank' href="https://www.linkedin.com/in/abhishek-jais/"
                className='flex items-center gap-1 p-2'
                >
                <Icon icon="skill-icons:linkedin" className='text-xl' />
                LinkedIn
                <MdArrowOutward/>
                </a>
            </div>
            
        </div>
        <div className='flex sm:gap-4 max-sm:flex-col justify-center' >
            <div>
                <a target='blank' href="https://www.linkedin.com/in/abhishek-jais/"
                className='flex items-center gap-1 p-2'
                >
                <Icon icon="skill-icons:instagram" className='text-xl' />
                Instagram
                <MdArrowOutward/>
                </a>
            </div>
            <div>
                <a target='blank' href="https://www.linkedin.com/in/abhishek-jais/"
                className='flex items-center gap-1 p-2'
                >
                <Icon icon="codicon:twitter" className='text-xl' />
                Twitter
                <MdArrowOutward/>
                </a>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer