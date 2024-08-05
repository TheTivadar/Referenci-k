import React from 'react'
import Navbar from '@/components/Navbar'
import HeaderGepek from '@/components/HeaderGepek'
import Footer2 from '@/components/Footer2'
import ContainerHero from '@/components/ContainerHero'
import Containertypes from '@/components/Containertypes'
import { Feature4 } from '@/components/Feature'
import { TypewriterEffectSmoothD } from '@/components/TypeWritter'

const kontenerek = () => {
  return (
    <div>
     <Navbar />
     <ContainerHero />
     <Containertypes />
     <Feature4 />
     <TypewriterEffectSmoothD />
     <Footer2 />
    </div>
  )
}

export default kontenerek