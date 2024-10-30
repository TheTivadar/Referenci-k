import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import TopButton from '@/components/Buttons/TopButton';


interface KontenerTipus {
  id: string;
  title: string;
  body: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  kontenerTipus: KontenerTipus[];
}

const Containertypes =({ kontenerTipus }: Props) => {
  

  const elementsRef = useRef<HTMLDivElement[]>([]);

  // Az observer beállítása feltétel nélkül történik, és az ablakméretet a belsejében vizsgáljuk
  useEffect(() => {
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
        threshold: 0.1,
      }
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
  if(!kontenerTipus) return null;
  const body1 = kontenerTipus.find(item => item.id === "1")?.body;
  const title1 = kontenerTipus.find(item =>item.id === "1")?.title;
  const body2 = kontenerTipus.find(item => item.id === "2")?.body;
  const title2 = kontenerTipus.find(item =>item.id === "2")?.title;
  const description2 = kontenerTipus.find(item => item.id === "2")?.description;
  const prop2 = kontenerTipus.find(item =>item.id === "2")?.prop1;
  const src2 = kontenerTipus.find(item =>item.id === "2")?.src;
  const body4 = kontenerTipus.find(item => item.id === "4")?.body;
  const title4 = kontenerTipus.find(item =>item.id === "4")?.title;
  const description4 = kontenerTipus.find(item => item.id === "4")?.description;
  const prop4 = kontenerTipus.find(item =>item.id === "4")?.prop1;
  const src4 = kontenerTipus.find(item =>item.id === "4")?.src;
  const body5 = kontenerTipus.find(item => item.id === "5")?.body;
  const title5 = kontenerTipus.find(item =>item.id === "5")?.title;
  const description5 = kontenerTipus.find(item => item.id === "5")?.description;
  const prop5 = kontenerTipus.find(item =>item.id === "5")?.prop1;
  const src5 = kontenerTipus.find(item =>item.id === "5")?.src;
  const body3 = kontenerTipus.find(item => item.id === "3")?.body;
  const title3 = kontenerTipus.find(item =>item.id === "3")?.title;
  const description3 = kontenerTipus.find(item => item.id === "3")?.description;
  const prop3 = kontenerTipus.find(item =>item.id === "3")?.prop1;
  const src3 = kontenerTipus.find(item =>item.id === "3")?.src;
  const body6 = kontenerTipus.find(item => item.id === "6")?.body;
  const title6 = kontenerTipus.find(item =>item.id === "6")?.title;
  const description6 = kontenerTipus.find(item => item.id === "6")?.description;
  const prop6 = kontenerTipus.find(item =>item.id === "6")?.prop1;
  const src6 = kontenerTipus.find(item =>item.id === "6")?.src;
  
    return (
      <div>
        <div id="title" className="text-center my-20 text-black">
          <h1 className="text-4xl lg:text-6xl font-bold">{title1}</h1>
          <p className="text-2xl lg:text-4xl font-semibold pt-2">{body1}</p>
          <div className="flex justify-center">
            <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
          </div>
        </div>
        <div className="pb-10">
        <div className="flex h-auto flex-col sm:flex-row text-black">
          <div ref={addToRefs} className="left hidden-element flex-1 flex items-center  justify-evenly pl-10  sm:p-4 md:p-10 overflow-hidden">
            <div className="text-start">
              <h3 className=" sm:text-xl md:text-2xl mb-1 text-orange-400 font-bold">{body2}</h3>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8">{title2}</h1>
              <p className="sm:text-lg md:text-xl mb-2 md:mb-6 max-w-2xl">{description2}</p>
              <TopButton>Érdeklődők</TopButton>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10">
            <Image
              alt="Kép"
              src={`/${src2}`}
              width={600}
              height={600}
              className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
              />
          </div>
        </div>
        </div>
        <div className="pb-10">
        <div className="flex h-auto flex-col sm:flex-row text-black">
          <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10 order-2 sm:order-1">
              <Image 
                alt="Kép"
                src={`/${src3}`}
                width={600}
                height={600}
                className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
                />
            </div>
            <div ref={addToRefs} className="left hidden-element overflow-hidden flex-1 flex items-center order-1 sm:order-2  justify-evenly pl-10  sm:p-4 md:p-10">
            <div className="text-start">
              <h3 className=" sm:text-xl md:text-2xl mb-1 text-orange-400 font-bold">{body3}</h3>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8">{title3}</h1>
              <p className="sm:text-lg md:text-xl mb-2 md:mb-6 max-w-2xl">{description3}</p>
              <TopButton>Érdeklődők</TopButton>
            </div>
          </div>
        </div>
        </div>
        <div className="pb-10">
        <div className="flex h-auto flex-col sm:flex-row text-black">
        <div ref={addToRefs} className="left hidden-element overflow-hidden flex-1 flex items-center  justify-evenly pl-10  sm:p-4 md:p-10">
            <div className="text-start">
              <h3 className=" sm:text-xl md:text-2xl mb-1 text-orange-400 font-bold">{body4}</h3>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8">{title4}</h1>
              <p className="sm:text-lg md:text-xl mb-2 md:mb-6 max-w-2xl"> {description4}</p>
              <TopButton>Érdeklődők</TopButton>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10">
            <Image 
              alt="Kép"
              src={`/${src4}`}
              width={600}
              height={600}
              className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
              />
          </div>
        </div>
        </div>
        <div className="flex h-auto flex-col sm:flex-row pb-10 text-black">
        <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10 order-2 sm:order-1">
            <Image 
              alt="Kép"
              src={`/${src5}`}
              width={600}
              height={600}
              className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
              />
          </div>
          <div ref={addToRefs} className="left hidden-element overflow-hidden flex-1 flex items-center order-1 sm:order-2  justify-evenly pl-10  sm:p-4 md:p-10">
            <div className="text-start">
              <h3 className=" sm:text-xl md:text-2xl mb-1 text-orange-400 font-bold">{body5}</h3>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8">{title5}</h1>
              <p className="sm:text-lg md:text-xl mb-2 md:mb-6 max-w-2xl">{description5}</p>
              <TopButton>Érdeklődők</TopButton>
            </div>
          </div>
        </div>
        <div className="flex h-auto flex-col sm:flex-row text-black">
          <div ref={addToRefs} className="left hidden-element overflow-hidden flex-1 flex items-center  justify-evenly pl-10  sm:p-4 md:p-10">
            <div className="text-start">
              <h3 className=" sm:text-xl md:text-2xl mb-1 text-orange-400 font-bold">{body6}</h3>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8">{title6}</h1>
              <p className="sm:text-lg md:text-xl mb-2 md:mb-6 max-w-2xl">{description6}</p>
              <TopButton>Érdeklődők</TopButton>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:justify-left p-2 sm:p-4 md:p-10">
            <Image 
              alt="Kép"
              src={`/${src6}`}
              width={600}
              height={600}
              className="w-5/6 max-w-3xl shadow-2xl rounded-lg cursor-pointer hover:scale-105 duration-500 "
              />
          </div>
        </div>
      </div>
    );
  };
  
export default Containertypes;

