import React from 'react'
import { projects } from '@/Components/projectData'
import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";



const ProjectSection = () => {
  return (
    <div className='flex flex-col items-center w-full' >
      <div className='text-4xl font-bold text-center' >Featured Projects</div>
      <div className='text-xl text-white/50 mt-4 text-center mb-8' >
      See how i transform concepts into engaging digital experiences 
      </div>
      <div className='w-[80%] flex flex-col gap-16 justify-center items-center ' >
        {projects.map((project)=>{
          return (
            <div key={project.id} 
            className=' w-full flex border-2 bg-white/10 border-white/50 rounded-2xl h-[25rem] '
            >
              <div className='w-[55%]  pt-8 pl-16 pr-12 ' >
                <div className='text-center font-bold text-2xl' >
                  {project.title}
                  <hr className=' text-center mb-6 mt-6 text-white/40' />
                </div>
                <div className=' flex flex-col gap-6 mb-8 text-[1.05rem] text-white/80 ' >
                  {project.description.map((point,index)=>{
                    return (
                      <div key={index} 
                      className='flex items-center'
                      >
                        <SiTicktick className='mr-4' /> {point} </div>
                    )
                  })}
                </div> 
                <div className='flex gap-8 text-[1.3rem] font-semibold  text-black mt-12 ' >
                  <button className=' bg-white cursor-pointer rounded-lg px-6 py-2 flex items-center ' >
                    <FaGithub className='mr-2' />
                     View Github </button>
                  <button 
                  className=' bg-white cursor-pointer rounded-lg px-6 py-2 flex justify-center items-center  ' >
                     Visit live site 
                     <RiExternalLinkLine className=' ml-2' /> 
                     </button>
                </div>
              </div>
              <div className='w-[45%] bg-red-400 ' >
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectSection