import React from 'react'
import { projects } from '@/Components/projectData'
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import Heading from '@/Components/Heading';



const ProjectSection = () => {
  return (
    <div className='flex flex-col items-center w-full' >
      <Heading head="Featured Projects" desc="See how i transform concepts into engaging digital experiences"/>
      <div className=' w-[95%] md:w-[90%] lg:w-[80%] flex flex-col gap-16 justify-center items-center ' >
        {projects.map((project)=>{
          return (
            <div key={project.id} 
            className=' w-full flex lg:flex-row flex-col border-2 bg-white/10 border-white/50 rounded-2xl h-[35rem] lg:h-[23rem] '
            >
              <div className='lg:w-[55%] w-full lg:pl-8 lg:pr-12  pt-4 pl-4 pr-2 ' >
                <div className='text-center font-bold text-2xl' >
                  {project.title}
                  <hr className=' text-center mb-4 mt-4 lg:mt-8 text-white/40' />
                </div>
                <div className=' flex flex-col gap-4 lg:gap-6 mb-4 text-[1rem] text-white/80 ' >
                  {project.description.map((point,index)=>{
                    return (
                      <div key={index} 
                      className='flex items-center'
                      >
                        <SiTicktick className='mr-4 max-md:text-2xl' /> {point} </div>
                    )
                  })}
                </div> 
                <div className='flex lg:gap-8 gap-4 text-[1rem] lg:text-[1.3rem] font-semibold  text-black lg:mt-12 ' >
                  <button className=' bg-white max-lg:w-[45%] cursor-pointer rounded-lg lg:px-6 py-2 flex items-center justify-center ' >
                    <FaGithub className='mr-2 max-lg:text-xl' />
                     View Github </button>
                  <button 
                  className=' bg-white max-lg:w-[50%] cursor-pointer rounded-lg lg:px-6 py-2 flex justify-center items-center  ' >
                     Visit live site 
                     <RiExternalLinkLine className=' ml-2 max-lg:text-xl' /> 
                     </button>
                </div>
              </div>
              <div className='lg:w-[45%] h-[100%] lg:rounded-2xl m-4 lg:m-0   bg-red-400 overflow-hidden ' >
                <div  className='lg:relative -right-30 top-10 h-full '>
                  <div className='bg-green-600 h-full w-full ' >
                    ff
                  </div>
                {/* <img src={project.image} alt={project.title} /> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectSection