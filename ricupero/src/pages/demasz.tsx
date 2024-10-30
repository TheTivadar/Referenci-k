
import DemaszHero from '@/components/DemaszHero'
import DemaszSzamok from '@/components/Demaszszamok'
import DemaszSzolgaltatas from '@/components/DemaszSzolgaltatas'
import { SlantedDivider, SlantedDividerDown } from '@/components/Divider'
import Footer2 from '@/components/Footer2'
import Navbar from '@/components/Navbar'
import { TypewriterEffectSmoothD } from '@/components/TypeWritter'
import { fetchData } from './api/api'
import { constructMetadata } from '@/lib/utils'

export const metadata = constructMetadata({
  title: 'Ricupero - Helykiadás',
  description: 'Cégünk helykiadási szolgáltatásai révén biztosítjuk, hogy a szükséges terület mindig elérhető legyen Önnek. Legyen szó építkezési területről vagy ideiglenes tárolóról, rugalmas megoldásokat kínálunk.',
  image: '/demaszhero.jpg', // Egyedi kép a szolgáltatás oldalhoz
});


export async function getStaticProps () {
  const demaszHero = await fetchData("demaszHero");
  const demaszSzolgaltatas = await fetchData("demaszSzolgaltatas");
  const demaszIcon = await fetchData("demaszIcon");
  return {
    props: {
      demaszHero: demaszHero,
      demaszSzolgaltatas: demaszSzolgaltatas,
      demaszIcon: demaszIcon,
    },
  };
}


const Demasz = ({ demaszHero, demaszSzolgaltatas, demaszIcon }: any) => {

  return (
    <div>
      <Navbar />
      <div className='pt-8 md:pt-14'>
        <DemaszHero demaszHero={demaszHero} />
      </div>
      <SlantedDivider />
      <div className='pt-20'>
        <DemaszSzolgaltatas demaszSzolgaltatas={demaszSzolgaltatas} />
      </div>
      <DemaszSzamok demaszIcon={demaszIcon} />
      <SlantedDivider />
      <TypewriterEffectSmoothD />
      <SlantedDividerDown />
      <Footer2 />
    </div>
  )
}

export default Demasz