import React from 'react';
import { FlipWordsDemo } from './Flipwords';
import TopButton from './Buttons/TopButton';
import Image from 'next/image';

const HeaderGepek = () => {
  return (
    <div className="pt-20">
      <div className="relative bg-gray-900 h-[600px] w-full overflow-hidden">
        <Image
          alt=""
          width={1000}
          height={600}
          src="/munkag.jpg"
          className="absolute inset-0 z-0 h-full w-full object-cover md:object-center opacity-35"
        />
        <div className="pt-20 absolute top-0 left-0 z-10 lg:px-10 flex flex-col items-start w-full h-4/5">
        <div className="h-[40rem] flex justify-center items-stretch px-4">
          <div className="text-[4rem] md:text-[4rem] font-bold mt-1 leading-none mx-auto text-white ml-6 pb-8 lg:pt-14 ">
            Démász Bérlése
          </div>
        </div>
          <p className="md:text-xl sm:text-lg mb-10 text-white max-w-5xl ml-10 shadow-xl">Jól felszerelt és kényelmes szobák, minden igényt kielégítve! <br/>
          Az épület a város szívében található, így a központi elhelyezkedésnek köszönhetően<br/> minden fontos helyszín könnyen megközelíthető.</p>
          <div className="flex flex-row ml-10 gap-x-6 text-white text-xl text-bold">
                            <div className="text-extrabold">
                                <h2 className='font-bold text-2xl flex r'>123</h2>
                                <h2 className='font-semibold text-xl flex justify-center'>Férőhelyek száma</h2>
                                <div className="w-24 md:pt-1 sm:w-36 border-b-2 border-yellow-500"></div>
                            </div>
                            <div className="text-extrabold"> 
                                <h2 className='font-bold text-2xl flex '>123</h2>
                                <h2 className='font-semibold text-xl flex justify-center'>Szobák száma</h2>
                                <div className="w-24 md:pt-1 sm:w-28 border-b-2 border-yellow-500"></div>
                            </div>
                        </div>
          <div className="items-center  ml-10 flex flex-col">
            <div className="py-10 ">
            <TopButton >Árajánlat kérése!</TopButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderGepek;
