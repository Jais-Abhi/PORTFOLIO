import Navbar from '@/Sections/Navbar'
import React from 'react'
import "./globals.css"
import Hero from '@/Sections/Hero'
import ProjectSection from '@/Sections/ProjectSection'
import TapeSection from '@/Sections/TapeSection'
const page = () => {
  return (
    <div >
      
      <Navbar/>
      <Hero/>
      <ProjectSection/>
      <TapeSection/>
    </div>
  )
}

export default page