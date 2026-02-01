import React from 'react'

const TechButton = ({tech, icon}) => {
  return (
    <div className=' md:px-4 px-3 py-2 cursor-pointer  border-3 border-blue-500/30 rounded-2xl flex items-center justify-center' >
      <div className=' md:text-3xl text-2xl' >
        {icon}
      </div>
        <span className="ml-2 md:text-[1rem] text-[0.9rem] font-bold ">{tech}</span>
    </div>
  )
}

export default TechButton