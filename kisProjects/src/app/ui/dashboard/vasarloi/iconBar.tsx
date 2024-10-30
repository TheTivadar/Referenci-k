import React from 'react'
import { FaTrophy  } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GrReturn } from "react-icons/gr";

const IconBar = () => {
  return (
    <div className='py-20 bg-orange-50'>
        <div className="flex flex-col md:flex-row justify-evenly">
            <div className="flex flex-row items-center">
                <FaTrophy  className='mr-4 text-3xl'/>
                <div>
                    <h1 className='text-2xl font-bold'>Minőség</h1>
                    <p className='text-xl font-semibold'>Prémium anyaghasználat</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <GrReturn  className='mr-4 text-3xl font-bold'/>
                <div>
                    <h1 className='text-2xl font-extrabold'>Garanciális</h1>
                    <p className='text-xl font-semibold'>Több mint 2 évig</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <FaShippingFast  className='mr-4 text-3xl'/>
                <div>
                    <h1 className='text-2xl font-bold'>Ingyenes szállítás</h1>
                    <p className='text-xl font-semibold'>20000 ft felett</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <BiSupport   className='mr-4 text-3xl font-extrabold'/>
                <div>
                    <h1 className='text-2xl font-bold'>24/7 Segítség</h1>
                    <p className='text-xl font-semibold'>A nap bármely pontján</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IconBar