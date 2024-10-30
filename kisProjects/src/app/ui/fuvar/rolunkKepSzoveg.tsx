import Image from 'next/image'
import React from 'react'

const RolunkKepSzoveg = () => {
  return (
    <div className='flex flex-col max-w-7xl pt-8 md:pt-20'>
        <h1 className='text-white text-5xl font-bold pr-14'>Víziónk</h1>
        <Image 
            src={"/indoor.jpg"}
            alt='vizio'
            width={1920}
            height={400}
            className='w-full h-[400px] object-cover pt-6 md:pt-8'
        />
        <p className='pt-2 md:pt-4'>Megbízóink számára teljes körű felmérést, mélyreható elemzést és implementálási tervet készítünk a logisztikai feladatok átvételére. Hiszünk a hosszútávon megtérülő befektetésekben, ezért beszerzéseink során kizárólag a legmagasabb minőségű és felszereltségű új járműveket és anyagmozgató eszközöket vásároljuk. Logisztikai kalkulációinknál fenntartható, megtérülő és környezettudatos – “zöld logisztikai” – megoldásokat alkalmazzuk. Nagy figyelmet fordítunk az informatikai fejlesztéseinkre is, így biztosítva Partnereink számára a pontos és hatékony riportrendszereket. Szolgáltatásaink ellenőrzésére személyre szabott teljesítménymutatókat (KPI – Key Performance Indicator) alkalmazunk, melyek kiértékelését Megbízóinkkal közösen végezzük. Megbízóink bizalma sikerünk záloga, így Partnereink számára 24/7 kapcsolattartást biztosítunk.</p>
        <p className='pt-2 md:pt-4'>Szolgáltatásaink bővítése és hatékonyabbá tétele érdekében Európa-szerte kívánunk létrehozni fióktelepeket. Első romániai irodánk megnyitását követően a következő években további 5 fiókirodát tervezünk nyitni Európa országaiban. Célunk, hogy a belföldi és a nemzetközi fuvarozási piacon elért sikereink tovább folytassuk az elkövetkezendő években.</p>
    </div>
  )
}

export default RolunkKepSzoveg