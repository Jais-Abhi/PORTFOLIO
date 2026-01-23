import React from 'react'
import { projects } from '@/Components/projectData'
const ProjectSection = () => {
  return (
    <div className='flex flex-col items-center w-full' >
      <div className='text-4xl font-bold text-center' >Featured Projects</div>
      <div className='text-xl text-white/50 mt-4 text-center' >
      See how i transform concepts into engaging digital experiences 
      </div>
      <div className='w-[80%] bg-red-500' >
        {projects.map((project)=>{
          return (
            <div key={project.id} >
              <div>
                <div>
                  {project.title}
                </div>
                <div>
                  {project.description.map((point,index)=>{
                    return (
                      <div key={index} > {point} </div>
                    )
                  })}
                </div>
                <div>
                  <button>Github</button>
                  <button>Visit live site</button>
                </div>
              </div>
              <div>
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