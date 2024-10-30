import Content from "@/components/Content";
import HeroMain from "@/components/HeroMain";
import Card from "@/components/MCard";
import Mszolgaltatasok2 from "@/components/Mszolgaltatasok2";
import NavbarDash from "@/components/NavbarDash";
import Logo from "@/components/Partners";
import ProtectedRoute from "@/components/ProtectedRoute";
import Referencia from "@/components/Referencia";
import ToggleableSection from "@/components/ToogleSelection";
import { DashboardData } from "@/components/types";
import { DashboardDataDash } from "@/pages/api/SzerkesztoDash";
import React, { useEffect, useState } from "react";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import { fetchData } from "../api/api";
import useDashboardData from "../api/useDashboardData";

const Main = () => {
  const {
    data,
    editing,
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  } = useDashboardData();

  const [mainHeader, setMainHeader] = useState<any>();
  const [mainSzolgaltatasok, setMainSzolgaltatasok] = useState<any>();
  const [mainCard, setMainCard] = useState<any>();
  const [mainContent, setMainContent] = useState<any>();
  const [mainReferences, setMainReferences] = useState<any>();
  const [mainLogo, setMainLogo] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const mainHeader = await fetchData("mainHeader");
        const mainSzolgaltatasok = await fetchData("mainSzolgaltatasok");
        const mainCard = await fetchData("mainCard");
        const mainContent = await fetchData("mainContent");
        const mainReferences = await fetchData("mainReferences");
        const mainLogo = await fetchData("mainLogo");
        
        setMainHeader(mainHeader);
        setMainSzolgaltatasok(mainSzolgaltatasok);
        setMainCard(mainCard);
        setMainContent(mainContent);
        setMainReferences(mainReferences);
        setMainLogo(mainLogo);

      } catch (error) {
        console.error("Hiba történt az adatok betöltése közben:", error);
      }finally {
        setLoading(false); 
      }
    };

    fetchAllData();
  }, []);

  const [highlightedSection, setHighlightedSection] = useState<keyof DashboardData | null>(null);

  const handleSubmitWithHighlight = async (e: React.FormEvent<HTMLFormElement>, section: keyof DashboardData) => {
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
              Főoldal 
          </div>
          <div className="flex flex-col gap-4">
            <ToggleableSection
                componentA={mainHeader &&  <HeroMain data={mainHeader}/>}
                componentB={
                  <DashboardDataDash
                    sectionName="mainHeader"
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
                componentA={mainSzolgaltatasok &&<Mszolgaltatasok2 mainSzolgaltatasok={mainSzolgaltatasok}/>}
                componentB={
                  <DashboardDataDash
                    sectionName="mainSzolgaltatasok"
                    sectionTitle="Szolgáltatások"
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
                componentA={mainCard && <Card mainCard={mainCard}/>}
                componentB={
                  <DashboardDataDash
                    sectionName="mainCard"
                    sectionTitle="Iconok"
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
                componentA={mainContent && <Content mainContent={mainContent} />}
                componentB={
                  <DashboardDataDash
                    sectionName="mainContent"
                    sectionTitle="Iconok"
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
                componentA={mainReferences && <Referencia mainReferences={mainReferences}/>}
                componentB={
                  <DashboardDataDash
                    sectionName="mainReferences"
                    sectionTitle="Iconok"
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
                componentA={mainLogo && <Logo mainLogo={mainLogo}/>}
                componentB={
                  <DashboardDataDash
                    sectionName="mainLogo"
                    sectionTitle="Iconok"
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

export default Main;
