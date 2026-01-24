import React from 'react'
import { projects } from '@/Components/projectData'
const ProjectSection = () => {
  return (
    <div className='flex flex-col items-center w-full' >
      <div className='text-4xl font-bold text-center' >Featured Projects</div>
      <div className='text-xl text-white/50 mt-4 text-center' >
      See how i transform concepts into engaging digital experiences 
      </div>
      <div className='w-[80%] flex flex-col gap-16 justify-center items-center ' >
        {projects.map((project)=>{
          return (
            <div key={project.id} 
            className=' w-full flex border-2 border-white/50 rounded-2xl h-[25rem] '
            >
              <div className='w-1/2  pt-8 pl-16 pr-16 ' >
                <div className='text-center font-bold text-2xl' >
                  {project.title}
                  <hr className=' text-center' />
                </div>
                <div>
                  {project.description.map((point,index)=>{
                    return (
                      <div key={index} > {point} </div>
                    )
                  })}
                </div> 
                <div className='flex gap-8 text-[1.3rem] font-semibold  text-black ' >
                  <button className=' bg-white cursor-pointer rounded-lg px-8 py-2 ' >Github</button>
                  <button className=' bg-white cursor-pointer rounded-lg px-8 py-2 ' > Visit live site</button>
                </div>
              </div>
              <div className='w-1/2' >
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