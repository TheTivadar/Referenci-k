import { CompareDemo } from '@/components/Compare'
import { SlantedDivider, SlantedDividerDown } from '@/components/Divider'
import Footer2 from '@/components/Footer2'
import FuvarozasDesc from '@/components/FuvarozasDesc'
import Navbar from '@/components/Navbar'
import { TypewriterEffectSmoothD } from '@/components/TypeWritter'
import UtseproHero from '@/components/UtseproHero'
import UtseproSzolgaltatas from '@/components/UtseproSzolgaltatas'
import { useEffect, useState } from 'react'
import { fetchData } from './api/api'
import Loading from '@/components/BarLoader'
import { constructMetadata } from '@/lib/utils'

export const metadata = constructMetadata({
  title: 'Ricupero - Útseprő-locsoló autók bérlése',
  description: 'A Ricupero különféle munkagépeket kínál bérlésre, így Ön mindig a legmodernebb és leghatékonyabb eszközöket használhat. Gépparkunk folyamatosan frissül, hogy a legújabb technológiák álljanak rendelkezésére.',
  image: '/locsolo.jpg', // Egyedi kép a főoldalhoz
});


export async function getStaticProps () {
  const utseproHero = await fetchData("utseproHero");
  const utseproKontent = await fetchData("utseproKontent");
  const utseproGarantalunk = await fetchData("utseproGarantalunk");
  return {
    props: {
      utseproHero: utseproHero,
      utseproKontent: utseproKontent,
      utseproGarantalunk: utseproGarantalunk,
    },
  };
}



const Utsepro = ({utseproHero,utseproKontent,utseproGarantalunk }:any) => {
  
  return (
    <div>
      <Navbar />
      <UtseproHero utseproHero={utseproHero} />
      <SlantedDivider />
      <UtseproSzolgaltatas utseproKontent={utseproKontent} />
      <FuvarozasDesc utseproGarantalunk={utseproGarantalunk} />
      <SlantedDivider />
      <TypewriterEffectSmoothD />
      <SlantedDividerDown />
      <CompareDemo />
      <Footer2 />
    </div>
  )
}

export default Utsepro