import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const KapcsolatFodrasz = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <h1 className='text-center text-3xl md:text-5xl font-bold pt-10 md:pt-20'>Lépj Kapcsolatba!</h1>
            <p className='text-center text-md md:text-lg font-medium pt-6'>Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec 
            nisl placerat, tempus erat a, condimentum metusurabitur nulla nisi.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-16 pt-20 mx-auto gap-x-16'>
                <div className='flex flex-col items-center'>
                    <CiLocationOn className='text-5xl text-yellow-400' />
                    <h1 className='text-xl font-semibold pt-4'>Address</h1>
                    <p className='text-lg font-medium'>304 North Cardinal St.</p> 
                    <p className='text-lg font-medium'>Dorchester Center, MA 02124</p>
                </div>
                <div className='flex flex-col items-center'>
                    <CiLocationOn className='text-5xl text-yellow-400' />
                    <h1 className='text-xl font-semibold pt-4'>Address</h1>
                    <p className='text-lg font-medium'>304 North Cardinal St.</p> 
                    <p className='text-lg font-medium'>Dorchester Center, MA 02124</p>
                </div>
                <div className='flex flex-col items-center'>
                    <CiLocationOn className='text-5xl text-yellow-400' />
                    <h1 className='text-xl font-semibold pt-4'>Address</h1>
                    <p className='text-lg font-medium'>304 North Cardinal St.</p> 
                    <p className='text-lg font-medium'>Dorchester Center, MA 02124</p>
                </div>
                <div className='flex flex-col items-center'>
                    <CiLocationOn className='text-5xl text-yellow-400' />
                    <h1 className='text-xl font-semibold pt-4'>Address</h1>
                    <p className='text-lg font-medium'>304 North Cardinal St.</p> 
                    <p className='text-lg font-medium'>Dorchester Center, MA 02124</p>
                </div>
            </div>
            <div className='bg-yellow-400 w-3/4 mx-auto h-[3px]'/>
            <h1 className='justify-center text-lg md:text-2xl flex py-10'>2024, Gatium. All rights reserved</h1>
        </div>
    </div>
  )
}

export default KapcsolatFodrasz