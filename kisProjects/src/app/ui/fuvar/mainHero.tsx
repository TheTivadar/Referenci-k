import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainHero = () => {
  return (
    <div className='w-full lg:max-w-7xl flex flex-col sm:flex-row mx-auto pt-10 md:pt-20'>
        <div className='flex-1 m-4 md:m-0'>
            <Image src={"/barbershop.jpg"} alt="image" width={400} height={400} className='object-fill w-full h-full'></Image>
        </div>
        <div className='flex-1 flex flex-col justify-center md:pl-10  m-4 md:m-0'>
            <h1 className='text-white text-3xl md:text-5xl font-bold'>Innovatív logisztikai szolgáltatások</h1>
            <p className='text-white text-md pt-10 max-w-lg'>Társaságunk megalapítása óta nem titkolt célja, hogy Partnerei számára olyan egyedi és innovatív logisztikai megoldásokat kínáljon a lehető legmagasabb minőségi színvonal mellett, mellyel versenyelőnyhöz juttatja őket.</p>
            <div className="ml-6 pr-2 pt-4 flex justify-end">
                <Link href="/jelentkezes">
                    <button
                    className="bg-red-600 pr-8 pl-10 lg:pl-16 py-2 font-bold hover:bg-red-800"
                    style={{ clipPath: 'polygon(25% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                    >
                    Nézd meg videóink
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MainHero