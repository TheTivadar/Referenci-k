import Image from 'next/image'
import React from 'react'
import { RxScissors } from "react-icons/rx";
import { TbMoustache } from "react-icons/tb";

const FodraszHero = () => {
  return (
    <div>
        <div className='h-[600px] w-full relative'>
            <Image 
            src={"/dark2.jpg"}
            alt='hatter'
            width={1920}
            height={1080}
            className='h-full w-full object-cover'
            />
             <div className="absolute inset-0 items-center justify-center flex flex-col pb-10">
                <RxScissors className='size-24 rotate-90 text-yellow-400'/>
                <h1 className="text-white text-6xl lg:text-8xl font-bold pt-8">BarberShop</h1>
                <TbMoustache className='size-14 text-yellow-400'/>
                <p className="text-white text-2xl font-semibold">Borotválkozás és Vágás</p>
            </div>
        </div>
        
    </div>
  )
}

export default FodraszHero