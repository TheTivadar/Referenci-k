import React from 'react'
import OrangeBackground from './OrangeBackground'
import { ThreeDCard } from './3DCard'
import { ExpandableCardDemo } from './ExpandableCard'

const Gepek = () => {
  return (
    <div className="pt-20 relative px-6  lg:overflow-hidden lg:px-0">
        <OrangeBackground />
        <div className="text-black font-extrabold text-2xl md:text-4xl flex justify-center p-4 pb-1">
        Ismerje meg földmunkagépeinket!
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold mb-20"></div>
      </div>
      <div className="pb-10 items-start">
      <div className="text-2xl text-white font-bold p-1 px-16 sm:px-24 bg-orange-600 w-min rounded-lg lg:rounded-r-lg items-start ">
          Kotrók és Markolók
        </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <ExpandableCardDemo />
      </div>
      </div>
      <div className="pb-10">
      <div className="text-3xl text-white font-bold p-1 px-16 sm:px-24 bg-orange-600 w-min rounded-lg lg:rounded-r-lg ">
          Billencs
        </div>
      <div className="flex flex-row items-center place-content-evenly px-20">
        <ExpandableCardDemo />
      </div>
      </div>
      <div className="pb-10">
      <div className="text-3xl text-white font-bold p-1 px-16 sm:px-24 bg-orange-600 w-min rounded-lg lg:rounded-r-lg ">
          Úthenger és Dömper
        </div>
      <div className="flex flex-row items-center place-content-evenly px-20">
        <ExpandableCardDemo />
      </div>
      </div>
      <div className="pb-10">
      <div className="text-3xl text-white font-bold p-1 px-16 sm:px-24 bg-orange-600 w-min rounded-lg lg:rounded-r-lg ">
          Locsoló és Seprő Járművek
        </div>
      <div className="flex flex-row items-center place-content-evenly px-20">
        <ExpandableCardDemo />
      </div>
      </div>
    </div>
  )
}

export default Gepek