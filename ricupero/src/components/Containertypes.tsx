import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TopButton from './Buttons/TopButton';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';


type AnimationControls = {
  start: (variant: string) => Promise<void>;
};

const Containertypes = () => {
  const leftControls1 = useAnimation();
  const rightControls1 = useAnimation();
  const leftControls2 = useAnimation();
  const rightControls2 = useAnimation();
  const leftControls3 = useAnimation();

  const { ref: leftRef1, inView: leftInView1 } = useInView({ triggerOnce: true });
  const { ref: rightRef1, inView: rightInView1 } = useInView({ triggerOnce: true });
  const { ref: leftRef2, inView: leftInView2 } = useInView({ triggerOnce: true });
  const { ref: rightRef2, inView: rightInView2 } = useInView({ triggerOnce: true });
  const { ref: leftRef3, inView: leftInView3 } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (leftInView1) {
      leftControls1.start('visible').then(() => rightControls1.start('visible'));
    }
  }, [leftInView1, leftControls1, rightControls1]);

  useEffect(() => {
    if (rightInView1) {
      rightControls1.start('visible').then(() => leftControls2.start('visible'));
    }
  }, [rightInView1, rightControls1, leftControls2]);

  useEffect(() => {
    if (leftInView2) {
      leftControls2.start('visible').then(() => rightControls2.start('visible'));
    }
  }, [leftInView2, leftControls2, rightControls2]);

  useEffect(() => {
    if (rightInView2) {
      rightControls2.start('visible').then(() => leftControls3.start('visible'));
    }
  }, [rightInView2, rightControls2, leftControls3]);

  useEffect(() => {
    if (leftInView3) {
      leftControls3.start('visible');
    }
  }, [leftInView3, leftControls3]);
  
  return (
    <div>
      <div id="title" className="text-center my-20">
        <h1 className="text-4xl lg:text-6xl font-bold">Konténer típusok</h1>
        <p className="text-2xl lg:text-4xl font-semibold pt-2">Nézze meg kínálatunk!</p>
        <div className="flex justify-center">
          <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
        </div>
      </div>
      <div className="pb-10">
      <div className="flex h-auto flex-col sm:flex-row">
        <motion.div  ref={leftRef1} animate={leftControls1} initial="hidden" className="flex-1 flex items-center  justify-evenly pl-10  sm:p-4 md:p-10" variants={slideInFromLeft(0.5)}>
          <div className="text-start">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4">Konténer típus</h1>
            <h3 className=" sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4">Kis szöveg</h3>
            <p className="sm:text-lg md:text-1xl lg:text-2xl mb-2 md:mb-6">Egy rövidebb leírás</p>
            <TopButton>Érdeklődők</TopButton>
          </div>
        </motion.div>
        <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10">
          <img 
            alt="Kép"
            src="/irodakont.jpg"
            className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
            />
        </div>
      </div>
      </div>
      <div className="pb-10">
      <div className="flex h-auto flex-col sm:flex-row">
        <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10 order-2 sm:order-1">
            <img 
              alt="Kép"
              src="/irodakont.jpg"
              className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
              />
          </div>
          <motion.div ref={rightRef1} animate={rightControls1} initial="hidden" className="flex-1 flex items-center order-1 sm:order-2  justify-evenly pl-10  sm:p-4 md:p-10" variants={slideInFromRight(0.5)}>
          <div className="text-start">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4">Konténer típus</h1>
            <h3 className=" sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4">Kis szöveg</h3>
            <p className="sm:text-lg md:text-1xl lg:text-2xl mb-2 md:mb-6">Egy rövidebb leírás</p>
            <TopButton>Érdeklődők</TopButton>
          </div>
        </motion.div>
      </div>
      </div>
      <div className="pb-10">
      <div className="flex h-auto flex-col sm:flex-row">
      <motion.div ref={leftRef2} animate={leftControls2} initial="hidden"  className="flex-1 flex items-center  justify-evenly pl-10  sm:p-4 md:p-10" variants={slideInFromLeft(0.5)}>
          <div className="text-start">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4">Konténer típus</h1>
            <h3 className=" sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4">Kis szöveg</h3>
            <p className="sm:text-lg md:text-1xl lg:text-2xl mb-2 md:mb-6">Egy rövidebb leírás</p>
            <TopButton>Érdeklődők</TopButton>
          </div>
        </motion.div>
        <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10">
          <img 
            alt="Kép"
            src="/irodakont.jpg"
            className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
            />
        </div>
      </div>
      </div>
      <div className="flex h-auto flex-col sm:flex-row pb-10">
      <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10 order-2 sm:order-1">
          <img 
            alt="Kép"
            src="/irodakont.jpg"
            className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
            />
        </div>
        <motion.div ref={rightRef2} animate={rightControls2} initial="hidden" className="flex-1 flex items-center order-1 sm:order-2  justify-evenly pl-10  sm:p-4 md:p-10" variants={slideInFromRight(0.5)}>
          <div className="text-start">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4">Konténer típus</h1>
            <h3 className=" sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4">Kis szöveg</h3>
            <p className="sm:text-lg md:text-1xl lg:text-2xl mb-2 md:mb-6">Egy rövidebb leírás</p>
            <TopButton>Érdeklődők</TopButton>
          </div>
        </motion.div>
      </div>
      <div className="flex h-auto flex-col sm:flex-row ">
        <motion.div ref={leftRef3} animate={leftControls3} initial="hidden" className="flex-1 flex items-center  justify-evenly pl-10  sm:p-4 md:p-10" variants={slideInFromLeft(0.5)}>
          <div className="text-start">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4">Konténer típus</h1>
            <h3 className=" sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4">Kis szöveg</h3>
            <p className="sm:text-lg md:text-1xl lg:text-2xl mb-2 md:mb-6">Egy rövidebb leírás</p>
            <TopButton>Érdeklődők</TopButton>
          </div>
        </motion.div>
        <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10">
          <img 
            alt="Kép"
            src="/irodakont.jpg"
            className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
            />
        </div>
      </div>
    </div>
  );
};

export default Containertypes;
