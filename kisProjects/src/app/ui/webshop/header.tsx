import React from 'react';

export default function MyComponent() {
  return (
    <div className="relative w-full h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/indoor.jpg)' }}
      />
      
      <div className="absolute top-20 md:top-32 lg:top-40 right-32 md:w-1/3  bg-blue-50  p-8 rounded-lg flex flex-col justify-center">
        <p className='mb-2 font-semibold text-2xl'>New arrival</p>
        <h1 className='mb-4 font-extrabold text-4xl text-cyan-700 '>Discover Our<br/>New Collection</h1>
        <p className='w-4/5 mb-4'>Embrace the change with our curated selection of arrivals, meticulously crafted for modern lives.</p>
        <button className="bg-blue-500 text-white p-2 rounded w-1/2">Buy Now</button>
      </div>
    </div>
  );
}
