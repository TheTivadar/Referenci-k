import React from 'react'
import TopButton from './Buttons/TopButton'
import Image from 'next/image'

interface KontenerTipus {
    id: string;
    title: string;
    body: string;
    description?: string;
    prop1?: string;
    src?:string;
  }
  
  interface Props {
    kontenerHero: KontenerTipus[];
  }

const ContainerHero = ({ kontenerHero }: Props) => {
    if(!kontenerHero) return null;
    const body1 = kontenerHero.find(item => item.id === "1")?.body;
    const title1 = kontenerHero.find(item =>item.id === "1")?.title;
    const prop1 = kontenerHero.find(item =>item.id === "1")?.prop1;
  return (
    <div>
        <div className="relative h-[500px] lg:h-[700px] w-full overflow-hidden bg-black">
    <Image 
        alt="Konténerek"
        src="/cm.jpg"
        width={1920}
        height={700}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
    />
    <div className="absolute inset-0 flex items-center justify-center md:pl-10">
        <div className="text-center">
            <h1 className="text-3xl lg:text-8xl font-extrabold text-white">
                {title1}
            </h1>
            <p className="pt-12 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold text-white">
                {body1}
            </p>
            <div className="pt-3">
                <TopButton>{prop1}</TopButton>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ContainerHero