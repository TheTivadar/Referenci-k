import { SlantedDivider, SlantedDividerDown } from '@/components/Divider'
import Footer2 from '@/components/Footer2'
import Gepek2 from '@/components/Gepek2'
import GepekFeature from '@/components/GepekFeature'
import Referencia from '@/components/GepekReferencia'
import HeaderGeppark from '@/components/HeaderGeppark'
import Navbar from '@/components/Navbar'
import { TypewriterEffectSmoothD } from '@/components/TypeWritter'
import { fetchData } from './api/api'
import { constructMetadata } from '@/lib/utils'

export const metadata = constructMetadata({
  title: 'Ricupero - Munkagépek Kiadása',
  description: 'A Ricupero különféle munkagépeket kínál bérlésre, így Ön mindig a legmodernebb és leghatékonyabb eszközöket használhat. Gépparkunk folyamatosan frissül, hogy a legújabb technológiák álljanak rendelkezésére.',
  image: '/catm315.jpg', // Egyedi kép a főoldalhoz
});

export async function getStaticProps () {
  const gepparkHeader = await fetchData("gepparkHeader");
  const gepparkGepek = await fetchData("gepparkGepek");
  const gepparkGarantalunk = await fetchData("gepparkGarantalunk");
  const gepparkReferencia = await fetchData("gepparkReferencia");
  return {
    props: {
      gepparkHeader: gepparkHeader,
      gepparkGepek: gepparkGepek,
      gepparkGarantalunk: gepparkGarantalunk,
      gepparkReferencia: gepparkReferencia
    },
  };
}

const GepiFoldmunka = ({ gepparkHeader, gepparkGepek, gepparkGarantalunk, gepparkReferencia }: any) => {

  return (
    <div>
      <Navbar />
      <HeaderGeppark gepparkHeader={gepparkHeader} />
      <SlantedDivider />
      <Gepek2 gepparkGepek={gepparkGepek} />
      <GepekFeature gepparkGarantalunk={gepparkGarantalunk} />
      <SlantedDivider />
      <Referencia gepparkReferencia={gepparkReferencia} />
      <SlantedDivider />
      <TypewriterEffectSmoothD />
      <SlantedDividerDown />
      <Footer2 />
    </div>
  )
}

export default GepiFoldmunka