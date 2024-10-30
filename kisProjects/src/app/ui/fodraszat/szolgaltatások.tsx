import React from 'react'
import { RxScissors } from "react-icons/rx";
import { GiBeard,GiRazor  } from "react-icons/gi";
import { TbMoustache } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';

const Szolgaltatasok = () => {
  return (
    <div>
        <div className="relative w-full h-[1500px] md:h-[1000px] lg:h-[1000px]  bg-cover bg-center" >
                    <Image 
                        src={"/dark.jpg"}
                        alt='hatter'
                        width={1920}
                        height={1080}
                        className='h-full w-full object-cover'
                        />
        <div className='flex flex-col absolute inset-0 text-white'>
            <div className='flex justify-center text-center flex-col pt-20'>
                <h1 className='text-lg font-semibold text-yellow-400'>Amit nyújtunk!</h1>
                <h1 className='text-4xl font-bold '>Szolgáltatások</h1>
            </div>
            <div className='flex justify-center items-center pt-20'>
                <div className='grid md:grid-cols-2 max-w-6xl gap-6'>
                <div className='border-2 border-yellow-400 p-10 flex items-center flex-col'>
                        <RxScissors className='text-6xl rotate-90 text-yellow-400'/>
                        <h1 className="text-white text-xl font-bold pt-8 text-center">BarberShop</h1>
                        <p className='text-center'>Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.</p>
                    </div>
                    <div className='border-2 border-yellow-400 p-10 flex items-center flex-col'>
                        <GiRazor  className='text-6xl  text-yellow-400'/>
                        <h1 className="text-white text-xl font-bold pt-8  text-center">SHAVES & HAIRCUT</h1>
                        <p className='text-center'>Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.</p>
                    </div>
                    <div className='border-2 border-yellow-400 p-10 flex items-center flex-col'>
                        <GiBeard className='text-6xl  text-yellow-400'/>
                        <h1 className="text-white text-xl font-bold pt-8  text-center">FACIAL & SHAVE</h1>
                        <p className='text-center'>Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.</p>
                    </div>
                    <div className='border-2 border-yellow-400 p-10 flex items-center flex-col'>
                        <TbMoustache className='text-6xl  text-yellow-400'/>
                        <h1 className="text-white text-xl font-bold pt-8  text-center">THE BIG DAY</h1>
                        <p className='text-center'>Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='py-8 flex justify-center'>
                <Link href={"/fodraszat/szolgaltatas"}><button className='py-2 px-4 border-2 border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-400'>Fedezze fel!</button></Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Szolgaltatasok