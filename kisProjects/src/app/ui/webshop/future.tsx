import Image from 'next/image'
import React from 'react'

const Future = () => {
  return (
    <div className='py-20'>
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-bold pb-2'>Browse The Range</h1>
            <p className='text-lg text-gray-800 font-medium'>Less is more. Elevate your space with timeless designs built for serenity.</p>
        </div>
        <div className='flex flex-row justify-center gap-x-4 md:gap-x-12 py-10 max-w-7xl mx-auto'>
            <div>
                <div className='w-[115px] h-[175px] sm:w-[150px] sm:h-[225px] lg:w-[300px] lg:h-[450px] bg-white rounded-lg shadow-lg overflow-hidden'>
                        <Image
                            src={"/indoor.jpg"}
                            height={800} 
                            width={300} 
                            alt='dining'
                            className='w-full h-full object-cover'
                        />
                        
                </div>
                <h1 className='flex justify-center py-2 font-semibold text-lg'>dining</h1>
            </div>
            <div>
                <div className='w-[115px] h-[175px] sm:w-[150px] sm:h-[225px] lg:w-[300px] lg:h-[450px] bg-white rounded-lg shadow-lg overflow-hidden'>
                        <Image
                            src={"/indoor.jpg"}
                            height={800} 
                            width={300}  
                            alt='dining'
                            className='w-full h-full object-cover'
                        />
                        
                </div>
                <h1 className='flex justify-center py-2 font-semibold text-lg'>dining</h1>
            </div> <div>
                <div className='w-[115px] h-[175px] sm:w-[150px] sm:h-[225px] lg:w-[300px] lg:h-[450px] bg-white rounded-lg shadow-lg overflow-hidden'>
                        <Image
                            src={"/indoor.jpg"}
                            height={800} 
                            width={300} 
                            alt='dining'
                            className='w-full h-full object-cover'
                        />
                        
                </div>
                <h1 className='flex justify-center py-2 font-semibold text-lg'>dining</h1>
            </div>
        </div>
    </div>
  )
}

export default Future