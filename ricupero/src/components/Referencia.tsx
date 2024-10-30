
import React from 'react'
import { ExpandableCardDemo } from './ExpandableCard'
import { LayoutGridD } from './LayoutGrid'
import OrangeBackground from './OrangeBackground'

interface KontenerTipus {
  id: string;
  title?: string;
  body?: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  mainReferences: KontenerTipus[];
}

const Referencia = ({ mainReferences }: Props) => {
  if (!mainReferences) return null;
  return (
    <div className="pt-20 relative isolate overflow-hidden bg-white px-6  lg:overflow-visible lg:px-0">
      <OrangeBackground />
      <div className="text-black font-extrabold text-4xl flex justify-center p-4 pb-1">
        Referenciák
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold mb-4"></div>
      </div>
      <LayoutGridD mainReferences={mainReferences}/>
      </div>
  )
}

export default Referencia