import Image from 'next/image'
import React from 'react'
import TopButton from './Buttons/TopButton'

interface KontenerTipus {
    id: string;
    title?: string;
    body?: string;
    description?: string;
    prop1?: string;
    src?:string;
  }
  
  interface Props {
    utseproHero: KontenerTipus[];
  }

const UtseproHero = ({ utseproHero }: Props) => {
    const body = utseproHero.find(item => item.id === "2")?.body;
    const title = utseproHero.find(item =>item.id === "1")?.title;
    return (
        <div>
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-black">
        <Image 
            alt="Konténerek"
            src="/locsolo.jpg"
            height={600}
            width={1920}
            className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 flex items-center justify-center md:pl-10">
            <div className="text-center">
                <h1 className="pt-12 md:pt-0 text-4xl md:text-6xl font-extrabold text-white">
                        {title}
                </h1>
                <div className="pt-10">
                    <TopButton>{body}</TopButton>
                </div>
            </div>
        </div>
        </div>
        </div>
      )
}

export default UtseproHero