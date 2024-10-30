import { motion } from 'framer-motion';
import { slideInFromDown} from '@/utils/motion';
import { IoBed } from "react-icons/io5";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { MdOutlineStorage } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import Image from 'next/image';

interface KontenerTipus {
    id: string;
    title: string;
    body?: string;
    description?: string;
    prop1?: string;
    src?:string;
  }
  
  interface Props {
    demaszSzolgaltatas: KontenerTipus[];
  }

const DemaszSzolgaltatas = ({ demaszSzolgaltatas }: Props) =>  {
    if (!demaszSzolgaltatas) return null;
    const body1 = demaszSzolgaltatas.find(item => item.id === "1")?.body;
    const title1 = demaszSzolgaltatas.find(item =>item.id === "1")?.title;
    const body2 = demaszSzolgaltatas.find(item => item.id === "2")?.body;
    const title2 = demaszSzolgaltatas.find(item =>item.id === "2")?.title;
    const body3 = demaszSzolgaltatas.find(item => item.id === "3")?.body;
    const title3 = demaszSzolgaltatas.find(item =>item.id === "3")?.title;
    const body4 = demaszSzolgaltatas.find(item => item.id === "4")?.body;
    const title4 = demaszSzolgaltatas.find(item =>item.id === "4")?.title;
 
  return (
    <div className="md:px-10 mx-auto flex items-center justify-center">
        <div className="flex flex-col lg:flex-row justify-evenly w-full ">
            <div className="flex-1 flex-col text-black">
                <div className="pb-8">
                    <motion.div className="flex-1 bg-white  p-8 justify-center items-center h-auto rounded-2xl border-gray-900 shadow-md hover:scale-105 duration-500 "
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromDown}>
                        <div className="flex items-center w-full">
                          <h1 className="text-2xl lg:text-3xl font-bold hover-effect duration-500 flex-grow">
                          {title1}
                          </h1>
                          <IoBed className="h-12 w-12 text-orange-400" />
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
                          <HiMiniBuildingOffice className="h-12 w-12 text-orange-400" />
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
                          <MdOutlineStorage className="h-12 w-12 text-orange-400" />
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
                          <ImBooks  className="h-12 w-12 text-orange-400" />
                        </div>
                        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
                        <p className="pt-6">{body4}</p>
                    </motion.div>
                </div>
            </div>
            <div className="flex-1 flex sm:justify-start p-2 sm:p-4 md:p-10 items-start">
                <div className="flex flex-col space-y-4">
                <div className="flex lg:space-x-4 px-4 justify-center space-y-4lg:pl-0 space-x-4 place-content-center">
                        <Image 
                            alt="Kép"
                            src="/demasz2.jpg"
                            width={400}
                            height={200}
                            className="w-full max-w-full h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                        />
                    </div>
                    <div className="flex lg:space-x-4 px-4 justify-center space-y-4lg:pl-0 space-x-4">
                        <Image 
                            alt="Kép"
                            src="/epitesitormelek.jpg"
                            width={400}
                            height={200}
                            className="w-1/2 max-w-md h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                        />
                        <Image 
                            alt="Kép"
                            src="/tuskozas.jpg"
                            width={400}
                            height={200}
                            className="w-1/2 max-w-sm h-auto shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DemaszSzolgaltatas
