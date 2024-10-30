import Image from 'next/image';
import React from 'react';

const TerkoPics = () => {
  return (
    <div>
      <div className="flex flex-col items-center pt-4">
        <h1 className="text-3xl font-bold">Oszd meg a szobád!</h1>
        <p className="text-xl">#Szobabutorok</p>
      </div>
      
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col items-end">
          <div className="flex flex-row space-x-2 place-items-end">
            <div className="w-[150px] h-[350px]">
              <Image
                src={"/indoor.jpg"}
                alt="kep"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex w-[350px] h-[300px]">
              <Image
                src={"/indoor.jpg"}
                alt="kep"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row mt-2 place-items-start">
            <div className="w-[200px] h-[300px]">
              <Image
                src={"/indoor.jpg"}
                alt="kep"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[300px] h-[200px] ml-2">
              <Image
                src={"/indoor.jpg"}
                alt="kep"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        
        <div className="w-[200px] flex-[0.5] h-[300px] flex items-center justify-center pt-60 mx-4">
          <div>
          <Image
            src={"/indoor.jpg"}
            alt="kep"
            width={300}
            height={400}
            className="w-full h-full object-cover rounded-lg"
          />
          </div>
        </div>

        {/* Jobb oldal */}
        <div className="flex flex-1 flex-col items-start">
          <div className="flex flex-row space-x-2 place-items-end">
            <div className="w-[250px] h-[300px]">
              <Image
                src={"/indoor.jpg"}
                alt="kep"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex w-[250px] h-[350px]">
              <Image
                src={"/indoor.jpg"}
                alt="kep"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-row mt-2 place-items-start">
            <div className="w-[320px] h-[300px]">
              <Image
                src={"/indoor.jpg"}
                alt="kep"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[150px] h-[200px] ml-2">
              <Image
                src={"/indoor.jpg"}
                alt="kep"
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerkoPics;
