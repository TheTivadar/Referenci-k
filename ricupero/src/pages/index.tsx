import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Head from "next/head";
import HeroMain from "@/components/HeroMain";
import Mszolgaltatasok from "@/components/Mszolgaltatasok";
import Rolunk from "@/components/Rolunk";
import Stats from "@/components/MStats";
import Card from "@/components/MCard";
import Footer2 from "@/components/Footer2";
import Content from "@/components/Content";
import Logo from "@/components/Partners";
import Referencia from "@/components/Referencia";

export default function Home() {
  return(
    <div>
      <Navbar />
      <HeroMain />
      <Mszolgaltatasok />
      <Card />
      <Content />
      <Referencia />
      <Logo />
      <Footer2 />
    </div>
  );
}
