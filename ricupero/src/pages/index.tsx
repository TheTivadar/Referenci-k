import Content from "@/components/Content";
import { SlantedDivider, SlantedDividerDown } from "@/components/Divider";
import Footer2 from "@/components/Footer2";
import HeroMain from "@/components/HeroMain";
import Card from "@/components/MCard";
import Mszolgaltatasok2 from "@/components/Mszolgaltatasok2";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Partners";
import Referencia from "@/components/Referencia";
import { TypewriterEffectSmoothD } from "@/components/TypeWritter";
import { fetchData } from "./api/api";
import { constructMetadata } from "@/lib/utils";


export const metadata = constructMetadata();

export async function getStaticProps () {
  const mainHeader = await fetchData("mainHeader");
  const mainSzolgaltatasok = await fetchData("mainSzolgaltatasok");
  const mainCard = await fetchData("mainCard");
  const mainContent = await fetchData("mainContent");
  const mainReferences = await fetchData("mainReferences");
  const mainLogo = await fetchData("mainLogo");
  return {
    props: {
      mainHeader: mainHeader,
      mainSzolgaltatasok:mainSzolgaltatasok,
      mainCard:mainCard,
      mainContent:mainContent,
      mainReferences:mainReferences,
      mainLogo:mainLogo
    },
  };
}

export default function Home({ mainHeader,mainSzolgaltatasok,mainCard,mainContent,mainReferences,mainLogo}:any) {
  
  return (
    <div>
      <Navbar />
      {mainHeader && <HeroMain data={mainHeader}/>}
      <SlantedDivider />
      {mainSzolgaltatasok && <Mszolgaltatasok2 mainSzolgaltatasok={mainSzolgaltatasok} />}
      {mainCard && <Card mainCard={mainCard} />}
      {mainContent && <Content mainContent={mainContent} />}
      <SlantedDividerDown />
      <SlantedDivider />
      {mainReferences && <Referencia mainReferences={mainReferences} />}
      <SlantedDivider />
      <TypewriterEffectSmoothD />
      <SlantedDividerDown />
      {mainLogo && <Logo mainLogo={mainLogo} />}
      <Footer2 />
    </div>
  );
}
