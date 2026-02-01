import React from 'react'

const HobbieButton = ({hobbie,icon}) => {
  return (
    <div className=' text-black cursor-po font-bold bg-linear-to-r from-blue-400 to-emerald-400 flex px-6 py-2 rounded-full ' >
        <div className='flex gap-2' >
            <div>
                {hobbie}
            </div>
            {icon}
        </div>
    </div>
  )
}

export default HobbieButton