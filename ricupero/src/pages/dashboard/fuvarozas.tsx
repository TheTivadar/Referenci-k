import FuvarozasDesc1 from "@/components/fuvarozasDesc1";
import FuvarozasGeppark from "@/components/FuvarozasGeppark";
import FuvarozasHero from "@/components/FuvarozasHero";
import FuvarozasSzolgaltatas from "@/components/FuvarozasSzolgaltatas";
import FuvarozasSzolgaltatas4 from "@/components/FuvarozasSzolgaltatas4";
import NavbarDash from "@/components/NavbarDash";
import ProtectedRoute from "@/components/ProtectedRoute";
import ToggleableSection from "@/components/ToogleSelection";
import { FuvarDataDash } from "@/pages/api/SzerkesztoDash";
import React, { useEffect, useState } from "react";
import { FuvarData } from "../../components/types";
import Sidebar from "../../ui/dashboard/sidebar/sidebar";
import { fetchData } from "../api/api";
import useFuvarozasData from "../api/useFuvarozasData";




const Fuvarozas = () => {
  const {
    data,
    editing,
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  } = useFuvarozasData();


  const [fuvarozasHero, setFuvarozasHero] = useState<any>();
  const [fuvarozasSzolgaltatas, setFuvarozasSzolgaltatas] = useState<any>();
  const [fuvarozasGeppark, setFuvarozasGeppark] = useState<any>();
  const [fuvarozasSzolgaltatas2, setFuvarozasSzolgaltatas2] = useState<any>();
  const [fuvarozasSzolgaltatas3, setFuvarozasSzolgaltatas3] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const fuvarozasHero = await fetchData("fuvarozasHero");
        const fuvarozasSzolgaltatas = await fetchData("fuvarozasSzolgaltatas");
        const fuvarozasGeppark = await fetchData("fuvarozasGeppark");
        const fuvarozasSzolgaltatas2 = await fetchData("fuvarozasSzolgaltatas2");
        const fuvarozasSzolgaltatas3 = await fetchData("fuvarozasSzolgaltatas3")

        setFuvarozasHero(fuvarozasHero);
        setFuvarozasSzolgaltatas(fuvarozasSzolgaltatas);
        setFuvarozasGeppark(fuvarozasGeppark);
        setFuvarozasSzolgaltatas2(fuvarozasSzolgaltatas2);
        setFuvarozasSzolgaltatas3(fuvarozasSzolgaltatas3)

      } catch (error) {
        console.error("Hiba történt az adatok betöltése közben:", error);
      }finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);
  


  const [highlightedSection, setHighlightedSection] = useState<keyof FuvarData | null>(null);

  const handleSubmitWithHighlight = async (e: React.FormEvent<HTMLFormElement>, section: keyof FuvarData) => {
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
              Fuvarozás 
          </div>
          <div className="flex flex-col gap-4">
            <ToggleableSection
                componentA={fuvarozasHero && <FuvarozasHero fuvarozasHero={fuvarozasHero}/>}
                componentB={
                  <FuvarDataDash
                    sectionName="fuvarozasHero"
                    sectionTitle="Header"
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
                componentA={fuvarozasSzolgaltatas && <FuvarozasSzolgaltatas fuvarozasSzolgaltatas={fuvarozasSzolgaltatas}/>}
                componentB={
                  <FuvarDataDash
                    sectionName="fuvarozasSzolgaltatas"
                    sectionTitle="Szolgáltatásaink"
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
                componentA={fuvarozasGeppark && <FuvarozasGeppark fuvarozasGeppark = {fuvarozasGeppark}/>}
                componentB={
                  <FuvarDataDash
                    sectionName="fuvarozasGeppark"
                    sectionTitle="Gépek"
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
                componentA={fuvarozasSzolgaltatas2 && <FuvarozasDesc1 fuvarozasSzolgaltatas2={fuvarozasSzolgaltatas2} />}
                componentB={
                  <FuvarDataDash
                    sectionName="fuvarozasSzolgaltatas2"
                    sectionTitle="Szolgáltatások2"
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
                componentA={fuvarozasSzolgaltatas3 && <FuvarozasSzolgaltatas4 fuvarozasSzolgaltatas3={fuvarozasSzolgaltatas3} />}
                componentB={
                  <FuvarDataDash
                    sectionName="fuvarozasSzolgaltatas3"
                    sectionTitle="Szolgáltatások3"
                    data={data}
                    editing={editing}
                    handleEdit={handleEdit}
                    handleSubmit={handleSubmitWithHighlight}
                    highlightedSection={highlightedSection}
                    cancelEdit={cancelEdit}
                  />
                }
              />
              {error && <p className="text-red-500">{error}</p>}
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};


export default Fuvarozas;
