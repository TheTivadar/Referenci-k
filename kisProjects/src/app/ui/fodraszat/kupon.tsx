import React from 'react'

const Kupon = () => {
  return (
    <div className='bg-orange-300 py-20'>
        <div className='flex flex-row'>
        <div className='flex flex-[0.5]'></div>
        <div className="flex flex-[1.5] flex-col pb-4 items-start">
            <h1 className='text-3xl md:text-7xl font-semibold pb-8'>25% KEDVEZMÉNY</h1>
            <p className='max-w-3xl text:md md:text-lg pb-6'>Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis impe.</p>
            <button className='p-4 rounded-lg bg-black text-yellow-400'>Foglalj most!</button>
        </div>
        <div className='flex flex-1'></div>
        </div>
    </div>
  )
}

export default Kupon