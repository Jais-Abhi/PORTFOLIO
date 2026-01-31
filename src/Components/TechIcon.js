import React from 'react'

const TechIcon = ({tech, icon}) => {
  return (
    <div className='h-10 flex items-center justify-center' >
        {icon}
        <span className="ml-2 text-sm">{tech}</span>
    </div>
  )
}

export default TechIcon