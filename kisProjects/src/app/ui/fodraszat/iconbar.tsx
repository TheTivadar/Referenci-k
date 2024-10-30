import React from 'react'
import { BsScissors } from "react-icons/bs";
import { GiRazor } from "react-icons/gi";
import { PiOfficeChairBold } from "react-icons/pi";

const IconBar = () => {
  return (
    <div className='bg-stone-900 py-16'>
        <div className='flex flex-row justify-evenly'>
            <div className='flex flex-col justify-center items-center text-yellow-400'>
                <BsScissors className=' text-center text-4xl md:text-7xl mb-4'/>
                <h1 className='text-center text-4xl md:text-7xl font-bold mb-2'>4500</h1>
                <p className='text-center text-xl md:text-3xl font-medium text-white'>Hajvágás</p>
            </div>
            <div className='flex flex-col justify-center items-center text-yellow-400'>
                <GiRazor className=' text-center text-4xl md:text-7xl mb-4'/>
                <h1 className='text-center text-4xl md:text-7xl font-bold mb-2'>2000</h1>
                <p className='text-center text-xl md:text-3xl font-medium text-white'>Borotválás</p>
            </div>
            <div className='flex flex-col justify-center items-center text-yellow-400'>
                <PiOfficeChairBold className=' text-center text-4xl md:text-7xl mb-4'/>
                <h1 className='text-center text-4xl md:text-7xl font-bold mb-2'>10</h1>
                <p className='text-center text-xl md:text-3xl font-medium text-white'>Szék</p>
            </div>
        </div>
    </div>
  )
}

export default IconBar