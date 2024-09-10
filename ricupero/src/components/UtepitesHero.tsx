import React from 'react'
import TopButton from './Buttons/TopButton'
import Image from 'next/image'

const UtepitesHero = () => {
  return (
    <div>
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-black">
    <Image 
        alt="Konténerek"
        src="/RoadConstr.jpg"
        width={1400}
        height={600}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
    />
    <div className="absolute inset-0 flex items-center justify-center md:pl-10">
        <div className="text-center">
            <h1 className="text-5xl md:text-8xl font-extrabold text-white pt-10 md:pt-0">
            Útépítés
            </h1>
            <p className="pt-6 lg:pt-12 text-md sm:text-2xl md:text-4xl font-semibold text-white">
            Megbízható társ a fuvarozásban!
            </p>
            <div className="pt-10">
                <TopButton>Fedezze fel szolgáltatásainkat!</TopButton>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default UtepitesHero