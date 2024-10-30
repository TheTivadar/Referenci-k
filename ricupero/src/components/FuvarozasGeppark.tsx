import React, { useEffect, useRef, useState } from 'react';
import TopButton from './Buttons/TopButton';
import Image from 'next/image';

interface KontenerTipus {
  id: string;
  title: string;
  body: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  fuvarozasGeppark: KontenerTipus[];
}

const FuvarozasGeppark = ({fuvarozasGeppark}: Props) => {

  

  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.remove('hidden-element');
            if (element.classList.contains('left')) {
              element.classList.add('animate-left');
            } else if (element.classList.contains('right')) {
              element.classList.add('animate-right');
            }
          } else {
            element.classList.add('hidden-element');
            element.classList.remove('animate-left', 'animate-right');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  if (!fuvarozasGeppark) return null;
  return (
    <div>
      <div id="title" className="text-center my-20">
        <h1 className="text-4xl lg:text-6xl font-bold text-black">Gépeink!</h1>
        <div className="flex justify-center">
          <div className="w-1/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
        </div>
      </div>
      <div className="pb-10 text-black">
        {fuvarozasGeppark.map((item, index) => (
          <div key={item.id} ref={addToRefs} className="md:left md:hidden-element">
          <div className="flex h-auto flex-col sm:flex-row pb-4">
            {/* A sorrend felcserélése csak mobilon (sm és kisebb) */}
            {parseInt(item.id) % 2 === 0 ? (
              <>
                {/* A kép és a szöveg sorrendjének felcserélése sm alatt */}
                <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10 sm:order-1 order-2">
                  <Image
                    alt="Kép"
                    src={`/${item.src}`}
                    height={600}
                    width={600}
                    className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                  />
                </div>
                <div className="flex-1 flex items-center justify-evenly md:pl-24 sm:p-4 md:p-10 sm:order-2 order-1">
                  <div className="text-center md:text-start">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4">{item.title}</h1>
                    <h3 className="sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4">{item.body}</h3>
                    <p className="sm:text-lg md:text-1xl lg:text-2xl mb-2 md:mb-6">{item.description}</p>
                    <TopButton>Érdeklődők</TopButton>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 flex items-center justify-evenly md:pl-24 sm:p-4 md:p-10">
                  <div className="text-center md:text-start">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4">{item.title}</h1>
                    <h3 className="sm:text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4">{item.body}</h3>
                    <p className="sm:text-lg md:text-1xl lg:text-2xl mb-2 md:mb-6">{item.description}</p>
                    <TopButton>Érdeklődők</TopButton>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10">
                  <Image
                    alt="Kép"
                    src={`/${item.src}`}
                    height={600}
                    width={600}
                    className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default FuvarozasGeppark;
