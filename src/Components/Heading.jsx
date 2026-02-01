import React from 'react'

const Heading = ({head,desc}) => {
  return (
    <div className='mt-0 mb-16 text-center' >
      <div className=' inline-block text-4xl bg-clip-text text-transparent h-12 bg-linear-to-r from-blue-400  to-emerald-400 w-auto  font-bold text-center' >{head}</div>
      <div className='text-xl text-white/50 mt-4 text-center mb-8' >
      {desc}
      </div>
    </div>
  )
}

export default Heading;