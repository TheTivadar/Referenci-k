import React from 'react'
import { motion } from 'framer-motion';
import { CompareDemo } from './Compare';
import { slideInFromDown, slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { IconClipboardCopy } from '@tabler/icons-react';
import { GiTowTruck } from "react-icons/gi";
import { GiTreeRoots } from "react-icons/gi";
import { MdLandscape } from "react-icons/md";
import { FaRoad } from "react-icons/fa";
import { FaPersonDigging } from "react-icons/fa6";
import { BsSignRailroad } from "react-icons/bs";
import { TbPool, TbWashDryFlat } from "react-icons/tb";
import Image from 'next/image';

interface KontenerTipus {
    id: string;
    title: string;
    body: string;
    description?: string;
    prop1?: string;
    src?: string;
}

interface Props {
    utepitesSzolgaltatas3: KontenerTipus[];
}

const UtepitesSzolgaltatas = ({ utepitesSzolgaltatas3 }: Props) => {
    if (!utepitesSzolgaltatas3) return null;
    const body1 = utepitesSzolgaltatas3.find(item => item.id === "1")?.body;
    const title1 = utepitesSzolgaltatas3.find(item => item.id === "1")?.title;
    const body2 = utepitesSzolgaltatas3.find(item => item.id === "2")?.body;
    const title2 = utepitesSzolgaltatas3.find(item => item.id === "2")?.title;
    const body3 = utepitesSzolgaltatas3.find(item => item.id === "3")?.body;
    const title3 = utepitesSzolgaltatas3.find(item => item.id === "3")?.title;
    const body4 = utepitesSzolgaltatas3.find(item => item.id === "4")?.body;
    const title4 = utepitesSzolgaltatas3.find(item => item.id === "4")?.title;
    const body5 = utepitesSzolgaltatas3.find(item => item.id === "5")?.body;
    const title5 = utepitesSzolgaltatas3.find(item => item.id === "5")?.title;
    const body6 = utepitesSzolgaltatas3.find(item => item.id === "6")?.body;
    const title6 = utepitesSzolgaltatas3.find(item => item.id === "6")?.title;
    const body7 = utepitesSzolgaltatas3.find(item => item.id === "7")?.body;
    const title7 = utepitesSzolgaltatas3.find(item => item.id === "7")?.title;

    return (
        <div className="md:px-10 mx-auto flex items-center justify-center pt-20 text-black">
            <div className="flex flex-col lg:flex-row justify-evenly w-full ">
                <div className="flex-1 flex-col">
                    <div className="pb-8">
                        <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromDown}>
                            <div className="flex items-center w-full">
                                <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                                    {title1}
                                </h1>
                                <MdLandscape className="h-12 w-12 text-orange-400" />
                            </div>
                            <div className="w-3/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                            <p className="pt-6 ">{body1}</p>
                        </motion.div>
                    </div>
                    <div className="pb-10 md:pb-4">
                        <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromDown}>
                            <div className="flex items-center w-full">
                                <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                                    {title2}
                                </h1>
                                <FaRoad className="h-12 w-12 text-orange-400" />
                            </div>
                            <div className="w-1/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                            <p className="pt-6">{body2}</p>
                        </motion.div>
                    </div>
                    <div className="pb-4">
                        <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromDown}>
                            <div className="flex items-center w-full">
                                <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                                    {title3}
                                </h1>
                                <BsSignRailroad className="h-12 w-12 text-orange-400" />
                            </div>
                            <div className="w-3/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                            <p className="pt-6">{body3}</p>
                        </motion.div>
                    </div>
                    <div className="pb-4">
                        <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromDown}>
                            <div className="flex items-center w-full">
                                <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                                    {title4}
                                </h1>
                                <FaPersonDigging className="h-12 w-12 text-orange-400" />
                            </div>
                            <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                            <p className="pt-6">{body4}</p>
                        </motion.div>
                    </div>
                    <div className="pb-4">
                        <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromDown}>
                            <div className="flex items-center w-full">
                                <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                                    {title5}
                                </h1>
                                <TbPool className="h-12 w-12 text-orange-400" />
                            </div>
                            <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                            <p className="pt-6">{body5}</p>
                        </motion.div>
                    </div>
                    <div className="pb-4">
                        <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromDown}>
                            <div className="flex items-center w-full">
                                <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                                    {title6}
                                </h1>
                                <GiTreeRoots className="h-12 w-12 text-orange-400" />
                            </div>
                            <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                            <p className="pt-6">{body6}</p>
                        </motion.div>
                    </div>
                    <div className="pb-4">
                        <motion.div className="flex-1 bg-white p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromDown}>
                            <div className="flex items-center w-full">
                                <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                                    {title7}
                                </h1>
                                <TbWashDryFlat className="h-12 w-12 text-orange-400" />
                            </div>
                            <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                            <p className="pt-6">{body7}</p>
                        </motion.div>
                    </div>
                </div>
                <div className="flex-1 flex sm:justify-start p-2 sm:p-4 md:p-10 items-center">
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-center">
                            <Image
                                alt="Kép"
                                src="/tereprendezes.jpg"
                                width={400}
                                height={200}
                                className="w-full max-w-lg h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="flex lg:space-x-4 px-4 justify-center space-y-4lg:pl-0 space-x-4">
                            <Image
                                alt="Kép"
                                src="/epitesitormelek.jpg"
                                width={400}
                                height={200}
                                className="w-1/2 md:w-2/5 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                            />
                            <Image
                                alt="Kép"
                                src="/tuskozas.jpg"
                                width={400}
                                height={200}
                                className="w-1/2 md:w-2/5 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                alt="Kép"
                                src="/kozmuasas.jpg"
                                width={400}
                                height={200}
                                className="w-full max-w-lg h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                alt="Kép"
                                src="/medence.jpg"
                                width={400}
                                height={200}
                                className="w-full max-w-lg h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                alt="Kép"
                                src="/aszfalt.jpg"
                                width={400}
                                height={200}
                                className="w-full max-w-lg h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="flex justify-center">
                            <Image
                                alt="Kép"
                                src="/tekovezes.jpg"
                                width={400}
                                height={200}
                                className="w-full max-w-lg h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UtepitesSzolgaltatas
