import React from 'react'
import { motion } from 'framer-motion';
import { CompareDemo } from './Compare';
import { slideInFromDown, slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { IconClipboardCopy } from '@tabler/icons-react';

const FuvarozasSzolgaltatas4 = () => {
  return (
    <div className="md:px-10 mx-auto flex items-center justify-center pt-20">
        <div className="flex flex-col lg:flex-row justify-evenly w-full ">
            <div className="flex-1 flex-col">
                <div className="pb-8">
                    <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                            Építési törmelék eltávolítása
                          </h1>
                          <IconClipboardCopy className="h-12 w-12 text-neutral-500" />
                        </div>
                        <div className="w-3/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6 ">Az építési törmelék eltávolítását gyorsan és megbízhatóan végezzük, akár kisebb bontási munkák, akár nagyobb építkezési projektek során keletkező hulladékról van szó. Nagy teherbírású járműveink lehetővé teszik a nagy mennyiségű törmelék elszállítását, így az építési terület mindig tiszta és rendezett marad.</p>
                    </motion.div>
                </div>
                <div className="pb-10 md:pb-4">
                    <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                          Bontás
                          </h1>
                          <IconClipboardCopy className="h-12 w-12 text-neutral-500" />
                        </div>
                        <div className="w-1/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6">Bontási szolgáltatásaink során 2 tengelyes 4x4 tehergépjárműveinkkel még a nehezen megközelíthető helyeken is hatékonyan dolgozunk. Biztonságosan és gyorsan eltávolítjuk a bontási anyagokat, előkészítve a terepet az új építkezések számára.</p>
                    </motion.div>
                </div>
                <div className="pb-4">
                    <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                          Ömlesztett árú fuvarozás
                          </h1>
                          <IconClipboardCopy className="h-12 w-12 text-neutral-500" />
                        </div>
                        <div className="w-3/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6">Ömlesztett áru fuvarozásában is nagy tapasztalattal rendelkezünk. Homok, kavics, föld és egyéb ömlesztett anyagok szállítását vállaljuk, nagy kapacitású tehergépjárműveinkkel. A 4 tengelyes járművek nagy teherbírásuknak köszönhetően bármilyen ömlesztett áru szállítása hatékonyan és biztonságosan történik.</p>
                    </motion.div>
                </div>
                <div className="pb-4">
                    <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                          Építőanyag szállítás
                          </h1>
                          <IconClipboardCopy className="h-12 w-12 text-neutral-500" />
                        </div>
                        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6">Az építőanyag szállítás terén is megbízható partnerek vagyunk. Legyen szó tégláról, betonról, acélról vagy egyéb építőanyagról, tehergépjárműveinkkel biztosítjuk az anyagok időben történő és megfelelő mennyiségű szállítását. A 3 m³-es dömperek különösen alkalmasak kisebb mennyiségek gyors és rugalmas szállítására.</p>
                    </motion.div>
                </div>
            </div>
            <div className="flex-1 flex sm:justify-start p-2 sm:p-4 md:p-10 items-center">
  <div className="flex flex-col space-y-4">
    <div className="flex justify-center">
      <img 
        alt="Kép"
        src="/irodakont.jpg"
        className="w-full max-w-lg h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
      />
    </div>
    <div className="flex lg:space-x-4  justify-center space-y-4lg:pl-0 space-x-4">
      <img 
        alt="Kép"
        src="/irodakont.jpg"
        className="w-1/3 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
      />
      <img 
        alt="Kép"
        src="/irodakont.jpg"
        className="w-1/3 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
      />
    </div>
    <div className="flex justify-center">
      <img 
        alt="Kép"
        src="/irodakont.jpg"
        className="w-full max-w-lg h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
      />
    </div>
  </div>

            </div>
        </div>
    </div>
  )
}

export default FuvarozasSzolgaltatas4
