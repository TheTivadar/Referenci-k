import React from 'react';
import { FlipWordsDemo } from './Flipwords';
import TopButton from './Buttons/TopButton';
import Image from 'next/image';

const HeaderGeppark = () => {
  return (
    <div className="pt-20">
      <div className="relative bg-gray-900 h-[600px] w-full overflow-hidden">
        <Image 
          alt=""
          src="/referenciagf.jpg"
          height={600}
          width={1400}
          className="absolute inset-0 z-0 h-full w-full object-cover md:object-center opacity-35"
        />
        <div className="pt-20 absolute top-0 left-0 z-10 px-10 flex flex-col items-start w-full h-4/5">
          <FlipWordsDemo/>
          <p className="md:text-xl text-lg mb-10 text-white shadow-xl">Bízzon mindent profi csapatunkra! <br/>
            Vegye igénybe komplex szolgáltatásainkat Bács-Kiskun és Csongrád vármegye területén.</p>
          <div className="items-center flex flex-col">
            <div className="py-10 ">
            <TopButton >Árajánlat kérése!</TopButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderGeppark;