import { CompareDemo } from '@/components/Compare'
import { SlantedDivider, SlantedDividerDown } from '@/components/Divider'
import Footer2 from '@/components/Footer2'
import FuvarozasDesc1 from '@/components/fuvarozasDesc1'
import FuvarozasGeppark from '@/components/FuvarozasGeppark'
import FuvarozasHero from '@/components/FuvarozasHero'
import FuvarozasSzolgaltatas from '@/components/FuvarozasSzolgaltatas'
import FuvarozasSzolgaltatas4 from '@/components/FuvarozasSzolgaltatas4'
import Navbar from '@/components/Navbar'
import { TypewriterEffectSmoothD } from '@/components/TypeWritter'
import { fetchData } from './api/api'
import { constructMetadata } from '@/lib/utils'

export const metadata = constructMetadata({
  title: 'Ricupero - Fuvarozás',
  description: 'Fuvarozási szolgáltatásaink rugalmas megoldásokat kínálnak bármilyen típusú áruszállításra. Széles járműflottánknak köszönhetően gyorsan és megbízhatóan juttatjuk el áruit az Ön által megadott helyszínre.',
  image: '/iveco4x8.jpg', // Egyedi kép a főoldalhoz
});


export async function getStaticProps () {
  const fuvarozasHero = await fetchData("fuvarozasHero");
  const fuvarozasSzolgaltatas = await fetchData("fuvarozasSzolgaltatas");
  const fuvarozasGeppark = await fetchData("fuvarozasGeppark");
  const fuvarozasSzolgaltatas2 = await fetchData("fuvarozasSzolgaltatas2");
  const fuvarozasSzolgaltatas3 = await fetchData("fuvarozasSzolgaltatas3")
  return {
    props: {
      fuvarozasHero: fuvarozasHero,
      fuvarozasSzolgaltatas:fuvarozasSzolgaltatas,
      fuvarozasGeppark:fuvarozasGeppark,
      fuvarozasSzolgaltatas2:fuvarozasSzolgaltatas2,
      fuvarozasSzolgaltatas3:fuvarozasSzolgaltatas3,
    },
  };
}

const Fuvarozas = ({fuvarozasHero,fuvarozasSzolgaltatas,fuvarozasGeppark,fuvarozasSzolgaltatas2,fuvarozasSzolgaltatas3}:any) => {
  
  
  return (
    <div>
        <Navbar />
        <FuvarozasHero fuvarozasHero={fuvarozasHero}/>
        <SlantedDivider />
        <FuvarozasSzolgaltatas fuvarozasSzolgaltatas={fuvarozasSzolgaltatas}/>
        <FuvarozasGeppark fuvarozasGeppark = {fuvarozasGeppark}/>
        <FuvarozasDesc1 fuvarozasSzolgaltatas2={fuvarozasSzolgaltatas2} />
        <SlantedDivider />
        <FuvarozasSzolgaltatas4 fuvarozasSzolgaltatas3={fuvarozasSzolgaltatas3} />
        <SlantedDivider />
        <TypewriterEffectSmoothD />
        <SlantedDividerDown />
        <CompareDemo/>
        <Footer2 />
    </div>
  )
}

export default Fuvarozas