import React from 'react'
import OrangeBackground from './OrangeBackground'
import { ExpandableCard2 } from './ExpandableCard2'

interface KontenerTipus {
  id: string;
  title: string;
  body: string;
  description?: string;
  prop1?: string;
  src:string;
}

interface Props {
  gepparkGepek: KontenerTipus[];
}


const Gepek2 = ({gepparkGepek}:Props) => {
  if(!gepparkGepek) return null;
  return (
    <div className="md:pt-20 relative px-6  lg:overflow-hidden lg:px-0">
        <OrangeBackground />
        <div className="text-black font-extrabold text-2xl md:text-4xl flex justify-center text-center p-4 pb-1">
        Ismerje meg munkagépeinket!
      </div>
      <div className="flex justify-center">
        <div className=" w-4/5 md:w-2/5 border-b-4 border-yellow-500 font-extrabold md:mb-20"></div>
      </div>

      <div className="py-10 items-start">
      <div className="flex flex-row items-center place-content-evenly px-2 sm:px-8 md:px-20">
        <ExpandableCard2 gepparkGepek={gepparkGepek}/>
      </div>
      </div>
    </div>
  )
}

export default Gepek2