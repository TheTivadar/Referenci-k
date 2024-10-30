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
      }
  ];

const FuvarRolunkIcons = () => {
    return (
        <div className="py-10 m-4 md:m-0">
          <h1 className="py-8 text-4xl md:text-5xl font-bold md:pl-20">Szolgáltatásaink</h1>
          <div className="flex flex-col md:flex-row flex-wrap justify-center md:gap-6 pt-10">
            {card.map((item, index) => {
              const IconComponent = icons[item.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col  w-full md:w-1/4 lg:w-1/6"
                >
                <div className='flex flex-row md:flex-col justify-start gap-4 items-center py-6'>
                    <div className="text-8xl md:text-6xl hover:scale-110 duration-200 ease-in-out group-hover:text-gray-400">
                        <IconComponent />
                    </div>
                    <h1 className="mt-2 text-lg font-bold text-center">{item.title}</h1>
                  </div>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      )
}

export default FuvarRolunkIcons