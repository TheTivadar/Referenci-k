import { BentoGridSeven } from "@/components/BentoGridSeven";
import FuvarozasDesc2 from "@/components/FuvarozasDesc2";
import NavbarDash from "@/components/NavbarDash";
import ProtectedRoute from "@/components/ProtectedRoute";
import ToggleableSection from "@/components/ToogleSelection";
import { UtepitesGepek } from "@/components/UtepitesGepek";
import UtepitesHero from "@/components/UtepitesHero";
import UtepitesSzolgaltatas from "@/components/UtepitesSzolgaltatas";
import { UtepitesDataDash } from "@/pages/api/SzerkesztoDash";
import React, { useEffect, useState } from "react";
import { UtepitesData } from "../../components/types";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import { fetchData } from "../api/api";
import useUtepitesData from "../api/useUtepitesData";


const Utepites = () => {
  const {
    data,
    editing,
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  } = useUtepitesData();

  const [utepitesHero, setUtepitesHero] = useState<any>();
  const [utepitesSzolgaltatas, setUtepitesSzolgaltatas] = useState<any>();
  const [utepitesGeppark, setUtepitesGeppark] = useState<any>();
  const [utepitesSzolgaltatas2, setUtepitesSzolgaltatas2] = useState<any>();
  const [utepitesSzolgaltatas3, setUtepitesSzolgaltatas3] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const utepitesHero = await fetchData("utepitesHero");
        const utepitesSzolgaltatas = await fetchData("utepitesSzolgaltatas");
        const utepitesGeppark = await fetchData("utepitesGeppark");
        const utepitesSzolgaltatas2 = await fetchData("utepitesSzolgaltatas2");
        const utepitesSzolgaltatas3 = await fetchData("utepitesSzolgaltatas3");

        setUtepitesHero(utepitesHero);
        setUtepitesSzolgaltatas(utepitesSzolgaltatas);
        setUtepitesGeppark(utepitesGeppark);
        setUtepitesSzolgaltatas2(utepitesSzolgaltatas2);
        setUtepitesSzolgaltatas3(utepitesSzolgaltatas3);

      } catch (error) {
        console.error("Hiba történt az adatok betöltése közben:", error);
      }finally {
        setLoading(false); // Betöltés vége, akár sikeres, akár nem
      }
    };

    fetchAllData();
  }, []);


  const [highlightedSection, setHighlightedSection] = useState<keyof UtepitesData | null>(null);

  const handleSubmitWithHighlight = async (e: React.FormEvent<HTMLFormElement>, section: keyof UtepitesData) => {
    await handleSubmit(e, section);
    
    setHighlightedSection(section);

    setTimeout(() => {
      setHighlightedSection(null);
    }, 500);
  };


  return (
    <ProtectedRoute>
    <div className={` bg-white dashboard body flex`}>
        <div className="hidden md:block">
        <Sidebar />
        </div>
        <div className="md:hidden">
          <NavbarDash />
        </div>
       <div className={`content `}>
        <div className="flex flex-col justify-start md:pl-10 w-screen md:max-w-7xl">
          <div className="text-black pt-20 pb-6 md:py-6 text-3xl md:text-5xl flex justify-center lg:text-7xl font-bold">
              Útépítés 
          </div>
          <div className="flex flex-col gap-4">
            <ToggleableSection
                componentA={utepitesHero && <UtepitesHero utepitesHero={utepitesHero}/>}
                componentB={
                  <UtepitesDataDash
                    sectionName="utepitesHero"
                    sectionTitle="Header"
                    data={data}
                    editing={editing}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmitWithHighlight} 
                    highlightedSection={highlightedSection}
                    cancelEdit={cancelEdit}
                  />
                }
              />
              <ToggleableSection
                componentA={utepitesSzolgaltatas && <BentoGridSeven utepitesSzolgaltatas = {utepitesSzolgaltatas}/>}
                componentB={
                  <UtepitesDataDash
                    sectionName="utepitesSzolgaltatas"
                    sectionTitle="Header"
                    data={data}
                    editing={editing}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmitWithHighlight} 
                    highlightedSection={highlightedSection}
                    cancelEdit={cancelEdit}
                  />
                }
              />
              <ToggleableSection
                componentA={utepitesGeppark && <UtepitesGepek utepitesGeppark = {utepitesGeppark}/>}
                componentB={
                  <UtepitesDataDash
                    sectionName="utepitesGeppark"
                    sectionTitle="Header"
                    data={data}
                    editing={editing}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmitWithHighlight} 
                    highlightedSection={highlightedSection}
                    cancelEdit={cancelEdit}
                  />
                }
              />
              <ToggleableSection
                componentA={utepitesSzolgaltatas2 && <FuvarozasDesc2  utepitesSzolgaltatas2={utepitesSzolgaltatas2}/>}
                componentB={
                  <UtepitesDataDash
                    sectionName="utepitesSzolgaltatas2"
                    sectionTitle="Header"
                    data={data}
                    editing={editing}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmitWithHighlight} 
                    highlightedSection={highlightedSection}
                    cancelEdit={cancelEdit}
                  />
                }
              />
              <ToggleableSection
                componentA={utepitesSzolgaltatas3 && <UtepitesSzolgaltatas utepitesSzolgaltatas3 ={utepitesSzolgaltatas3}/>}
                componentB={
                  <UtepitesDataDash
                    sectionName="utepitesSzolgaltatas3"
                    sectionTitle="Header"
                    data={data}
                    editing={editing}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmitWithHighlight} 
                    highlightedSection={highlightedSection}
                    cancelEdit={cancelEdit}
                  />
                }
              />
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};


export default Utepites;
