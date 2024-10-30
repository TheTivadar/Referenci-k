"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'



const FodraszDin = () => {
    const pathname = usePathname();

    const getPageTitle = (pathname: string) => {
        switch (pathname) {
          case '/fodraszat/szolgaltatas':
            return 'Szolgáltatások';
          case '/fodraszat/rolunk':
            return 'Rólunk';
          case '/fodraszat/blog':
            return 'Blog';
          case '/fodraszat/kapcsolat':
            return 'Kapcsolat'
          default:
            return 'Page Not Found';
        }
      }
  return (
    <div>
        <div className='h-[400px] w-full relative'>
            <Image 
            src={"/dark2.jpg"}
            alt='hatter'
            width={1920}
            height={1080}
            className='h-full w-full object-cover'
            />
             <div className="absolute inset-0 items-center justify-center flex flex-col pb-10">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold pt-8">{getPageTitle(pathname)}</h1>
            </div>
        </div>
        
    </div>
  )
}

export default FodraszDin