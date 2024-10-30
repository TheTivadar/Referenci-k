import Image from 'next/image'
import React from 'react'

const KapcsolatHero = () => {
  return (
    <div>
        <div className="relative h-[400px] w-full bg-black">
            <Image
                src={"/indoor.jpg"}
                alt="hatter"
                width={1000}
                height={500}
                className="object-cover w-full h-full opacity-30"
            />
            <div className="absolute inset-0 items-center justify-center flex flex-col pb-10">
                <Image src={"/astronaut.png"} alt='logo' width={70} height={70}  className='pb-2'/>
                <h1 className="text-white text-5xl font-bold pb-4">Kapcsolat</h1>
                <p className="text-white text-2xl font-bold">Lépj velünk kapcsolatba!</p>
            </div>
        </div>

    </div>
  )
}

export default KapcsolatHero