import Link from 'next/link';
import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmojiTransportation, } from "react-icons/md";


const icons: { [key: string]: React.ComponentType } = {
    FaMapMarkedAlt: FaMapMarkedAlt,
    MdEmojiTransportation: MdEmojiTransportation
  };
  
  // A kártya típusának meghatározása
  interface Card {
    title: string;
    body:string;
    icon: string;
  }

const card: Card[] = [
    {
      title: 'Belföldi fuvarozás',
      body:'A szolgáltatási körünket az elmúlt években folyamatosan bővítettük, így elmondhatjuk, hogy jelenleg nincs olyan szállítási, raktározási feladat, melyre nem tudunk megoldást kínálni. A ránk bízott termékeket a lehető legnagyobb szakértelemmel juttatjuk el a világ bármely pontjára.',
      icon: 'FaMapMarkedAlt'
    },
    {
      title: 'Nemzetközi fuvarozás',
      body:'A szolgáltatási körünket az elmúlt években folyamatosan bővítettük, így elmondhatjuk, hogy jelenleg nincs olyan szállítási, raktározási feladat, melyre nem tudunk megoldást kínálni. A ránk bízott termékeket a lehető legnagyobb szakértelemmel juttatjuk el a világ bármely pontjára.',
      icon: 'MdEmojiTransportation'
    },
    {
      title: 'Raktározás',
      body:'A szolgáltatási körünket az elmúlt években folyamatosan bővítettük, így elmondhatjuk, hogy jelenleg nincs olyan szállítási, raktározási feladat, melyre nem tudunk megoldást kínálni. A ránk bízott termékeket a lehető legnagyobb szakértelemmel juttatjuk el a világ bármely pontjára.',
      icon: 'MdEmojiTransportation'
    },
    {
      title: 'Komplex logisztika',
      body:'A szolgáltatási körünket az elmúlt években folyamatosan bővítettük, így elmondhatjuk, hogy jelenleg nincs olyan szállítási, raktározási feladat, melyre nem tudunk megoldást kínálni. A ránk bízott termékeket a lehető legnagyobb szakértelemmel juttatjuk el a világ bármely pontjára.',
      icon: 'MdEmojiTransportation'
    },
    {
        title: 'Komplex logisztika',
        body:'A szolgáltatási körünket az elmúlt években folyamatosan bővítettük, így elmondhatjuk, hogy jelenleg nincs olyan szállítási, raktározási feladat, melyre nem tudunk megoldást kínálni. A ránk bízott termékeket a lehető legnagyobb szakértelemmel juttatjuk el a világ bármely pontjára.',
        icon: 'MdEmojiTransportation'
      },
      {
        title: 'Komplex logisztika',
        body:'A szolgáltatási körünket az elmúlt években folyamatosan bővítettük, így elmondhatjuk, hogy jelenleg nincs olyan szállítási, raktározási feladat, melyre nem tudunk megoldást kínálni. A ránk bízott termékeket a lehető legnagyobb szakértelemmel juttatjuk el a világ bármely pontjára.',
        icon: 'MdEmojiTransportation'
      }
  ];

const FuvarSzolgaltatasSzolgaltatas = () => {
  return (
        <div className="py-10 m-4 md:m-0">
          <h1 className="py-8 text-4xl md:text-5xl font-bold md:pl-20">Szolgáltatásaink</h1>
          <div className="flex flex-col md:flex-row flex-wrap justify-center md:gap-6 pt-10">
            {card.map((item, index) => {
              const IconComponent = icons[item.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col  w-full md:w-1/3 lg:w-1/4"
                >
                <div className='flex flex-row justify-start gap-4 items-start py-6'>
                    <div className="text-8xl md:text-6xl hover:scale-110 duration-200 ease-in-out group-hover:text-gray-400 items-start">
                        <IconComponent />
                    </div>
                    <div>
                        <h1 className="mt-2 text-lg md:text-2xl font-bold text-start pb-2">{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                  </div>
                  <div className='pt-4 flex justify-end'>
                        <Link href="/jelentkezes">
                            <button
                            className="bg-red-600 pr-8 pl-10 lg:pl-16 py-2 font-bold hover:bg-red-800"
                            style={{ clipPath: 'polygon(25% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                            >
                            Bővebben
                            </button>
                        </Link>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default FuvarSzolgaltatasSzolgaltatas