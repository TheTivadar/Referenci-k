import React from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmojiTransportation, } from "react-icons/md";

// Ikonok típusának meghatározása
const icons: { [key: string]: React.ComponentType } = {
  FaMapMarkedAlt: FaMapMarkedAlt,
  MdEmojiTransportation: MdEmojiTransportation
};

// A kártya típusának meghatározása
interface Card {
  title: string;
  icon: string;
}

const card: Card[] = [
  {
    title: 'Belföldi fuvarozás',
    icon: 'FaMapMarkedAlt'
  },
  {
    title: 'Nemzetközi fuvarozás',
    icon: 'MdEmojiTransportation'
  },
  {
    title: 'Raktározás',
    icon: 'MdEmojiTransportation'
  },
  {
    title: 'Komplex logisztika',
    icon: 'MdEmojiTransportation'
  }
];
const card2: Card[] = [
{
    title: 'Tengeri szállítmányozás',
    icon: 'MdEmojiTransportation'
  },
  {
    title: 'Légi szállítmányozás',
    icon: 'MdEmojiTransportation'
  },
  {
    title: 'Vámszolgáltatások',
    icon: 'MdEmojiTransportation'
  },
];

const FuvarMainIcons: React.FC = () => {
  return (
    <div className='py-10 m-4 md:m-0'>
      <h1 className='py-8 text-4xl md:text-5xl font-bold md:pl-20'>Szolgáltatásaink</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 place-content-center pt-10'>
        {card.map((item, index) => {
            const IconComponent = icons[item.icon];
            return (
            <div key={index} className="group flex flex-col items-center justify-center">
                <div className='text-5xl hover:scale-110 duration-200 ease-in-out group-hover:text-gray-400'>
                <IconComponent />
                </div>
                <h1 className="mt-2 text-lg font-bold text-center">{item.title}</h1>
            </div>
            );
        })}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 place-content-center pt-16'>
            {card2.map((item,index) => {
                const IconComponent2 = icons[item.icon];
                return (
                    <div key={index} className="group flex flex-col items-center justify-center">
                        <div className='text-5xl hover:scale-110 duration-200 ease-in-out group-hover:text-gray-400'>
                        <IconComponent2 />
                        </div>
                        <h1 className="mt-2 text-lg font-bold text-center">{item.title}</h1>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default FuvarMainIcons;
