import Link from 'next/link'
import React from 'react'
import "../app/globals.css"

const Navbar = () => {
  return (
    <div className='flex items-center justify-center' >
        <div 
        className='flex items-center justify-center fixed top-4 bg-white/10 rounded-full' >
            <Link href="/" className='nav-item bg-white text-black ' >Home</Link>
            <Link href="/"  className='nav-item'>Projects</Link>
            <Link href="/" className='nav-item' >About</Link>
            <Link href="/" className='nav-item' >Contact</Link>
        </div>
        
    </div>
  )
}

export default Navbar