import React, { useEffect, useState } from 'react'
import TopButton from './Buttons/TopButton'
import Image from 'next/image'


interface KontenerTipus {
  id: string;
  title: string;
  body: string;
  description?: string;
  prop1?: string;
  src?: string;
}

interface Props {
  fuvarozasHero: KontenerTipus[];
}

const FuvarozasHero = ({ fuvarozasHero }: Props) => {
  if (!fuvarozasHero) return null;
  const title1 = fuvarozasHero.find(item => item.id === "1")?.title;
  const title2 = fuvarozasHero.find(item => item.id === "2")?.title;
  const title3 = fuvarozasHero.find(item => item.id === "3")?.title;



  return (
    <div>
      <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-black">
        <Image
          alt="Konténerek"
          src="/fuvar.jpg"
          height={600}
          width={1920}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 flex items-center justify-center md:pl-10">
          <div className="text-center">
            <h1 className="pt-12 md:pt-0 text-5xl md:text-8xl font-extrabold text-white">
              {title1}
            </h1>
            <p className="pt-12 text-2xl md:text-4xl font-semibold text-white">
              {title2}
            </p>
            <div className="pt-10">
              <TopButton>{title3}</TopButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FuvarozasHero