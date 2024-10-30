import React from 'react';

const Links = [
  'Home',
  'Vásárlás',
  'Rólunk',
  'Kapcsolat',
];

const Help = [
  'Fizetési lehetőségek',
  'Visszatérítés',
  'Biztonság',
];

const Footer = () => {
  return (
    <div className='pt-20 bg-gray-100'>
      <div className="flex flex-row justify-evenly">
        <div className='flex flex-col justify-evenly'>
          <h1 className='font-bold text-lg'>Cégnév</h1>
          <p className='font-bold text-lg'>Helyszín</p>
        </div>

        {/* Linkek */}
        <div>
          <h2 className='pb-4 font-semibold text-gray-600'>Hasznos Linkek</h2>
          <ul >
            {Links.map((link, index) => (
              <li className='pb-2 font-bold text-lg' key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='pb-4 font-semibold text-gray-600'>Segítség</h2>
          <ul>
            {Help.map((helpItem, index) => (
              <li className='pb-2 font-bold text-lg' key={index}>{helpItem}</li>
            ))}
          </ul>
        </div>
        <div>
            <h1 className='pb-4 font-semibold text-gray-600'>Hírlevél</h1>
            <div>
                <input className='p-1 border border-black rounded lg' type="text" />
                <button className='p-1 bg-gray-300 rounded-lg'>submit</button>
            </div>
        </div>
      </div>
      <div className='bg-gray-600 h-px w-4/5 mx-auto'></div>
      <h1 className='justify-center flex py-4'>2024, Gatium. All rights reserved</h1>
    </div>
  );
};

export default Footer;
