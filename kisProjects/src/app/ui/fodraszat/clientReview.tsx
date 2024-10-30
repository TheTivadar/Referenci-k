import Image from 'next/image'
import React from 'react'

const ClientReview = () => {
  return (
    <div className='py-20'>
        <div className="flex flex-col items-center pb-20">
            <h2 className='text-4xl text-yellow-400 text-center'>Mit mondanak rólunk?</h2>
            <h1 className='text-6xl font-bold pt-4 text-center'>Ügyfeleink vélemyénye</h1>
        </div>
        <div className="flex flex-row justify-evenly ">
            <div className='flex flex-col place-items-center'>
                <Image 
                    src={"/astronaut.png"}
                    alt='logo'
                    width={100}
                    height={100}
                    className='roundend-full object-cover pb-8' />
                <p className='text-center max-w-md pb-8 font-medium' >Vestibulum commodo sapien non elit 
                    porttitor, vitae volutpat nibh mollis. Nulla 
                    porta risus id neque. </p>
                <h1 className='text-2xl text-yellow-500 font-semibold'>GLEN SPARKLE, MIAMI</h1>
            </div>
            <div className='flex flex-col place-items-center'>
                <Image 
                    src={"/astronaut.png"}
                    alt='logo'
                    width={100}
                    height={100}
                    className='roundend-full object-cover pb-8' />
                <p className='text-center max-w-md pb-8 font-medium'>Vestibulum commodo sapien non elit 
                    porttitor, vitae volutpat nibh mollis. Nulla 
                    porta risus id neque. </p>
                <h1 className='text-2xl text-yellow-500 font-semibold'>GLEN SPARKLE, MIAMI</h1>
            </div>
            <div className='flex flex-col place-items-center'>
                <Image 
                    src={"/astronaut.png"}
                    alt='logo'
                    width={100}
                    height={100}
                    className='roundend-full object-cover pb-8' />
                <p className='text-center max-w-md pb-8 font-medium'>Vestibulum commodo sapien non elit 
                    porttitor, vitae volutpat nibh mollis. Nulla 
                    porta risus id neque. </p>
                <h1 className='text-2xl text-yellow-500 font-semibold'>GLEN SPARKLE, MIAMI</h1>
            </div>
        </div>
    </div>
  )
}

export default ClientReview