import React from 'react'
import { footerLinks, menuLinks } from '../constants'
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer2 = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-50 h-10 text-gray-900 rounded-t-lg shadow-2xl"/>
      <div className="relative flex justify-center items-center h-auto w-auto">
        <div className="absolute top-[-20px] bg-gray-200 p-4 rounded-lg w-11/12 md:w-3/4">
          <div className="flex flex-col md:flex-row items-center place-content-evenly gap-y-5 md:gap-x-3">
            <div className="flex flex-row items-center gap-4">
              <BsFillTelephoneFill className="text-2xl md:text-4xl text-black" />
              <p className="text-black text-sm md:text-base">+36XXXXXXXX</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="hidden md:block h-14 bg-gray-600 w-0.5"></div>
              <FaMapMarkedAlt className="text-2xl md:text-4xl text-black" />
              <p className="text-black text-sm md:text-base">Bácsalmás, XXXX utca, XX</p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="hidden md:block h-14 bg-gray-600 w-0.5"></div>
              <MdEmail className="text-2xl md:text-4xl text-black" />
              <p className="text-black text-sm md:text-base">email</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-auto pb-20">
        <div className="pt-40 flex flex-col md:flex-row md:items-center md:place-content-evenly px-6 md:px-0">
          <div className="flex-col text-center md:text-left mb-8 md:mb-0">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                alt="logo"
                src="/m1.jpg"
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-3xl mx-auto md:mx-0"
              />
              <div>
                <h1 className="text-2xl md:text-3xl text-white font-bold">RicuPeru</h1>
                <p className="text-sm md:text-md text-gray-300">A partner, akire számithat!</p>
              </div>
            </div>
            <p className="pt-8 font-semibold text-gray-300 text-xs md:text-md pr-0 md:pr-10">Copright @ 2024 Gatium. Minden jog fentartva.</p>
          </div>
          <div className="flex-col text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-white pb-2 font-bold text-lg md:text-2xl">Policies</h1>
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray-200 text-xs md:text-md pt-2">
                {link}
              </p>
            ))}
          </div>
          <div className="flex-col text-center md:text-left">
            <h1 className="text-white pb-2 font-bold text-lg md:text-2xl">Menü</h1>
            {menuLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray-200 text-xs md:text-md pt-2">
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer2
