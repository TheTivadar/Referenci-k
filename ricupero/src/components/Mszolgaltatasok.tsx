import React from 'react'
import TopButton from './Buttons/TopButton';
import OrangeBackground from './OrangeBackground';
import { Container } from 'postcss';


interface CardProps {
    imageSrc: string;
    title: string;
    text: string;
  }
  
  const Card: React.FC<CardProps> = ({ imageSrc, title, text }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-col md:flex-row">
          <img src={imageSrc} alt={title} className="w-full h-60 object-cover md:w-1/2 lg:w-full" />
          <div className="p-4 md:w-1/2 lg:w-full md:flex md:flex-col md:justify-center">
            <h2 className="text-3xl font-extrabold my-2 pb-2 text-orange-600">{title}</h2>
            <p className="text-gray-700 font-semibold pb-4">{text}</p>
            <button className="p-2 items-start bg-orange-600 w-min rounded-2xl font-semibold">Megnézem!</button>
          </div>
        </div>
      </div>
    );
  };

const Mszolgaltatasok = () => {
  return (
    <div className="pt-20 relative isolate overflow-hidden bg-white px-6 lg:overflow-visible lg:px-0">
    <OrangeBackground />
    <div className="text-black font-extrabold text-4xl flex justify-center p-4 pb-1">
        Szolgáltatásaink
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold mb-4"></div>
      </div>
    <div className="container mx-auto p-4 sm:p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card
          imageSrc="https://via.placeholder.com/300"
          title="Gépi földmunka"
          text="Az aszfaltozás az egyik leghatékonyabb módja az utak, parkolók és udvarok tartós és sima felületének kialakítására. Cégünk professzionális aszfaltozási szolgáltatásokat kínál, melyek garantálják a hosszú távú megbízhatóságot és esztétikus megjelenést."
        />
        <Card
          imageSrc="https://via.placeholder.com/300"
          title="Konténerek"
          text="A térkövezés során nagy figyelmet szentelünk a precíz elhelyezésre. Cégünk széleskörű tapasztalattal rendelkezik térkövezési projektekben, és garanciát vállalunk a minőségi munkavégzésre és esztétikus végeredményre."
        />
        <Card
          imageSrc="https://via.placeholder.com/300"
          title="Démász"
          text="A tereprendezés fontos eljárás az esztétikus és funkcionális földterület kialakításához. Ezen műveletbe többek között beletartozik a terep földdel való feltöltése, egyenetlenségeinek megszüntetése, különböző részek átcsoportosítása is."
        />
      </div>
    </div>
  </div>
  )
}

export default Mszolgaltatasok
