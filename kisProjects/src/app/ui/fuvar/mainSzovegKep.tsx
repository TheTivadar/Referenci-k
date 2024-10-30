import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FuvarMainSzovegKep = () => {
    return (
        <div className='w-full lg:max-w-5xl flex flex-col sm:flex-row mx-auto md:pt-20'>
            <div className='flex-1 pb-6 md:pb-0 m-4 md:m-0'>
                <Image src={"/barbershop.jpg"} alt="image" width={400} height={400} className='object-fill w-full h-full'></Image>
            </div>
            <div className='flex-1 flex flex-col justify-center m-4 md:m-0 md:ml-10'>
                <h1 className='text-white text-5xl font-bold'>Víziónk</h1>
                <p className='text-white text-md pt-10 max-w-lg'>Logisztikai kalkulációinknál fenntartható, megtérülő és környezettudatos – “zöld logisztikai” – megoldásokat alkalmazzuk. Nagy figyelmet fordítunk az informatikai fejlesztéseinkre is, így biztosítva Partnereink számára a pontos és hatékony riportrendszereket.</p>
                <div className="ml-6 pr-2 pt-4 flex justify-end">
                    <Link href="/jelentkezes">
                        <button
                        className="bg-red-600 pr-8 pl-10 lg:pl-16 py-2 font-bold hover:bg-red-800"
                        style={{ clipPath: 'polygon(25% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                        >
                        Tudj meg többet
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      )
}

export default FuvarMainSzovegKep