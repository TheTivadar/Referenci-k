"use client"
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";




const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const path = window.location.pathname;
    if (path.includes("/kontenerek")) {
      setActiveItem('kontenerek');
    } else if (path.includes("/demasz")) {
      setActiveItem('demasz');
    } else if (path.includes("/kapcsolat")) {
      setActiveItem('kapcsolat');
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (
    <div className="">
      <header className="fixed inset-x-0 top-0 z-50  md:shadow-md md:backdrop-blur-md">
        <nav className="flex items-center bg-white md:bg-opacity-90 justify-between py-2 lg:py-4 lg:px-8" aria-label="Global">
        <div className="flex md:flex-1 items-center  ">
            <div className="absolute top-0 -left-4">
              <Link href={"/"}>
                <Image
                  width={100}
                  height={100}
                  src="/logoric.png"
                  alt="Ricupero Logo"
                  className="h-20 md:h-24 lg:h-32 w-auto"
                  style={{ marginTop: '0px' }} // Adjust margin for the hang-down effect
                />
              </Link>
            </div>
            <div className="flex px-24 md:px-16 lg:px-24 text-white">asd</div>
          </div>
          <div className="md:hidden z-50 h-8 w-8 items-center justify-start mr-2 overflow-hidden grid place-content-center">
            <AnimatedHamburgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          <div className="hidden md:flex items-center md:gap-x-6 lg:gap-x-12">
            <Menu setActive={setActive}>
              <div className="hidden lg:block">
              <MenuItem setActive={setActive} active={active} item="Szolgáltatásaink">
                  <div className=" leading-6 grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                      title="Géppark"
                      href="/gepiFoldmunka"
                      src="/gepparkKicsi.png"
                      description="Összes gép egy helyen."
                    />
                    <ProductItem
                      title="Fuvarozás"
                      href="/fuvarozas"
                      src="/iveco4x8.jpg"
                      description="Szállítás, Bontás, Fuvarozás."
                    />
                    <ProductItem
                      title="Útépítés"
                      href="/utepites"
                      src="/aszfalt.jpg"
                      description="Aszfaltozás, Tereprendezés, ásás,térkövezés"
                    />
                    <ProductItem
                      title="Útseprő-locsoló"
                      href="/utseprolocsolo"
                      src="/locsolo.jpg"
                      description="Locsoló-seprő bérlés"
                    />
                  </div>
                </MenuItem>
              </div>
              <div className="block lg:hidden py-4">
              <MenuItem setActive={setActive} active={active} item="Szolgáltatásaink">
                  <div className="flex flex-col space-y-4 text-sm text-center">
                    <HoveredLink href="/gepiFoldmunka">Géppark</HoveredLink>
                    <HoveredLink href="/fuvarozas">Fuvarozás</HoveredLink>
                    <HoveredLink href="/utepites">Útépités</HoveredLink>
                    <HoveredLink href="/utseprolocsolo">Útseprő-locsoló</HoveredLink>
                  </div>
                </MenuItem>
              </div>
            </Menu>
            <Link
              href="/kontenerek"
              onClick={() => handleItemClick('kontenerek')}
              className={` hover-fast text-lg font-semibold leading-6 ${activeItem === 'kontenerek' ? 'text-blue-500' : 'text-gray-900'}`}
            >
              Konténerek
            </Link>
            <Link
              href="/demasz"
              onClick={() => handleItemClick('demasz')}
              className={`hover-fast text-lg font-semibold leading-6 ${activeItem === 'demasz' ? 'text-blue-500' : 'text-gray-900'}`}
            >
              Démász
            </Link>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <Link
              href="/kapcsolat"
              onClick={() => handleItemClick('kapcsolat')}
              className={` text-lg font-semibold leading-6 ${activeItem === 'kapcsolat' ? 'text-white' : 'text-gray-900'}`}
            >
              <button
                type='submit'
                className="bg-orange-500 pr-4 pl-6 lg:pr-8 lg:pl-10 py-2 font-bold hover:bg-orange-400 text-black hover:text-white"
                style={{ clipPath: 'polygon(7% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              >
                Lépj kapcsolatba!
              </button>
            </Link>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-40  overflow-hidden">
              <div className="fixed inset-y-0 right-0 z-40 w-full sm:w-1/2 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-center">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <Image className="flex justify-center items-center h-14 w-auto rounded-lg" width={50} height={50} src="/riclogo.jpg" alt="Logo" />
                  </Link>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                    <Link
                      href="/gepiFoldmunka"
                      onClick={() => handleItemClick('gepiFoldmunka')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'gepiFoldmunka' ? 'text-orange-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Géppark
                    </Link>
                    <Link
                      href="/fuvarozas"
                      onClick={() => handleItemClick('fuvarozas')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'gepiFoldmunka' ? 'text-orange-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Fuvarozás
                    </Link>
                    <Link
                      href="/utepites"
                      onClick={() => handleItemClick('utepites')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'gepiFoldmunka' ? 'text-orange-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Útépités
                    </Link>
                    <Link
                      href="/utseprolocsolo"
                      onClick={() => handleItemClick('utseprolocsolo')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'gepiFoldmunka' ? 'text-orange-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Útseprő-locsoló
                    </Link>
                    <Link
                      href="/kontenerek"
                      onClick={() => handleItemClick('kontenerek')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'kontenerek' ? 'text-orange-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Konténerek
                    </Link>
                    <Link
                      href="/demasz"
                      onClick={() => handleItemClick('demasz')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'demasz' ? 'text-orange-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Démász
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      href="/kapcsolat"
                      onClick={() => handleItemClick('kapcsolat')}
                      className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${activeItem === 'kapcsolat' ? 'text-orange-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Lépj kapcsolatba!
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

const AnimatedHamburgerButton = ({ isMenuOpen, toggleMenu }: any) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        onClick={toggleMenu}
        className="relative h-10 w-8 rounded-full bg-transparent"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-8 bg-gray-900"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-8 bg-gray-900"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-4 bg-gray-900"
          style={{ x: "-50%", y: "50%", bottom: "35%", left: "50%", }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};


export default Navbar;
