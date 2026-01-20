import React from 'react'

const Ring = ({size,mdSize}) => {
  return (
     <div
          className={`border border-emerald-500/20 shadow-[0_0_80px_inset] shadow-emerald-300/10 size-[${size}] md:size-[${mdSize}] absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-start items-start `} >

    </div>
  )
}

export default Ring