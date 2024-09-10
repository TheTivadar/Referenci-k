import React from 'react'
import { motion } from 'framer-motion';
import { CompareDemo } from './Compare';
import { slideInFromDown, slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { IconClipboardCopy } from '@tabler/icons-react';
import { FaHotel, FaBed  } from "react-icons/fa"
import { SiGooglecloudstorage } from "react-icons/si";
import { ImBooks } from "react-icons/im";
import Image from 'next/image';

const DemaszSzolgaltatas = () => {
  return (
    <div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        id="title"
        className="text-center my-20"
      >
        <h1 className="text-4xl lg:text-6xl font-bold">Szolgáltatásink!</h1>
        <div className="flex justify-center">
          <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
        </div>
      </motion.div>
    <div className="md:px-10 mx-auto flex items-center justify-center pt-8">
        <div className="flex flex-col lg:flex-row justify-evenly w-full ">
            <div className="flex-1 flex-col">
                <div className="pb-8">
                    <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                            Szállás
                          </h1>
                          <FaBed className="h-12 w-12 text-neutral-500" />
                        </div>
                        <div className="w-3/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6 ">Kényelmes és modern kialakítású szobáink ideálisak a pihenésre és feltöltődésre vágyó vendégek számára. Magas színvonalú szolgáltatásaink biztosítják az otthonos légkört és a maximális kényelmet.</p>
                    </motion.div>
                </div>
                <div className="pb-10 md:pb-4">
                    <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                          Irodahelység
                          </h1>
                          <FaHotel className="h-12 w-12 text-neutral-500" />
                        </div>
                        <div className="w-1/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6">Jól felszerelt és rugalmasan alakítható irodaterületeink tökéletesek vállalkozások és szabadúszók számára egyaránt. Központi elhelyezkedésünk és korszerű infrastruktúránk támogatja a hatékony munkavégzést.</p>
                    </motion.div>
                </div>
                <div className="pb-4">
                    <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                            Raktározás
                          </h1>
                          <SiGooglecloudstorage className="h-12 w-12 text-neutral-500" />
                        </div>
                        <div className="w-3/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6">Biztonságos és könnyen hozzáférhető raktárhelyiségeink ideálisak áruk és anyagok tárolására. Különböző méretű egységeink alkalmazkodnak az egyedi igényekhez és biztosítják az optimális tárolási feltételeket.</p>
                    </motion.div>
                </div>
                <div className="pb-4">
                    <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                          Irattárazás
                          </h1>
                          <ImBooks className="h-12 w-12 text-neutral-500" />
                        </div>
                        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6">Professzionális irattározási szolgáltatásunk gondoskodik a fontos dokumentumok rendezett és biztonságos megőrzéséről. Modern archívumrendszerünk garantálja a gyors hozzáférést és az adatok védelmét.</p>
                    </motion.div>
                </div>
                </div>
            <div className="flex-1 flex sm:justify-start p-2 sm:p-4 md:p-10 items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex lg:space-x-4  justify-center space-y-4lg:pl-0 space-x-4">
            <Image 
                alt="Kép"
                src="/irodakont.jpg"
                width={500}
                height={500}
                className="w-1/2 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
            />
            <Image 
                alt="Kép"
                src="/irodakont.jpg"
                width={500}
                height={500}
                className="w-1/2 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
            />
            </div>
            <div className="flex lg:space-x-4  justify-center space-y-4lg:pl-0 space-x-4">
            <Image 
                alt="Kép"
                src="/irodakont.jpg"
                width={500}
                height={500}
                className="w-1/2 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
            />
            <Image 
                alt="Kép"
                src="/irodakont.jpg"
                width={500}
                height={500}
                className="w-1/2 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
            />
            </div>
            <div className="flex lg:space-x-4  justify-center space-y-4lg:pl-0 space-x-4">
            <Image 
                alt="Kép"
                src="/irodakont.jpg"
                width={500}
                height={500}
                className="w-1/2 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
            />
            <Image 
                alt="Kép"
                src="/irodakont.jpg"
                width={500}
                height={500}
                className="w-1/2 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
            />
            </div>
        </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default DemaszSzolgaltatas
