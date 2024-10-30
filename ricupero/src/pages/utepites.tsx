import { BentoGridSeven } from '@/components/BentoGridSeven'
import { CompareUt } from '@/components/Compare'
import { SlantedDivider, SlantedDividerDown } from '@/components/Divider'
import Footer2 from '@/components/Footer2'
import FuvarozasDesc2 from '@/components/FuvarozasDesc2'
import Navbar from '@/components/Navbar'
import { TypewriterEffectSmoothD } from '@/components/TypeWritter'
import { UtepitesGepek } from '@/components/UtepitesGepek'
import UtepitesHero from '@/components/UtepitesHero'
import UtepitesSzolgaltatas from '@/components/UtepitesSzolgaltatas'
import { fetchData } from './api/api'
import { constructMetadata } from '@/lib/utils'

export const metadata = constructMetadata({
  title: 'Ricupero - Útépítés',
  description: 'A Ricupero szakértő csapata tapasztalt mérnökökből és kivitelezőkből áll, akik garantálják a kiváló minőségű útépítést. Legyen szó új utak kialakításáról vagy meglévő utak felújításáról, mi minden lépést alaposan megtervezünk, hogy a legjobban teljesítő infrastruktúrát biztosítsuk.',
  image: '/RoadConstr.jpg', // Egyedi kép a főoldalhoz
});


export async function getStaticProps () {
  const utepitesHero = await fetchData("utepitesHero");
  const utepitesSzolgaltatas = await fetchData("utepitesSzolgaltatas");
  const utepitesGeppark = await fetchData("utepitesGeppark");
  const utepitesSzolgaltatas2 = await fetchData("utepitesSzolgaltatas2");
  const utepitesSzolgaltatas3 = await fetchData("utepitesSzolgaltatas3");
  return {
    props: {
      utepitesHero: utepitesHero,
      utepitesSzolgaltatas: utepitesSzolgaltatas,
      utepitesGeppark: utepitesGeppark,
      utepitesSzolgaltatas2: utepitesSzolgaltatas2,
      utepitesSzolgaltatas3: utepitesSzolgaltatas3,
    },
  };
}



const Utepites = ({ utepitesHero, utepitesSzolgaltatas, utepitesGeppark, utepitesSzolgaltatas2, utepitesSzolgaltatas3 }: any) => {
  return (
    <div>
      <Navbar />
      <UtepitesHero utepitesHero={utepitesHero} />
      <SlantedDivider />
      <BentoGridSeven utepitesSzolgaltatas={utepitesSzolgaltatas} />
      <UtepitesGepek utepitesGeppark={utepitesGeppark} />
      <FuvarozasDesc2 utepitesSzolgaltatas2={utepitesSzolgaltatas2} />
      <SlantedDivider />
      <UtepitesSzolgaltatas utepitesSzolgaltatas3={utepitesSzolgaltatas3} />
      <SlantedDivider />
      <TypewriterEffectSmoothD />
      <SlantedDividerDown />
      <CompareUt />
      <Footer2 />
    </div>
  )
}

export default Utepites