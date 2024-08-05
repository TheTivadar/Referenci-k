import React from 'react'
import TopButton from './Buttons/TopButton'

const ContainerHero = () => {
  return (
    <div>
        <div className="relative h-[500px] lg:h-[700px] w-full overflow-hidden bg-black">
    <img 
        alt="Konténerek"
        src="/cm.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
    />
    <div className="absolute inset-0 flex items-center justify-center md:pl-10">
        <div className="text-center">
            <h1 className="text-3xl lg:text-8xl font-extrabold text-white">
                Praktikus és Sokoldalú Konténerek
            </h1>
            <p className="pt-12 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-white">
                Tökéletes megoldások raktározásra, szállításra és átmeneti tárolásra.
            </p>
            <div className="pt-3">
                <TopButton>Böngéssz Konténereink Között</TopButton>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ContainerHero