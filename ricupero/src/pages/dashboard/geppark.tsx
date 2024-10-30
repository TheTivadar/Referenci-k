import Gepek2 from "@/components/Gepek2";
import GepekFeature from "@/components/GepekFeature";
import Referencia from "@/components/GepekReferencia";
import HeaderGeppark from "@/components/HeaderGeppark";
import NavbarDash from "@/components/NavbarDash";
import ProtectedRoute from "@/components/ProtectedRoute";
import ToggleableSection from "@/components/ToogleSelection";
import { GepparkDataDash } from "@/pages/api/SzerkesztoDash";
import React, { useEffect, useState } from "react";
import { GepparkData } from "../../components/types";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import { fetchData } from "../api/api";
import useGepparkData from "../api/useGepparkData";

const Geppark = () => {
  const {
    data,
    editing,
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  } = useGepparkData();


  const [gepparkHeader, setGepparkHeader] = useState<any>();
  const [gepparkGepek, setGepparkGepek] = useState<any>();
  const [gepparkGarantalunk, setGepparkGarantalunk] = useState<any>();
  const [gepparkReferencia, setGepparkReferencia] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const gepparkHeader = await fetchData("gepparkHeader");
        const gepparkGepek = await fetchData("gepparkGepek");
        const gepparkGarantalunk = await fetchData("gepparkGarantalunk");
        const gepparkReferencia = await fetchData("gepparkReferencia");

        setGepparkHeader(gepparkHeader);
        setGepparkGepek(gepparkGepek);
        setGepparkGarantalunk(gepparkGarantalunk);
        setGepparkReferencia(gepparkReferencia);
      } catch (error) {
        console.error("Hiba történt az adatok betöltése közben:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const [highlightedSection, setHighlightedSection] = useState<keyof GepparkData | null>(null);

  const handleSubmitWithHighlight = async (e: React.FormEvent<HTMLFormElement>, section: keyof GepparkData) => {
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
                  Géppark
                </div>
                <div className="flex flex-col gap-4">
                  <ToggleableSection
                    componentA={gepparkHeader && <HeaderGeppark gepparkHeader={gepparkHeader} />}
                    componentB={
                      <GepparkDataDash
                        sectionName="gepparkHeader"
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
                    componentA={gepparkGepek && <Gepek2 gepparkGepek={gepparkGepek} />}
                    componentB={
                      <GepparkDataDash
                        sectionName="gepparkGepek"
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
                    componentA={gepparkGarantalunk && <GepekFeature gepparkGarantalunk={gepparkGarantalunk} />}
                    componentB={
                      <GepparkDataDash
                        sectionName="gepparkGarantalunk"
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
                    componentA={gepparkReferencia && <Referencia gepparkReferencia={gepparkReferencia} />}
                    componentB={
                      <GepparkDataDash
                        sectionName="gepparkReferencia"
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

export default Geppark;
