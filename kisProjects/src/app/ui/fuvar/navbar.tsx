"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  return (
    <nav className="text-white  max-w-7xl mx-auto  z-10">
      <div className="relative flex flex-row items-center md:max-w-screen-2xl mx-auto justify-between p-4">
        <div className="absolute top-0 left-0">
          <Link href={"/fuvar"}>
          <Image
            width={100}
            height={100}
            src="/bhs-trans-logo-header.svg"
            alt="BHS Trans Logo"
            className="h-28 w-auto"
            style={{ marginTop: '0px' }} // Adjust margin for the hang-down effect
          />
          </Link>
        </div>
        <div className="flex px-24 md:px-16 lg:px-24">asd</div>

        <div className="hidden md:hidden lg:flex flex-row text-wrap lg:gap-3 xl:gap-6 font-bold">
            <Link href={"/fuvar/rolunk"}className={` ${pathname === "/fuvar/rolunk" && "text-gray-400"}`}>Rólunk</Link>
            <Link href={"/fuvar/hirek"}className={` ${pathname === "/fuvar/hirek" && "text-gray-400"}`}>Hírek</Link>
            <Link href={"/fuvar/szolgaltatasok"}className={` ${pathname === "/fuvar/szolgaltatasok" && "text-gray-400"}`}>Szolgáltatások</Link>
            <Link href={"/fuvar/jarmupark"}className={` ${pathname === "/fuvar/jarmupark" && "text-gray-400"}`}>Járműpark</Link>
            <Link href={"/fuvar/karrier"}className={` ${pathname === "/fuvar/karrier" && "text-gray-400"}`}>Karrier</Link>
            <Link href={"/fuvar/kapcsolat"}className={` ${pathname === "/fuvar/kapcsolat" && "text-gray-400"}`}>Kapcsolat</Link>
            <Link href={"/fuvar/palyazatok"}className={` ${pathname === "/fuvar/palyazatok" && "text-gray-400"}`}>Pályázatok</Link>
        </div>


        {/* Jelentkezz button - right side */}
        <div className="hidden lg:block xl:ml-6 md:ml-2 pr-2">
          <Link href="/jelentkezz">
            <button
              className="bg-red-600 pr-8 md:pl-10 lg:pl-16 py-2 font-bold hover:bg-red-800"
              style={{ clipPath: 'polygon(25% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
            >
              Jelentkezz
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-end ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black fixed right-0  h-full w-full sm:w-1/2 z-0 transition-transform duration-500 ease-in-out">
          <div className="flex flex-col space-y-3 font-bold pt-16">
                <div className="ml-4 flex flex-col space-y-2">
                    <Link href={"/fuvar"}>Rólunk</Link>
                    <Link href={"/fuvar"}>Hírek</Link>
                    <Link href={"/fuvar"}>Szolgáltatások</Link>
                    <Link href={"/fuvar"}>Járműpark</Link>
                    <Link href={"/fuvar"}>Karrier</Link>
                    <Link href={"/fuvar"}>Kapcsolat</Link>
                    <Link href={"/fuvar"}>Pályázatok</Link>
                </div>
                <div className="bg-red-600 mt-2">
                    <Link href={"/fuvar"}>
                    <button className=" py-3 rounded-md pl-4">
                        Jelentkezz
                    </button>
                    </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
