import Card from '@/Components/Card'
import TechButton from '@/Components/TechButton'
import React from 'react'
import { TechList } from '@/Components/Techlist'
import HobbieButton from '@/Components/HobbieButton'
import { HobbieList } from '@/Components/HobbiesData'
import Heading from '@/Components/Heading'
import Image from 'next/image'
import gMap from '@/assets/images/g_map.jpg'

const AboutSection = () => {
  return (
    <>
    
    <Heading head="ABOUT ME" desc="A Glimpse into my world "  />
    <div className=' flex-col gap-12 h-auto mx-4 lg:mx-40 ' >
        <div className='w-full mb-12' >
          <Card heading="My Toolbox" desc="Explore the technologies and tools I utilize to craft exceptional digital experiences."
          classname="w-2/3 "
          >
            <div className='flex flex-wrap md:gap-6 gap-4 mt-6 pb-8 md:pl-8' >
              {TechList.map((tech,index)=>{
                return(
                  <TechButton key={index} tech={tech.name} icon={tech.icon} />
                )
              })}
            </div>
          </Card>
        </div>

        <div className='flex max-md:flex-col w-full gap-12 ' >
          <div className='md:w-2/3 w-full' >
            <Card heading="Beyond the code" desc="Exploring my passions and interests outside of programming."
            classname="w-2/3"
            >
              <div className='flex gap-4 flex-wrap pb-8' >
                {HobbieList.map((hobbie,index)=>{
                return(
                  <HobbieButton key={index} hobbie={hobbie.name} icon={hobbie.icon} />
                )
              })}
              </div>
            </Card>
          </div>

          <div className=' w-full md:w-1/3' >
            <Card heading="Location" desc="Let's collaborate "
            classname="w-2/3"
            >
              <Image src={gMap} alt="Profile of the user" width={400} height={200} />
            </Card>
          </div>

        </div>

        
      </div>
    </>
  )
}

export default AboutSection