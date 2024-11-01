import React, { useEffect, useState } from 'react'
import { BentoGridFour } from './bentoGrid'
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

interface KontenerTipus {
  id: string;
  title: string;
  body: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  fuvarozasSzolgaltatas: KontenerTipus[];
}


const FuvarozasSzolgaltatas = ({fuvarozasSzolgaltatas}: Props)  => {

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        id="title"
        className="text-center my-20"
      >
        <h1 className=" text-4xl lg:text-6xl font-bold text-black">Szolgáltatásink!</h1>
        <div className="flex justify-center">
          <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
        </div>
      </motion.div>
      <div>
        <BentoGridFour fuvarozasSzolgaltatas={fuvarozasSzolgaltatas}/>
      </div>
    </div>
  )
}

export default FuvarozasSzolgaltatas
