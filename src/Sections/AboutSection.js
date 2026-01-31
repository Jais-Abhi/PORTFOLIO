import Card from '@/Components/Card'
import TechBox from '@/Components/TechBox'
import React from 'react'
import { TechList } from '@/Components/Techlist'
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
                  <TechBox key={index} tech={tech.name} icon={tech.icon} />
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
              hyy user
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