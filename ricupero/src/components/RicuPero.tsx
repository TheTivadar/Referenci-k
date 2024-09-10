import React, { useEffect, useState } from 'react';

const RicuPero: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[150px] md:h-[250px] overflow-hidden bg-center bg-cover bg-fixed"
      style={{
        backgroundColor: 'yellow',
        backgroundImage: `url('/RoadConstr.jpg')`, // Kép URL
        backgroundPosition: `center md:${scrollY * 0.5}px ${scrollY * 1}px`, 
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center p-4 bg-black bg-opacity-50">
        <div className="text-white">
          <h1 className="text-3xl lg:text-7xl font-bold mb-4 ">Ricupero</h1>
        </div>
      </div>
    </div>
  );
};

export default RicuPero;
