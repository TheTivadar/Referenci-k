import React from 'react'
import TopButton from './Buttons/TopButton';


const HeroMain = () => {
  return (
    <div className="pt-20">
      <div className="relative bg-gray-900 h-[600px] w-full overflow-hidden">
    <img 
      alt=""
      src="/m1.jpg"
      className="absolute inset-0 z-0 h-full w-full object-cover md:object-center opacity-35"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-start space-y-16">
        <div className="pl-16"> 
          <h1 className="text-white text-5xl font-extrabold">Szilárd Alapok,<br/>
          Biztonságos Utak. <br/> {''}<br/>{''}</h1>
        </div>
        <div>
          <p className="text-white font-semibold pb-8">Kiváló minőségű útépítési szolgáltatások magánembereknek és <br/>vállalkozásoknak egyaránt. Tartós és megbízható megoldásaink garantálják az <br/>Ön biztonságát és elégedettségét. <br/> {''}<br/>{''}</p>
        </div>
        <div>
          <TopButton>Ajánlat kérése!</TopButton>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  );
};

export default HeroMain;
