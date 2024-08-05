import React from 'react'
import Navbar from '@/components/Navbar'
import HeaderGepek from '@/components/HeaderGepek'
import Content from '@/components/Content'
import TopButton from '@/components/Buttons/TopButton'
import GepekCard from '@/components/GepekCard'
import { ThreeDCard } from '@/components/3DCard'
import { Feature4 } from '@/components/Feature'
import { ExpandableCardDemo } from '@/components/ExpandableCard'
import Referencia from '@/components/Referencia'
import Footer2 from '@/components/Footer2'
import Gepek from '@/components/Gepek'
import Gepek2 from '@/components/Gepek2'

const gepiFoldmunka = () => {
  return (
    <div>
      <Navbar />
      <HeaderGepek />
      <Gepek2 />
      <Referencia />
      <Feature4 />
      <Footer2 />
    </div>
  )
}

export default gepiFoldmunka