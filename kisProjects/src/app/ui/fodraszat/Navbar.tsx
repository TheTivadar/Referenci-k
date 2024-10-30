"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' // importálunk ikonokat a hamburger és a bezárás gombhoz
import { usePathname } from "next/navigation"

const FodraszNavbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false); // állapot a menü nyitásához/zárásához

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='py-4 relative w-full bg-black text-gray-200 text-lg'>
      <div className='flex flex-row items-center justify-between px-4 lg:px-10'>
        <div className='flex-[0.7] flex justify-start'>
          <Link href={"/fodraszat"}>
          <Image src={"/astronaut.png"} alt='logo' width={50} height={50} />
          </Link>
        </div>

        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
          </button>
        </div>
        <div className='hidden sm:flex flex-[2.5] justify-evenly font-bold'>
          <Link href={"/fodraszat/szolgaltatas"} className={` ${pathname === "/fodraszat/szolgaltatas" && "underline underline-offset-2 decoration-orange-400 decoration-2"}`}>Szolgáltatás</Link>
          <Link href={"/fodraszat/rolunk"}className={` ${pathname === "/fodraszat/rolunk" && "underline underline-offset-2 decoration-orange-400 decoration-2"}`}>Rólunk</Link>
          <Link href={"/fodraszat/blog"}className={` ${pathname === "/fodraszat/blog" && "underline underline-offset-2 decoration-orange-400 decoration-2"}`}>Blog</Link>
          <Link href={"/fodraszat/kapcsolat"} className={` ${pathname === "/fodraszat/kapcsolat" && "underline underline-offset-2 decoration-orange-400 decoration-2"}`}>Kapcsolat</Link>
        </div>
        <div className='hidden sm:block flex-1 text-right'>
          <Link href={"/fodraszat/kapcsolat"} className='p-2 border-4 border-orange-400 rounded-xl font-semibold hover:bg-orange-100'>
            <button>Foglalj időpontot!</button>
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className='sm:hidden flex flex-col items-center space-y-4 mt-4 font-bold'>
          <Link href={"/fodraszat/szolgaltatas"} onClick={toggleMenu}>Szolgáltatás</Link>
          <Link href={"/fodraszat/rolunk"} onClick={toggleMenu}>Rólunk</Link>
          <Link href={"/fodraszat/blog"} onClick={toggleMenu}>Blog</Link>
          <Link href={"/fodraszat/kapcsolat"} onClick={toggleMenu}>Kapcsolat</Link>
          <Link href={"/fodraszat/kapcsolat"} className='p-2 border-4 border-orange-400'>
            <button onClick={toggleMenu}>Foglalj időpontot!</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default FodraszNavbar;
