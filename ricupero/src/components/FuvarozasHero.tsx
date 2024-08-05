import React from 'react'
import TopButton from './Buttons/TopButton'

const FuvarozasHero = () => {
  return (
    <div>
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden bg-black">
    <img 
        alt="Konténerek"
        src="/cm.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
    />
    <div className="absolute inset-0 flex items-center justify-center md:pl-10">
        <div className="text-center">
            <h1 className="text-3xl lg:text-8xl font-extrabold text-white">
                Fuvarozás
            </h1>
            <p className="pt-12 text-md sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-white">
                Megbizható társ a fuvarozásban!
            </p>
            <div className="pt-10">
                <TopButton>Böngéssz szolgáltatásink Között</TopButton>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default FuvarozasHero