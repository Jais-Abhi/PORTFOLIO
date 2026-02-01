"use client"

import React from 'react'
import { motion, useMotionValue } from 'framer-motion'
const HobbieButton = ({hobbie,icon,constraintsRef}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  return (
    <motion.div
    style={{x,y,touchAction:"none"}}
    drag
    dragConstraints={constraintsRef}
    dragElastic={0}
    dragMomentum={false}
     className='  text-black cursor-pointer  font-bold bg-linear-to-r from-blue-400 to-emerald-400 flex px-3 md:px-6 py-2 h-10 rounded-full ' >
        <div className='flex gap-2' >
            <div  >
                {hobbie}
            </div>
            {icon}
        </div>
    </motion.div>
  )
}

export default HobbieButton