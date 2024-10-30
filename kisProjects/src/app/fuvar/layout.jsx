import React from 'react';
import FuvarNavbar from '../ui/fuvar/navbar';
import GlowingEllipses from '../ui/fuvar/background';


const Layout = ({children}) => {
  return (
    <div className="relative text-white bg-black">
      <GlowingEllipses />
      <div className='max-w-7xl mx-auto relative'>
        <FuvarNavbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
