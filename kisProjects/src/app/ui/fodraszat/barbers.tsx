import React from 'react'
import BarberCard from './barberCard'

const barber =  [
    {
        img: '/dark.jpg',
        title: 'JERRY BANKS',
      },
      {
        img: '/dark.jpg',
        title: 'JERRY BANKS',
      },
      {
        img: '/dark.jpg',
        title: 'JERRY BANKS',
      },
      {
        img: '/dark.jpg',
        title: 'JERRY BANKS',
      },
      {
        img: '/dark.jpg',
        title: 'JERRY BANKS',
      },
      {
        img: '/dark.jpg',
        title: 'JERRY BANKS',
      },

]

const Barbers = () => {
  return (
    <div className='flex flex-col py-20'>
        <h2 className='text-center text-yellow-400 text-xl md:text-2xl font-medium pb-4'>Ismerje meg a családot</h2>
        <h1 className='text-center text-3xl md:text-6xl pb-14 font-bold text-black '>Barberjeink</h1>
        <div className='justify-center items-center flex'>
            <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 '>
            {barber.map((barber,index ) =>(
                <BarberCard
                    key={index}
                    img ={barber.img}
                    title ={barber.title} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Barbers