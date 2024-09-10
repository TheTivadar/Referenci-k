import React from 'react'
import TopButton from './Buttons/TopButton'
import Image from 'next/image'

const LocsoloHero = () => {
  return (
    <div>
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-black">
    <Image
        alt="Konténerek"
        src="/locsolo.jpg"
        width={1000}
        height={600}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
    />
    <div className="absolute inset-0 flex items-center justify-center md:pl-10">
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white pt-20">
            Útseprő-locsoló autók bérlése
            </h1>
            <div className="pt-10">
                <TopButton>Árajánlat kérése!
                </TopButton>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default LocsoloHero