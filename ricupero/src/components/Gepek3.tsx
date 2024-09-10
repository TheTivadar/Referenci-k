import React from 'react'
import OrangeBackground from './OrangeBackground'
import { ThreeDCard } from './3DCard'
import { ExpandableCardDemo } from './ExpandableCard'
import { ExpandableCardFull } from './ExpandableFull'
import { KotroExp } from './Expandables/KotroExp'
import { Domper } from './Expandables/Domper'
import { Utepito } from './Expandables/Utepito'
import { Terkorako } from './Expandables/Terkorako'
import { Locsolo } from './Expandables/Locsolo'
import { Kepzo } from './Expandables/Kepzo'

const Gepek3 = () => {
  return (
    <div className="pt-20 relative px-6  lg:overflow-hidden lg:px-0">
        <OrangeBackground />
        <div className="text-black font-extrabold text-2xl md:text-4xl flex justify-center p-4 pb-1">
        Ismerje meg munkagépeinket!
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold mb-20"></div>
      </div>
      <div className="py-10 items-start">
      <div className=" text-black font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="hover-effect text-lg  md:text-xg  xl:text-2xl ">Kotrógépek és Markolók</span>
        <div className="w-full border-b-2 border-yellow-500 font-extrabold "></div>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <KotroExp />
      </div>
      </div>
      <div className=" text-black font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="hover-effect text-lg  md:text-xg  xl:text-2xl ">Kotrógépek és Markolók</span>
        <div className="w-full border-b-2 border-yellow-500 font-extrabold "></div>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <Kepzo />
      </div>
      <div className=" text-black font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="hover-effect text-lg  md:text-xg  xl:text-2xl ">Kotrógépek és Markolók</span>
        <div className="w-full border-b-2 border-yellow-500 font-extrabold "></div>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <Locsolo />
      </div>
      <div className=" text-black font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="hover-effect text-lg  md:text-xg  xl:text-2xl ">Kotrógépek és Markolók</span>
        <div className="w-full border-b-2 border-yellow-500 font-extrabold "></div>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <Terkorako />
      </div>
      <div className=" text-black font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="hover-effect text-lg  md:text-xg  xl:text-2xl ">Kotrógépek és Markolók</span>
        <div className="w-full border-b-2 border-yellow-500 font-extrabold "></div>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <Utepito />
      </div>
      <div className=" text-black font-bold p-2 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 rounded-lg lg:rounded-r-lg max-w-full mx-auto text-start inline-block overflow-hidden">
        <span className="hover-effect text-lg  md:text-xg  xl:text-2xl ">Kotrógépek és Markolók</span>
        <div className="w-full border-b-2 border-yellow-500 font-extrabold "></div>
      </div>
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <Domper />
      </div>
    </div>
  )
}

export default Gepek3