import React from "react";
import { Compare } from "@/components/ui/compare";
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

export function CompareUt() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center  dark:bg-neutral-900 px-4 py-6 md:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        id="title"
        className="text-center my-8 md:my-20"
      >
        <h1 className="text-4xl lg:text-6xl font-bold">És hogy mi hogyan dolgozunk?</h1>
        <div className="flex justify-center">
          <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
        </div>
      </motion.div>
      <Compare
        firstImage="/before.png"
        secondImage="/after.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[300px] md:h-[500px] md:w-[800px]"
        slideMode="hover"
        autoplay={true}
      />

    </div>
  );
}
export function CompareDemo() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center  dark:bg-neutral-900 px-4  py-6 md:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
        id="title"
        className="text-center my-8 md:my-20"
      >
        <h1 className="text-4xl lg:text-6xl font-bold">És hogy mi hogyan dolgozunk?</h1>
        <div className="flex justify-center">
          <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
        </div>
      </motion.div>
      <Compare
        firstImage="/b1.jpg"
        secondImage="/a1.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[300px] md:h-[500px] md:w-[800px]"
        slideMode="hover"
        autoplay={true}
      />

    </div>
  );
}
