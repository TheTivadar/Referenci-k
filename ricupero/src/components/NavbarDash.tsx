"use client"
import { useSignOut } from "@/pages/api/signOut";
import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const signOut = useSignOut();

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white md:bg-opacity-80 md:shadow-md md:backdrop-blur-md">
        <nav className="flex items-center justify-between py-3 lg:px-8" aria-label="Global">
          <div className="flex md:flex-1 items-center">
            <Link href="/dashboard/main" className="px-4 text-lg md:text-2xl font-semibold leading-6 text-gray-900 hover-fast">Ricupero</Link>
          </div>
          <div className="md:hidden z-50 h-8 w-8 items-center justify-start mr-2 overflow-hidden grid place-content-center">
          <AnimatedHamburgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-40 bg-white overflow-hidden">
            <div className="fixed inset-y-0 right-0 z-40 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/dashboard/main" className="px-4 text-2xl font-semibold leading-6 text-gray-900">Ricupero</Link>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link 
                      href="/dashboard/main" 
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center`}
                    >
                      Főoldal
                    </Link>
                    <Link 
                      href="/dashboard/geppark" 
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center`}
                    >
                      Géppark
                    </Link>
                    <Link 
                      href="/dashboard/fuvarozas" 
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center`}
                    >
                      Fuvarozás
                    </Link>
                    <Link 
                      href="/dashboard/utepites" 
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center`}
                    >
                      Útépítés
                    </Link>
                    <Link 
                      href="/dashboard/utsepro" 
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center`}
                    >
                      Útseprő-locsoló
                    </Link>
                    <Link 
                      href="/dashboard/kontener" 
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center`}
                    >
                      Konténerek
                    </Link>
                    <Link 
                      href="/dashboard/demasz" 
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center`}
                    >
                      Démász
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link 
                      href="/login" 
                      onClick={signOut}
                      className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center`}
                    >
                      Kijelentkezés
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

const AnimatedHamburgerButton = ({ isMenuOpen, toggleMenu }:any) => {
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
          style={{x: "-50%", y: "50%",bottom: "35%",left: "50%",}}
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
