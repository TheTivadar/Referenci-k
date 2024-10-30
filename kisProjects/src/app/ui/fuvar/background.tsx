"use client"
import React, { useEffect, useState } from 'react';

const GlowingEllipses = () => {
    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Ellipszis alakú, világító alakzatok */}
      <div
        className="absolute w-[1400px] h-[1080px] bg-sotetszurke opacity-100 z-0"
        style={{
          top: `calc(4% + ${scrollY * 0.1}px)`,
          left: '0%',
          clipPath: 'polygon(50% 0%, 65% 5%, 75% 40%,90% 25%,95% 35%, 80% 90%,70% 95%, 25% 100%, 0% 60%, 15% 50%, 30% 20%)',
        }}
      />
      <div
        className="absolute w-[1900px] h-[1080px] bg-kozepszurke opacity-100 z-10"
        style={{
          top: `calc(13% + ${scrollY * 0.5}px)`,
          left: '0%',
          clipPath: 'polygon(50% 0%, 65% 5%, 75% 40%,90% 25%,95% 35%, 80% 90%,70% 95%, 25% 100%, 0% 60%, 15% 20%)',
        }}
      />
      <div
        className="absolute  w-[2300px] h-[1080px] bg-vilagosszurke opacity-100 z-20"
        style={{
            top: `calc(20% + ${scrollY * 0.7}px)`,
          left: '10%',
          clipPath: 'polygon(50% 0%, 65% 5%, 75% 40%,90% 25%,95% 35%, 80% 90%,70% 95%, 25% 100%, 0% 60%, 15% 20%)',
        }}
      />{/*
      <div
        className="absolute w-80 h-80 bg-purple-500 opacity-70 rounded-full filter blur-3xl"
        style={{
          bottom: '15%',
          left: '30%',
          boxShadow: '0 0 120px 60px rgba(128, 0, 128, 0.5)',
        }}
      />
      <div
        className="absolute w-64 h-40 bg-green-500 opacity-60 rounded-full filter blur-3xl"
        style={{
          top: '80%',
          right: '35%',
          boxShadow: '0 0 120px 60px rgba(50, 205, 50, 0.5)',
        }}
      />*/}
    </div>
  );
};

export default GlowingEllipses;
