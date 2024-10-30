import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegUser,FaSearch, FaHeart   } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='py-2 md:py-8 flex gap-y-4 md:gap-y-0 flex-col md:flex-row bg-gray-50 items-center justify-stretch'>
      <div className='flex-[1] flex flex-row gap-x-8 md:gap-x-0 justify-evenly  items-center'>
        <Image src={"/astronaut.png"} alt='logo' width={50} height={50} />
        <div>Cégnév</div>
      </div>
      <div className='flex-[3] flex justify-center flex-row gap-x-8 md:gap-x-14 lg:gap-x-20 font-semibold text-lg'>
          <Link href={"/"}>Főoldal</Link>
          <Link href={"/vasarloi"}>Vásárlás</Link>
          <Link href={"/about"}>Rólunk</Link>
          <Link href={"/kapcsolat"}>Kapcsolat</Link>
      </div>
      <div className='flex-[1] flex flex-row gap-x-8 md:gap-x-6 lg:gap-x-8'>
          <FaRegUser />
          <FaSearch />
          <FaHeart />
          <IoCartOutline />
      </div>
    </div>
  )
}

export default Navbar