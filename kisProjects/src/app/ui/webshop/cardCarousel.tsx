"use client"
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "/indoor.jpg",
  "/indoor.jpg",
  "/indoor.jpg",
  "/indoor.jpg",
  "/indoor.jpg",
  "/indoor.jpg",
  "/indoor.jpg",
];



const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-blue-50">
      <div className='items-center flex flex-col gap-4 pt-4'>
        <h1 className='text-3xl font-bold'>50+ Beautiful rooms inspiration</h1>
        <p className='text-xl font-normal'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className='px-4 py-2 bg-cyan-600 text-white'>Explore More</button>
      </div>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden pt-6 pb-10">
        <div className="flex justify-center items-center relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-10">
            Prev
          </button>
          <div className="flex w-[70%] justify-center overflow-hidden">
            <div className="flex transition-transform duration-500"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 relative">
                  <Image width={400} height={400} src={image} alt={`Slide ${index}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-10">
            Next
          </button>
        </div>
        <div className="absolute flex justify-between items-center top-1/2 transform -translate-y-1/2 w-full px-4 pointer-events-none">
          <div className="w-[20%] h-32 opacity-100 pointer-events-none">
            <Image width={400} height={400} src={images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]} alt="prev" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-[20%] h-32 opacity-100 pointer-events-none">
            <Image width={400} height={400} src={images[(currentIndex + 1) % images.length]} alt="next" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarousel;
