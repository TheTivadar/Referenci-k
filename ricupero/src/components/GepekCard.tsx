import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ServiceData } from '../constants';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import OrangeBackground from './OrangeBackground';

const cards = [
    {
      image: '/munkagep.jpg',
      title: 'Kártya Címe 1',
      content: 'Rövid leírás 1',
    },
    {
      image: '/munkagep.jpg',
      title: 'Kártya Címe 2',
      content: 'Rövid leírás 2',
    },
    {
      image: '/munkagep.jpg',
      title: 'Kártya Címe 3',
      content: 'Rövid leírás 3',
    },
  ];

const GepekCard = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <OrangeBackground />
      <div className="text-black font-extrabold text-2xl flex justify-center pt-8 pb-1">
        Ismerje meg földmunkagépeinket!
      </div>
      <div className="flex justify-center">
        <div className="w-1/5 border-b-4 border-yellow-500 font-extrabold mb-20"></div>
      </div>
      <div className="flex items-center flex-col h-[600px]">
        
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="relative flex flex-col gap-6 mb-14 group shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.backgroundImage.src})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                  <p className="lg:text-[18px]">{item.content}</p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center h-auto bg-white">
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 p-4 w-full md:w-3/4 gap-4 md:gap-6 lg:gap-8">
        {/* Bal oldali kisebb kártya */}
        <div className="w-full md:w-1/3 p-2 md:p-4">
          <div className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/munkagep.jpg"
              alt="Kártya kép"
              width={500}
              height={600}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-md md:text-lg font-bold">Kártya Címe 1</h3>
              <p className="text-xs md:text-sm">Rövid leírás 1</p>
            </div>
          </div>
        </div>

        {/* Jobb oldali két nagyobb kártya */}
        <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-4 md:gap-6 lg:gap-8">
          <div className="w-full md:w-1/2 p-2 md:p-4">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/munkagep.jpg"
                alt="Kártya kép"
                width={500}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-md md:text-lg font-bold">Kártya Címe 2</h3>
                <p className="text-xs md:text-sm">Rövid leírás 2</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2 md:p-4">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/munkagep.jpg"
                alt="Kártya kép"
                width={500}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-md md:text-lg font-bold">Kártya Címe 3</h3>
                <p className="text-xs md:text-sm">Rövid leírás 3</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
  );
}

export default GepekCard;
