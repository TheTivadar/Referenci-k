import { BentoGridFour } from '@/components/bentoGrid'
import { CompareDemo } from '@/components/Compare'
import { SlantedDivider, SlantedDividerDown } from '@/components/Divider'
import Footer2 from '@/components/Footer2'
import { FuvarozasDesc } from '@/components/FuvarozasDesc'
import FuvarozasGeppark from '@/components/FuvarozasGeppark'
import FuvarozasHero from '@/components/FuvarozasHero'
import FuvarozasSzolgaltatas from '@/components/FuvarozasSzolgaltatas'
import FuvarozasSzolgaltatas4 from '@/components/FuvarozasSzolgaltatas4'
import Navbar from '@/components/Navbar'
import { TypewriterEffectSmoothD } from '@/components/TypeWritter'
import React from 'react'

const fuvarozas = () => {
  return (
    <div>
        <Navbar />
        <FuvarozasHero />
        <SlantedDivider />
        <FuvarozasSzolgaltatas />
        <FuvarozasGeppark />
        <FuvarozasDesc />
        <SlantedDivider />
        <FuvarozasSzolgaltatas4 />
        <SlantedDivider />
        <TypewriterEffectSmoothD />
        <SlantedDividerDown />
        <CompareDemo/>
        <Footer2 />
    </div>
  )
}

export default fuvarozas