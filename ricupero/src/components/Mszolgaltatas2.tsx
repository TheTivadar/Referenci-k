import React, { useEffect, useRef } from 'react';
import OrangeBackground from './OrangeBackground';
import Link from 'next/link';
import Image from 'next/image';

const Mszolgaltatas2 = () => {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Intersection Observer csak akkor, ha nagyobb képernyőkről van szó
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
          threshold: 0.1, // 10%-os threshold
        }
      );

      elementsRef.current.forEach((element) => {
        if (element) {
          observer.observe(element);
        }
      });

      return () => observer.disconnect();
}}, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="pt-20 relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
      <OrangeBackground />
      <div className="text-black font-extrabold text-4xl flex justify-center p-4 pb-1">
        Szolgáltatásaink
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold mb-4"></div>
      </div>
      <div className=" md:max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-12 pt-20 justify-center">
        <div ref={addToRefs} className=" left hidden-element">
        <Link href="/utepites" className="block">
          <div className="font-bold text-2xl sm:text-3xl  md:text-4xl lg:text-5xl hover-effect centered-text sm:pb-4 lg:pb-8">Útépítés</div>
          <div className="relative flex items-center justify-center">
            <Image
              alt='Domper'
              src="/SR22H-C6.png"
              height={800}
              width={800}
              className="shadow-none hover:scale-110 transition-all duration-300 w-4/6"
              style={{ background: 'transparent' }}
            />
          </div>
          </Link>
        </div>
        <div ref={addToRefs} className="md:pt-32 lg:pt-60 right hidden-element">
        <Link href="/fuvarozas" className="block">
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 hover-effect centered-text sm:p-4 lg:pb-8">Fuvarozás</div>
          <div className="relative flex items-center justify-center">
            <Image
              alt='Bruder Sweeper'
              src="/dumpTruck.png"
              height={800}
              width={800}
              className="shadow-none hover:scale-110 transition-all duration-300 w-4/6"
              style={{ background: 'transparent' }}
              
            />
          </div>
          </Link>
        </div>
        <div ref={addToRefs} className=" md:-mt-28 left hidden-element">
        <Link href="/kontenerek" className="block">
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 hover-effect centered-text sm:p-4 lg:pb-8">Konténer bérlés</div>
          <div className="relative flex items-center justify-center">
            <Image
              alt='Container Transport'
              src="/contTrans.png"
              height={800}
              width={800}
              className="shadow-none hover:scale-110 transition-all duration-300 w-4/6"
              style={{ background: 'transparent' }}
            />
          </div>
          </Link>
        </div>
        <div ref={addToRefs} className="md:pt-10 lg:pt-40 right hidden-element">
        <Link href="/utseprolocsolo" className="block">
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 hover-effect centered-text sm:p-4 lg:pb-8">Seprő-locsoló bérlés</div>
          <div className="relative flex items-center justify-center">
            <Image
              alt='Dump Truck'
              src="/brudersweeper.png"
              height={800}
              width={800}
              className="shadow-none hover:scale-110 transition-all duration-300 w-4/6"
              style={{ background: 'transparent' }}
            />
          </div>
          </Link>
        </div>
        <div ref={addToRefs} className=" md:-mt-24 lg:-mt-20 left hidden-element">
        <Link href="/demasz" className="block">
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 hover-effect centered-text sm:p-4 lg:pb-8">Démász</div>
          <div className="relative flex items-center justify-center">
            <Image
              alt='Domper'
              src="/SR22H-C6.png"
              height={800}
              width={800}
              className="shadow-none hover:scale-110 transition-all duration-300 w-4/6"
              style={{ background: 'transparent' }}
            />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mszolgaltatas2;
