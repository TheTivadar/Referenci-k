import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className='py-20 md:py-2 bg-stone-900'>
        <div className='flex flex-col sm:flex-row py-10 md:py-32 text-white justify-evenly gap-4'>
            {/* Left Column */}
            <div className='flex flex-1 flex-col justify-center items-center'>
                <h1 className='text-center text-4xl font-bold'>Márkák amikkel dolgozunk</h1>
                <p className='text-center  pt-4'>Vestibulum commodo sapien non elit 
                porttitor, vitae volutpat nibh mollis. Nulla 
                porta risus id neque. </p>
            </div>
            <div className='w-[3px] hidden sm:block bg-yellow-400 self-stretch'/>
            <div className='grid grid-cols-3 flex-1 place-items-center gap-1 md:gap-4'>
                <Image 
                    src={"/indoor.jpg"}
                    alt="kep"
                    width={300}
                    height={150}
                    className=''/>
                <Image 
                    src={"/indoor.jpg"}
                    alt="kep"
                    width={300}
                    height={150}
                    className=''/>
                <Image 
                    src={"/indoor.jpg"}
                    alt="kep"
                    width={300}
                    height={150}
                    className=''/>
                <Image 
                    src={"/indoor.jpg"}
                    alt="kep"
                    width={300}
                    height={150}
                    className=''/>
                <Image 
                    src={"/indoor.jpg"}
                    alt="kep"
                    width={300}
                    height={150}
                    className=''/>
                <Image 
                    src={"/indoor.jpg"}
                    alt="kep"
                    width={300}
                    height={150}
                    className=''/>
            </div>
        </div>
    </div>
  )
}

export default Brands
