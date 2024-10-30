import DemaszHero from "@/components/DemaszHero";
import DemaszSzolgaltatas from "@/components/DemaszSzolgaltatas";
import DemaszSzamok from "@/components/Demaszszamok";
import NavbarDash from "@/components/NavbarDash";
import ProtectedRoute from '@/components/ProtectedRoute';
import ToggleableSection from "@/components/ToogleSelection";
import { SzerkesztoDash } from "@/pages/api/SzerkesztoDash";
import React, { useEffect, useState } from "react";
import { DemaszData } from "../../components/types";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import { fetchData } from "../api/api";
import useDemaszData from "../api/useDemaszData";

const Demasz = () => {
  const {
    data,
    editing,
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  } = useDemaszData();

  const [demaszHero, setDemaszHero] = useState<any>();
  const [demaszSzolgaltatas, setDemaszSzolgaltatas] = useState<any>();
  const [demaszIcon, setDemaszIcon] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const heroData = await fetchData("demaszHero");
        const szolgaltatasData = await fetchData("demaszSzolgaltatas");
        const iconData = await fetchData("demaszIcon");

        setDemaszHero(heroData);
        setDemaszSzolgaltatas(szolgaltatasData);
        setDemaszIcon(iconData);
      } catch (error) {
        console.error("Hiba történt az adatok betöltése közben:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const [highlightedSection, setHighlightedSection] = useState<keyof DemaszData | null>(null);

  const handleSubmitWithHighlight = async (e: React.FormEvent<HTMLFormElement>, section: keyof DemaszData) => {
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
        <div className="content">
          <div className="flex flex-col justify-start md:pl-10 w-screen md:max-w-7xl">
                <div className="text-black pt-20 pb-6 md:py-6 text-3xl md:text-5xl flex justify-center lg:text-7xl font-bold">
                  Démasz
                </div>
                <div className="flex flex-col gap-4">
                  <ToggleableSection
                    componentA={demaszHero && <DemaszHero demaszHero={demaszHero} />}
                    componentB={
                      <SzerkesztoDash
                        sectionName="demaszHero"
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
                    componentA={demaszSzolgaltatas && <DemaszSzolgaltatas demaszSzolgaltatas={demaszSzolgaltatas} />}
                    componentB={
                      <SzerkesztoDash
                        sectionName="demaszSzolgaltatas"
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
                    componentA={demaszIcon && <DemaszSzamok demaszIcon={demaszIcon} />}
                    componentB={
                      <SzerkesztoDash
                        sectionName="demaszIcon"
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

export default Demasz;
