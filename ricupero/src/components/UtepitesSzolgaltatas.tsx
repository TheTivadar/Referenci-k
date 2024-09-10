import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import { BentoGridSeven } from './BentoGridSeven';

const UtepitesSzolgaltatas = () => {
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
      <div>
        <BentoGridSeven />
      </div>
    </div>
  )
}

export default UtepitesSzolgaltatas
