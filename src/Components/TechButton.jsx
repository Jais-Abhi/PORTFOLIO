import React from 'react'

const TechButton = ({tech, icon}) => {
  return (
    <div className='px-4 py-2 cursor-pointer  border-3 border-blue-500/50 rounded-2xl flex items-center justify-center' >
      <div className='text-4xl' >
        {icon}
      </div>
        <span className="ml-2 text-[1rem] font-bold ">{tech}</span>
    </div>
  )
}

export default TechButton