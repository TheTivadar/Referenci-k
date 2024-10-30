import React from 'react';
import TopButton from './Buttons/TopButton';
import Image from 'next/image';


interface KontenerTipus {
  id: string;
  title: string;
  body?: string;
  description?: string;
  prop1?: string;
  prop2?: string;
  src?:string;
}

interface Props {
  demaszHero: KontenerTipus[];
}

const DemaszHero = ({ demaszHero }: Props) => {
  if (!demaszHero) return null;
  const body1 = demaszHero.find(item => item.id === "1")?.body;
  const title1 = demaszHero.find(item =>item.id === "1")?.title;
  const prop21 = demaszHero.find(item =>item.id === "2")?.prop1;
  const prop22 = demaszHero.find(item =>item.id === "2")?.prop2;
  const prop31 = demaszHero.find(item =>item.id === "3")?.prop1;
  const prop32 = demaszHero.find(item =>item.id === "3")?.prop2;
  const body = demaszHero.find(item =>item.id === "4")?.body;

  return (
    <div>
      <div className="relative bg-gray-900 h-[700px] w-full overflow-hidden">
        <Image 
          alt=""
          src="/demaszhero.jpg"
          width={1000}
          height={600}
          className="absolute inset-0 z-0 h-full w-full object-cover md:object-center opacity-35"
        />
        <div className="pt-20 absolute top-0 left-0 z-10 px-10 flex flex-col items-start w-full h-4/5">
            <h1 className='text-7xl font-bold text-white my-10'>{title1}</h1>
          <p className="md:text-xl text-lg mb-10 text-white shadow-xl max-w-2xl">{body1}</p>
            <div className='flex flex-row text-white'>
                <div className='flex flex-col pr-10'>
                    <p className='text-3xl font-bold'>{prop21}</p>
                    <p className='text-xl pb-2'>{prop22}</p>
                    <div className='h-1 w-full bg-yellow-400'></div>
                </div>
                <div className='flex flex-col'>
                    <p className='text-3xl font-bold'>{prop31}</p>
                    <p className='text-xl pb-2'>{prop32}</p>
                    <div className='h-1 w-full bg-yellow-400'></div>
                </div>
            </div>
          <div className="items-center  flex flex-col">
            <div className="py-6 ">
            <TopButton>{body}</TopButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemaszHero;
