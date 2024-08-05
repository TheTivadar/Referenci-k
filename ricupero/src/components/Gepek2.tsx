import React from 'react'
import OrangeBackground from './OrangeBackground'
import { ThreeDCard } from './3DCard'
import { ExpandableCardDemo } from './ExpandableCard'

const Gepek2 = () => {
  return (
    <div className="pt-20 relative px-6  lg:overflow-hidden lg:px-0">
        <OrangeBackground />
        <div className="text-black font-extrabold text-2xl md:text-4xl flex justify-center p-4 pb-1">
        Ismerje meg földmunkagépeinket!
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold mb-20"></div>
      </div>
      <div className="py-10 items-start">
      <div className="bg-orange-600 text-white font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="text-lg  md:text-xg  xl:text-2xl ">Kotrók és Markolók</span>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <ExpandableCardDemo />
      </div>
      </div>
      <div className="py-10 items-start">
      <div className="bg-orange-600 text-white font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="text-lg  md:text-xg  xl:text-2xl ">Billencs</span>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <ExpandableCardDemo />
      </div>
      </div>
      <div className="py-10 items-start">
      <div className="bg-orange-600 text-white font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="text-lg  md:text-xg  xl:text-2xl "> Locsoló és Seprő Járművek</span>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <ExpandableCardDemo />
      </div>
      </div>
      <div className="py-10 items-start">
      <div className="bg-orange-600 text-white font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="text-lg  md:text-xg  xl:text-2xl ">Úthenger és Dömper</span>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <ExpandableCardDemo />
      </div>
      </div>
    </div>
  )
}

export default Gepek2