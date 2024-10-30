import Image from "next/image"
import React from 'react'

const FuvarJarmuParkComp = () => {
    return (
      <div className='flex flex-col max-w-7xl pt-8 md:pt-20'>
          <h1 className='text-white text-5xl font-bold pr-14'>Járműpark</h1>
          <Image 
              src={"/indoor.jpg"}
              alt='vizio'
              width={1920}
              height={400}
              className='w-full h-[400px] object-cover pt-6 md:pt-8'
          />
          <p className='pt-2 md:pt-4'>A BHS Trans Kft. járműparkját kizárólag új, és újszerű eszközök alkotják, egészen 3,5-tonnától, a 24 tonna teherbírásig. Flottánk összetételének és felszereltségének kialakítását, a megbízói igények figyelembe vételével végezzük, így biztosítva a legmagasabb minőségi elvárások teljesülését. Gépjárműveink egységes megjelenésűek, szigorú belső szabályzásunknak köszönhetően, minden esetben tiszta és sérülésmentes állapotúak. Tapasztalt operatív csapatunknak köszönhetően nincs teljesíthetetlen megbízás számunkra, így megbízóink részére teljes körű szolgáltatást tudunk biztosítani.</p>
          <p className='pt-2 md:pt-4'>Magyarország legmodernebb járműparkjának köszönhetően, a ránk bízott feladatok minden esetben prompt módon kerülnek elvégzésre. A piacon egyedi és innovatív IT megoldásainknak köszönhetően, azonnali jelentést tudunk küldeni a megbízások teljesüléséről (POD  Proof of Delivery), melyhez csatoljuk az érintett fuvar leigazolt okmányait is.</p>
          <p className='pt-2 md:pt-4'>Gépkocsivezetőink folyamatosan képezzük és oktatjuk, hogy a szolgáltatásunk teljes időtartama alatt a legmagasabb megbízói igényeknek is eleget tegyenek.</p>
          <p className='pt-2 md:pt-4'>Magyarországon először társaságunk állított forgalomba a piacon egyedi, és innovatív „tükör nélküli – kamerás” szerelvényeket tovább csökkentve Társaságunk feladatai során keletkező károsanyag kibocsátást.</p>
      </div>
    )
  }
  
  export default FuvarJarmuParkComp