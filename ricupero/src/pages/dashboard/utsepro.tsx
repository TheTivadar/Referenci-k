import FuvarozasDesc from "@/components/FuvarozasDesc";
import NavbarDash from "@/components/NavbarDash";
import ProtectedRoute from "@/components/ProtectedRoute";
import ToggleableSection from "@/components/ToogleSelection";
import UtseproHero from "@/components/UtseproHero";
import UtseproSzolgaltatas from "@/components/UtseproSzolgaltatas";
import { UtseproDataDash } from "@/pages/api/SzerkesztoDash";
import React, { useEffect, useState } from "react";
import { UtseproData } from "../../components/types";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import { fetchData } from "../api/api";
import useUtseproData from "../api/useUtseproData";


const Utsepro = () => {
  const {
    data,
    editing,
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  } = useUtseproData();

  const [utseproHero, setUtseproHero] = useState<any>();
  const [utseproKontent, setUtseproKontent] = useState<any>();
  const [utseproGarantalunk, setUtseproGarantalunk] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const utseproHero = await fetchData("utseproHero");
        const utseproKontent = await fetchData("utseproKontent");
        const utseproGarantalunk = await fetchData("utseproGarantalunk");


        setUtseproHero(utseproHero);
        setUtseproKontent(utseproKontent);
        setUtseproGarantalunk(utseproGarantalunk);

      } catch (error) {
        console.error("Hiba történt az adatok betöltése közben:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);



  const [highlightedSection, setHighlightedSection] = useState<keyof UtseproData | null>(null);

  const handleSubmitWithHighlight = async (e: React.FormEvent<HTMLFormElement>, section: keyof UtseproData) => {
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
                  Útseprő
                </div>
                <div className="flex flex-col gap-4">
                  <ToggleableSection
                    componentA={utseproHero && <UtseproHero utseproHero={utseproHero} />}
                    componentB={
                      <UtseproDataDash
                        sectionName="utseproHero"
                        sectionTitle="Header"
                        data={data}
                        editing={editing}
                        handleEdit={handleEdit}
                        handleSubmit={handleSubmitWithHighlight}
                        cancelEdit={cancelEdit}
                        highlightedSection={highlightedSection}
                      />
                    }
                  />
                  <ToggleableSection
                    componentA={utseproKontent && <UtseproSzolgaltatas utseproKontent={utseproKontent} />}
                    componentB={
                      <UtseproDataDash
                        sectionName="utseproKontent"
                        sectionTitle="Szolgáltatások"
                        data={data}
                        editing={editing}
                        handleEdit={handleEdit}
                        cancelEdit={cancelEdit}
                        handleSubmit={handleSubmitWithHighlight}
                        highlightedSection={highlightedSection}
                      />
                    }
                  />
                  <ToggleableSection
                    componentA={utseproGarantalunk && <FuvarozasDesc utseproGarantalunk={utseproGarantalunk} />}
                    componentB={
                      <UtseproDataDash
                        sectionName="utseproGarantalunk"
                        sectionTitle="Iconok"
                        data={data}
                        editing={editing}
                        handleEdit={handleEdit}
                        handleSubmit={handleSubmitWithHighlight} // Use modified submit
                        cancelEdit={cancelEdit}
                        highlightedSection={highlightedSection}
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

export default Utsepro;

