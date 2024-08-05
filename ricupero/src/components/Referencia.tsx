import Image from 'next/image'
import React from 'react'
import { ExpandableCardDemo } from './ExpandableCard'
import { LayoutGridD } from './LayoutGrid'
import OrangeBackground from './OrangeBackground'


const Referencia = () => {
  return (
    <div className="pt-20 relative isolate overflow-hidden bg-white px-6  lg:overflow-visible lg:px-0">
      <OrangeBackground />
      <div className="text-black font-extrabold text-4xl flex justify-center p-4 pb-1">
        Referenciák
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold mb-4"></div>
      </div>
      <LayoutGridD />
      </div>
  )
}

export default Referencia