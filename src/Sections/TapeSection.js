import React, { Fragment } from 'react'
import { BsStars } from "react-icons/bs";
import { data } from '@/Components/TapeData';
const TapeSection = () => {
  return (
    <div className='mt-24 mb-16 w-full overflow-x-clip ' >
        <div className=' -rotate-12 md:-rotate-2 w-[99.99%] bg-linear-to-r from-green-400 to-blue-400' >
        <div className='flex w-full whitespace-nowrap pr-2  lg:p-4 p-2 lg:gap-6 gap-2  items-center ,md:animate-trans-x animate-trans-x-fast ' >
            {[...new Array(4)].fill(0).map((_, index) =>
            <Fragment key={index} >
                {
                data.items.map((item,index)=>{
                    return(
                        <div 
                        key={index}
                        className='flex text-black font-extrabold text-[0.7rem] lg:text-[1rem]'
                        > <BsStars className='lg:mr-6 mr-2' /> {item}</div>
                    )
                })
            }
            </Fragment>
             )}
        </div>
        </div>
    </div>
  )
}

export default TapeSection