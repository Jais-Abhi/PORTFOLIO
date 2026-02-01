import Link from 'next/link'
import React from 'react'
import "../app/globals.css"

const Navbar = () => {
  return (
    <div className='flex items-center justify-center ' >
        <div 
        className='flex items-center justify-center fixed top-4 z-10 bg-white/10 
        backdrop-blur rounded-full' >
            <Link href="#hero" className='nav-item bg-white text-black ' >Home</Link>
            <Link href="#projects"  className='nav-item'>Projects</Link>
            <Link href="#about" className='nav-item' >About</Link>
            <Link href="#contact" className='nav-item' >Contact</Link>
        </div>
        
    </div>
  )
}

export default Navbar