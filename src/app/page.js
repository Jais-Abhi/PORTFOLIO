import Navbar from '@/Sections/Navbar'
import React from 'react'
import "./globals.css"
import Hero from '@/Sections/Hero'
import ProjectSection from '@/Sections/ProjectSection'
import TapeSection from '@/Sections/TapeSection'
import AboutSection from '@/Sections/AboutSection'
import ContactSection from '@/Sections/ContactSection'
import Footer from '@/Sections/Footer'
const page = () => {
  return (
    <div >
      
      <Navbar/>
      <Hero/>
      <ProjectSection/>
      <TapeSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page