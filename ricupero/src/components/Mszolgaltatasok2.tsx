"use client";
import React, { useEffect, useRef, useState } from 'react';
import OrangeBackground from './OrangeBackground';
import Image from 'next/image';
import Link from 'next/link';

interface KontenerTipus {
  id: string;
  title: string;
  body?: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  mainSzolgaltatasok: KontenerTipus[];
}

const Mszolgaltatasok2 = ({ mainSzolgaltatasok }: Props) => {

  const elementsRef = useRef<HTMLDivElement[]>([]);


  useEffect(() => {
    if (window.innerWidth >= 100) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              if (element.classList.contains('left')) {
                element.classList.remove('hidden-element');
                element.classList.add('animate-left');
              } else if (element.classList.contains('right')) {
                element.classList.remove('hidden-element');
                element.classList.add('animate-right');
              }
            } else {
              element.classList.add('hidden-element');
              element.classList.remove('animate-left', 'animate-right');
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      elementsRef.current.forEach((element) => {
        if (element) {
          observer.observe(element);
        }
      });

      return () => observer.disconnect();
    }
  }, []); 

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
  if (!mainSzolgaltatasok) return null;
  const body1 = mainSzolgaltatasok.find(item => item.id === "1")?.body;
  const body2 = mainSzolgaltatasok.find(item => item.id === "2")?.body;
  const body3 = mainSzolgaltatasok.find(item => item.id === "3")?.body;
  const body4 = mainSzolgaltatasok.find(item => item.id === "4")?.body;
  const body5 = mainSzolgaltatasok.find(item => item.id === "5")?.body;
  const body6 = mainSzolgaltatasok.find(item => item.id === "6")?.body;

  return (
    <div className="pt-20 relative px-6 overflow-hidden lg:px-0">
      <OrangeBackground />
      <div className="text-black font-extrabold text-4xl md:text-6xl flex justify-center p-4 pb-1">
        {body1}
      </div>
      <div className="flex justify-center">
        <div className="w-2/6 border-b-4 border-yellow-500 font-extrabold mb-20 pt-2 "></div>
      </div>
      <div className='flex flex-col text-black'>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='flex flex-col h-auto'>
            <Link href={"/utepites"}>
              <div ref={addToRefs} className="left hidden-element flex flex-col items-center justify-start pl-4 sm:p-4 md:p-10 overflow-hidden">
                <div className="text-start">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{body2}</h1>
                </div>
                <div className="flex items-center justify-center sm:justify-left p-2">
                  <Image
                    alt="Kép"
                    src="/SR22H-C6.png"
                    width={600}
                    height={600}
                    className="lg:w-4/6 md:w-5/6 w-4/6 md:max-w-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='flex flex-col h-auto mt-10 md:mt-40 lg:mt-40'>
            <Link href={"/fuvarozas"}>
              <div ref={addToRefs} className="right hidden-element flex flex-col items-center justify-start pl-4 sm:p-4 md:p-10 overflow-hidden">
                <div className="text-start">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{body3}</h1>
                </div>
                <div className="flex items-center justify-center sm:justify-left p-2">
                  <Image
                    alt="Kép"
                    src="/dumpTruck.png"
                    width={600}
                    height={600}
                    className="lg:w-4/6 md:w-5/6 w-4/6 md:max-w-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='flex flex-col h-auto mt-10 md:-mt-20'>
            <Link href={"/kontenerek"}>
              <div ref={addToRefs} className="left hidden-element flex flex-col items-center justify-start pl-4 sm:p-4 md:p-10 overflow-hidden">
                <div className="text-start">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{body4}</h1>
                </div>
                <div className="flex items-center justify-center sm:justify-left p-2">
                  <Image
                    alt="Kép"
                    src="/contTrans.png"
                    width={600}
                    height={600}
                    className="lg:w-4/6 md:w-5/6 w-4/6 md:max-w-2xl lg:max-w-xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='flex flex-col h-auto mt-10 md:mt-24 lg:mt-32'>
            <Link href={"/utseprolocsolo"}>
              <div ref={addToRefs} className="right hidden-element flex flex-col items-center justify-start pl-4 sm:p-4 md:p-10 overflow-hidden">
                <div className="text-start">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{body5}</h1>
                </div>
                <div className="flex items-center justify-center sm:justify-left p-2">
                  <Image
                    alt="Kép"
                    src="/brudersweeper.png"
                    width={600}
                    height={600}
                    className="lg:w-4/6 md:w-5/6 w-4/6 md:max-w-2xl lg:max-w-xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='flex flex-1 flex-col h-auto mt-10 md:-mt-24 '>
            <Link href={"/demasz"}>
              <div ref={addToRefs} className="left hidden-element flex flex-col items-center justify-start pl-4 sm:p-4 md:p-10 overflow-hidden">
                <div className="text-start">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{body6}</h1>
                </div>
                <div className="flex items-center justify-center sm:justify-left p-2">
                  <Image
                    alt="Kép"
                    src="/demaszhero.png"
                    width={600}
                    height={600}
                    className="lg:w-4/6 md:w-5/6 w-4/6 md:max-w-2xl lg:max-w-xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='flex flex-1 flex-col h-auto md:mt-32'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mszolgaltatasok2;
