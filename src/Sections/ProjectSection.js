import React from 'react'
import { projects } from '@/Components/projectData'
const ProjectSection = () => {
  return (
    <div >
      <div>Featured Projects</div>
      <div>See how i transform concepts into engaging digital experiences </div>
      <div>
        {projects.map((project)=>{
          return (
            <div key="project.id" >
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectSection