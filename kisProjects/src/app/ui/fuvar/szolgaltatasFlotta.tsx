import Image from 'next/image';
import React from 'react';

// Szolgáltatások részletes információi
const Szolgaltatasok = [
  {
    title: "FTL Flotta",
    src: "/barbershop.jpg",
    details: [
      "Gépjármű flottánkat 40 tonnás kamion szerelvények alkotják.",
      "Flottánk átlagéletkora: 1,5 év.",
      "Ponyvás (90%), dobozos (10%).",
      "Egyedi, könnyített pótkocsik (30,2 tonna teherbírás).",
      "„Double-deck”– duplaszintes raktér (66 pal kapacitás).",
      "Egyedi partnerigényekhez alkalmazkodó flottabeszerzések (egyedi felépítménnyel rendelkező eszközök).",
      "Modern hűtő- és fűtőberendezések (-18 C°-tól 24 C°-ig).",
      "Kizárólag EURO 6 besorolású járművek.",
      "Folyamatosan szervizelt, kiváló állapotú járművek.",
      "Új, minden kiegészítővel felszerelt pótkocsik.",
      "Sérülésmentes és folyamatosan tisztán tartott vontatók és pótkocsik.",
      "Állandó GPS felügyelet (útvonal ellenőrzés, hőfok figyelés, hőfok regiszter).",
    ]
  },
  {
    title: "FTL Flotta",
    src: "/barbershop.jpg",
    details: [
        "Gépjármű flottánkat 40 tonnás kamion szerelvények alkotják.",
        "Flottánk átlagéletkora: 1,5 év.",
        "Ponyvás (90%), dobozos (10%).",
        "Egyedi, könnyített pótkocsik (30,2 tonna teherbírás).",
        "„Double-deck”– duplaszintes raktér (66 pal kapacitás).",
        "Egyedi partnerigényekhez alkalmazkodó flottabeszerzések (egyedi felépítménnyel rendelkező eszközök).",
        "Modern hűtő- és fűtőberendezések (-18 C°-tól 24 C°-ig).",
        "Kizárólag EURO 6 besorolású járművek.",
        "Folyamatosan szervizelt, kiváló állapotú járművek.",
        "Új, minden kiegészítővel felszerelt pótkocsik.",
        "Sérülésmentes és folyamatosan tisztán tartott vontatók és pótkocsik.",
        "Állandó GPS felügyelet (útvonal ellenőrzés, hőfok figyelés, hőfok regiszter).",
      ]
  },
  {
    title: "FTL Flotta",
    src: "/barbershop.jpg",
    details: [
        "Gépjármű flottánkat 40 tonnás kamion szerelvények alkotják.",
        "Flottánk átlagéletkora: 1,5 év.",
        "Ponyvás (90%), dobozos (10%).",
        "Egyedi, könnyített pótkocsik (30,2 tonna teherbírás).",
        "„Double-deck”– duplaszintes raktér (66 pal kapacitás).",
        "Egyedi partnerigényekhez alkalmazkodó flottabeszerzések (egyedi felépítménnyel rendelkező eszközök).",
        "Modern hűtő- és fűtőberendezések (-18 C°-tól 24 C°-ig).",
        "Kizárólag EURO 6 besorolású járművek.",
        "Folyamatosan szervizelt, kiváló állapotú járművek.",
        "Új, minden kiegészítővel felszerelt pótkocsik.",
        "Sérülésmentes és folyamatosan tisztán tartott vontatók és pótkocsik.",
        "Állandó GPS felügyelet (útvonal ellenőrzés, hőfok figyelés, hőfok regiszter).",
      ]
  }
];

const FuvarSzolgaltatasJarmuPark = () => {
  return (
    <div className='pt-10'>
      <div className='flex flex-col md:flex-row gap-6 pt-12 m-4 md:m-0'>
        {Szolgaltatasok.map((item, index) => {
          return (
            <div key={index} className='flex flex-col items-center'>
              <h1 className='text-2xl font-semibold py-2'>{item.title}</h1>
              <Image
                src={item.src}
                alt='jarmuvek'
                width={400}
                height={400}
                className=' w-full p-4 md:p-0' // Opció: kerekített sarkok és árnyék
              />
              <div className="mt-4 text-gray-200">
                <h2 className='text-lg font-bold mb-2'>Részletek:</h2>
                <ul className='list-disc list-inside space-y-1'>
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FuvarSzolgaltatasJarmuPark;
