import Navbar from '@/Sections/Navbar'
import React from 'react'
import "./globals.css"
import Hero from '@/Sections/Hero'
import ProjectSection from '@/Sections/ProjectSection'
const page = () => {
  return (
    <div >
      
      <Navbar/>
      <Hero/>
      <ProjectSection/>
    </div>
  )
}

export default page