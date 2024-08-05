import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
        <nav className="flex items-center justify-between p-4 md:p-6 lg:px-8" aria-label="Global">
          <div className="flex md:flex-1 items-center">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
            </a>
            <a href="/" className="px-4 text-2xl font-semibold leading-6 text-gray-900">RicuPero</a>
          </div>
          <div className="flex md:hidden">
            <button 
              type="button" 
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" 
              onClick={toggleMenu}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center md:gap-x-6 lg:gap-x-12">
            <Menu setActive={setActive}>
              <div className="hidden lg:block">
                <MenuItem setActive={setActive} active={active} item="Gépi földmunka">
                  <div className=" leading-6 grid grid-cols-2 gap-10 p-4">
                    <ProductItem
                      title="gepiFoldmunka"
                      href="/gepiFoldmunka"
                      src="/munkagep.jpg"
                      description="Prepare for tech interviews like never before."
                    />
                    <ProductItem
                      title="fuvarozas"
                      href="/fuvarozas"
                      src="/munkagep.jpg"
                      description="Production ready Tailwind css components for your next project"
                    />
                    <ProductItem
                      title="utepites"
                      href="/utepites"
                      src="/munkagep.jpg"
                      description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                    <ProductItem
                      title="utseprolocsolo"
                      href="/utseprolocsolo"
                      src="/munkagep.jpg"
                      description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                  </div>
                </MenuItem>
              </div>
              <div className="block lg:hidden py-4">
                <MenuItem setActive={setActive} active={active} item="Gépi földmunka">
                  <div className="flex flex-col space-y-4 text-sm text-center">
                    <HoveredLink href="/hobby">Hobby</HoveredLink>
                    <HoveredLink href="/individual">Individual</HoveredLink>
                    <HoveredLink href="/team">Team</HoveredLink>
                    <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                  </div>
                </MenuItem>
              </div>
            </Menu>
            <a 
              href="/kontenerek" 
              onClick={() => handleItemClick('kontenerek')}
              className={`text-lg font-semibold leading-6 ${activeItem === 'kontenerek' ? 'text-blue-500' : 'text-gray-900'}`}
            >
              Konténerek
            </a>
            <a 
              href="/demasz" 
              onClick={() => handleItemClick('demasz')}
              className={`text-lg font-semibold leading-6 ${activeItem === 'demasz' ? 'text-blue-500' : 'text-gray-900'}`}
            >
              Démász
            </a>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <a 
              href="/kapcsolat"
              onClick={() => handleItemClick('kapcsolat')}
              className={`text-lg font-semibold leading-6 ${activeItem === 'kapcsolat' ? 'text-blue-500' : 'text-gray-900'}`}
            >
              Lépj kapcsolatba!<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
                </a>
                <a href="/" className="px-4 text-2xl font-semibold leading-6 text-gray-900">RicuPero</a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a 
                      href="/gepiFoldmunka" 
                      onClick={() => handleItemClick('gepiFoldmunka')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'gepiFoldmunka' ? 'text-blue-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Gépi földmunka
                    </a>
                    <a 
                      href="/kontenerek" 
                      onClick={() => handleItemClick('kontenerek')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'kontenerek' ? 'text-blue-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Konténerek
                    </a>
                    <a 
                      href="/demasz" 
                      onClick={() => handleItemClick('demasz')}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeItem === 'demasz' ? 'text-blue-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Démász
                    </a>
                  </div>
                  <div className="py-6">
                    <a 
                      href="/kapcsolat" 
                      onClick={() => handleItemClick('kapcsolat')}
                      className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${activeItem === 'kapcsolat' ? 'text-blue-500' : 'text-gray-900'} hover:bg-gray-50 text-center`}
                    >
                      Lépj kapcsolatba!
                    </a>
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

export default Navbar;
