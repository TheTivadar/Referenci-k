import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Szolgaltatasok = [
    {
        title:"FTl Flotta",
        body:"24t +2t teherbírás",
        src:"/barbershop.jpg"
    },
    {
        title:"FTl Flotta",
        body:"24t +2t teherbírás",
        src:"/barbershop.jpg"
    },
    {
        title:"FTl Flotta",
        body:"24t +2t teherbírás",
        src:"/barbershop.jpg"
    }
]

const FuvarMainJarmuPark = () => {
  return (
    <div className='pt-20'>
        <div className='flex flex-col sm:flex-row sm:justify-start'>
            <h1 className='text-white text-5xl font-bold pr-14'>Járműpark</h1>
            <div className='flex justify-end pt-6 md:pt-0'>
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
        <div className='flex flex-col sm:flex-row gap-10 pt-12 m-4 md:m-0'>
            {Szolgaltatasok.map((item, index) =>{
                return(
                    <div key={index} className='flex flex-col'>
                        <Image
                        src={`${item.src}`}
                        alt='jarmuvek'
                        width={400}
                        height={400}
                        />
                        <h1 className='text-2xl font-semibold pt-1'>{item.title}</h1>
                        <p className='text-lg text-gray-300 font-medium'>{item.body}</p>
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default FuvarMainJarmuPark