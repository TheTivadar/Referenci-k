import React from 'react'
import { menuLinks, footerLinks } from '../constants'
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from 'next/image';
import { Nyilatkozat } from './Nyilatkozat';



const Footer2 = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-50 h-10 text-gray-900 rounded-t-lg shadow-2xl" />
      <div className="relative flex justify-center items-center h-auto w-auto">
        <div className="absolute top-[-20px] bg-gray-200 p-4 rounded-lg w-11/12 md:w-3/4">
          <div className="flex flex-col md:flex-row items-center place-content-evenly gap-y-5 md:gap-x-3">
            <div className="flex flex-row items-center gap-4">
              <BsFillTelephoneFill className="text-2xl md:text-4xl text-black" />
              <p className="text-black text-sm md:text-base">+36 30 331 6453</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="hidden md:block h-14 bg-gray-600 w-0.5"></div>
              <FaMapMarkedAlt className="text-2xl md:text-4xl text-black" />
              <p className="text-black text-sm md:text-base">Bácsalmás, Rákóczi Ferenc utca, 33-35</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="hidden md:block h-14 bg-gray-600 w-0.5"></div>
              <MdEmail className="text-2xl md:text-4xl text-black" />
              <p className="text-black text-sm md:text-base">ricupero@ricupero.hu</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-auto pb-20">
        <div className="pt-40 flex flex-col md:flex-row md:items-start md:place-content-evenly px-6 md:px-0">
          <div className="flex-col text-center md:text-left mb-8 md:mb-0">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Image
                alt="logo"
                src="/riclogo.jpg"
                width={100}
                height={100}
                className="w-auto h-12 md:w-auto md:h-20 object-cover rounded-lg md:rounded-3xl mx-auto md:mx-0"
              />
              <div>
                <h1 className="text-2xl md:text-3xl text-white font-bold hidden md:block">Ricupero</h1>
                <p className="text-sm md:text-md text-gray-300">A partner, akire számithat!</p>
              </div>
            </div>
            <p className="pt-8 font-semibold text-gray-300 text-xs md:text-md pr-0 md:pr-10">Copright @ 2024 Gatium. Minden jog fentartva.</p>
            <div className="flex flex-col md:flex-row text-center md:text-left mt-10 space-x-6">
                <Nyilatkozat />
            </div>

          </div>
          <div className="w-full md:w-1/2">
            <div className="mt-8 md:mt-0">
              <iframe
                width="100%"
                height="500"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.1678444900954!2d19.323147386750687!3d46.12748639655686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743153f32bdd3ed%3A0xa452e5c495c759aa!2zQsOhY3NhbG3DoXMsIFLDoWvDs2N6aSDDunQgMzMsIDY0MzA!5e0!3m2!1shu!2shu!4v1730301591401!5m2!1shu!2shu">
                </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer2
