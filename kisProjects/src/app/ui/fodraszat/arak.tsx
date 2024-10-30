import Image from 'next/image'
import React from 'react'

const Arak = () => {
  return (
    <div className='bg-stone-800 text-white pb-14 pt-6 flex flex-col justify-center items-center'>
        <div className='grid md:grid-cols-2 '>
            <div className='p-10 md:p-16'>
                <div className='flex flex-row items-center place-content-center justify-start '>
                    <h1 className='text-start text-3xl font-bold pr-4'>Hajvágás</h1>
                    <div className='bg-yellow-400 h-[1px] w-2/5 '/>
                    <p className='text-3xl font-bold pl-4'>5000Ft</p>
                </div>
                <p className='text-start justify-center pt-4 text-lg xl:w-3/5'>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.</p>
            </div>
            <div className='p-10 md:p-16'>
                <div className='flex flex-row items-center place-content-center justify-start '>
                    <h1 className='text-start text-3xl font-bold pr-4'>Hajvágás</h1>
                    <div className='bg-yellow-400 h-[1px] w-2/5 '/>
                    <p className='text-3xl font-bold pl-4'>5000Ft</p>
                </div>
                <p className='text-start justify-center pt-4 text-lg xl:w-3/5'>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.</p>
            </div>
            <div className='p-10 md:p-16'>
                <div className='flex flex-row items-center place-content-center justify-start '>
                    <h1 className='text-start text-3xl font-bold pr-4'>Hajvágás</h1>
                    <div className='bg-yellow-400 h-[1px] w-2/5 '/>
                    <p className='text-3xl font-bold pl-4'>5000Ft</p>
                </div>
                <p className='text-start justify-center pt-4 text-lg xl:w-3/5'>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.</p>
            </div>
            <div className='p-10 md:p-16'>
                <div className='flex flex-row items-center place-content-center justify-start '>
                    <h1 className='text-start text-3xl font-bold pr-4'>Hajvágás</h1>
                    <div className='bg-yellow-400 h-[1px] w-2/5 '/>
                    <p className='text-3xl font-bold pl-4'>5000Ft</p>
                </div>
                <p className='text-start justify-center pt-4 text-lg xl:w-3/5'>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row m-8 bg-sarga'>
            <div className='flex flex-col flex-[1.5] py-10 md:py-32 text-black pl-20'>
                <h1 className='font-extrabold text-2xl pb-2'>A hét terméke</h1>
                <h1 className='font-bold text-5xl pb-4'>25% kedvezmény</h1>
                <p className='text-lg font-medium w-5/6 pb-4'>Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et 
                leo in vulputate. Sed eleifend lacus eu sapien sagittis imperdiet.</p>
                <div className="p-1 inline-block">
                    <button className='px-4 py-2 bg-black text-white font-bold rounded-sm '>
                        Vedd meg most
                    </button>
                </div>
            </div>
            <div className='flex flex-1 '> 
                <Image
                src={"/barbershop.jpg"}
                alt='kep'
                width={1500}
                height={1000}
                className='object-cover h-full w-full' 
                />
            </div>
        </div>
    </div>
  )
}

export default Arak