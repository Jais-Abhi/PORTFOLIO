import Card from '@/Components/Card'
import TechButton from '@/Components/TechButton'
import React from 'react'
import { TechList } from '@/Components/Techlist'
import HobbieButton from '@/Components/HobbieButton'
import { HobbieList } from '@/Components/HobbiesData'
const AboutSection = () => {
  return (
    <>
    <div className=' flex-col gap-12 h-auto mx-40 ' >

        <div className='w-full mb-12' >
          <Card heading="My Toolbox" desc="Explore the technologies and tools I utilize to craft exceptional digital experiences."
          classname="w-2/3"
          >
            <div className='flex flex-wrap gap-6 mt-6' >
              {TechList.map((tech,index)=>{
                return(
                  <TechButton key={index} tech={tech.name} icon={tech.icon} />
                )
              })}
            </div>
          </Card>
        </div>

        <div className='flex w-full gap-12 ' >
          <div className='w-2/3' >
            <Card heading="Beyond the code" desc="Exploring my passions and interests outside of programming."
            classname="w-2/3"
            >
              <div className='flex gap-4 flex-wrap' >
                {HobbieList.map((hobbie,index)=>{
                return(
                  <HobbieButton key={index} hobbie={hobbie.name} icon={hobbie.icon} />
                )
              })}
              </div>
            </Card>
          </div>

          <div className='w-1/3' >
            <Card heading="helllo" desc="glimps"
            classname="w-2/3"
            >
              hyy user
            </Card>
          </div>

        </div>

        
      </div>
    </>
  )
}

export default AboutSection