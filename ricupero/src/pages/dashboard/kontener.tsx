import ContainerHero from "@/components/ContainerHero";
import Containertypes from "@/components/Containertypes";
import Feature4 from "@/components/Feature";
import NavbarDash from "@/components/NavbarDash";
import ProtectedRoute from "@/components/ProtectedRoute";
import ToggleableSection from "@/components/ToogleSelection";
import { KontenerData } from "@/components/types";
import { KontenerDataDash } from "@/pages/api/SzerkesztoDash";
import React, { useEffect, useState } from "react";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import { fetchData } from "../api/api";
import useKontenerData from "../api/useKontenerData";


const Kontener = () => {
  const {
    data,
    editing,
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  } = useKontenerData();


  const [kontenerHero, setKontenerHero] = useState<any>();
  const [kontenerTipus, setKontenerTipus] = useState<any>();
  const [kontenerGarantalunk, setKontenerGarantalunk] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const heroData = await fetchData("kontenerHero");
        const szolgaltatasData = await fetchData("kontenerTipus");
        const iconData = await fetchData("kontenerGarantalunk");

        setKontenerHero(heroData);
        setKontenerTipus(szolgaltatasData);
        setKontenerGarantalunk(iconData);
      } catch (error) {
        console.error("Hiba történt az adatok betöltése közben:", error);
      } finally {
        setLoading(false); // Betöltés vége, akár sikeres, akár nem
      }
    };

    fetchAllData();
  }, []);


  const [highlightedSection, setHighlightedSection] = useState<keyof KontenerData | null>(null);

  const handleSubmitWithHighlight = async (e: React.FormEvent<HTMLFormElement>, section: keyof KontenerData) => {
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
                  Konténer
                </div>
                <div className="flex flex-col gap-4">
                  <ToggleableSection
                    componentA={kontenerHero && <ContainerHero kontenerHero={kontenerHero} />}
                    componentB={
                      <KontenerDataDash
                        sectionName="kontenerHero"
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
                    componentA={kontenerTipus && <Containertypes kontenerTipus={kontenerTipus} />}
                    componentB={
                      <KontenerDataDash
                        sectionName="kontenerTipus"
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
                    componentA={kontenerGarantalunk && <Feature4 kontenerGarantalunk={kontenerGarantalunk} />}
                    componentB={
                      <KontenerDataDash
                        sectionName="kontenerGarantalunk"
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
export default Kontener;
