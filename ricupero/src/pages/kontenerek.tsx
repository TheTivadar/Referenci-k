import ContainerHero from '@/components/ContainerHero'
import Containertypes from '@/components/Containertypes'
import { SlantedDivider, SlantedDividerDown } from '@/components/Divider'
import Feature4 from '@/components/Feature'
import Footer2 from '@/components/Footer2'
import Navbar from '@/components/Navbar'
import { TypewriterEffectSmoothD } from '@/components/TypeWritter'
import { fetchData } from './api/api'
import { constructMetadata } from '@/lib/utils'

export const metadata = constructMetadata({
  title: 'Ricupero - Konténerek Kereskedelme',
  description: 'A Ricupero különböző méretű és típusú konténereket kínál eladásra. Akár építkezésről, akár kereskedelmi felhasználásról van szó, nálunk megtalálja a megfelelő konténert, amely megfelel az igényeinek.',
  image: '/irodakont.jpg', // Egyedi kép a főoldalhoz
});

export async function getStaticProps () {
  const kontenerHero = await fetchData("kontenerHero");
  const kontenerTipus = await fetchData("kontenerTipus");
  const kontenerGarantalunk = await fetchData("kontenerGarantalunk");
  return {
    props: {
      kontenerHero: kontenerHero,
      kontenerTipus: kontenerTipus,
      kontenerGarantalunk: kontenerGarantalunk,
    },
  };
}


const Kontenerek = ({ kontenerHero, kontenerTipus, kontenerGarantalunk }: any) => {

  return (
    <div>
      <Navbar />
      <ContainerHero kontenerHero={kontenerHero} />
      <SlantedDivider />
      <Containertypes kontenerTipus={kontenerTipus} />
      <Feature4 kontenerGarantalunk={kontenerGarantalunk} />
      <SlantedDivider />
      <TypewriterEffectSmoothD />
      <SlantedDividerDown />
      <Footer2 />
    </div>
  )
}

export default Kontenerek