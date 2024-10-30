"use client"
import { useState, useEffect } from "react";
import { fetchData, updateData } from "./api";
import { KontenerData, GepparkItem } from "../../components/types";

const useKontenerData = () => {
  const [data, setData] = useState<KontenerData>({
    kontenerHero: [],
    kontenerTipus: [],
    kontenerGarantalunk: [],
  });

  const [editingkontenerHero, setEditingkontenerHero] = useState<GepparkItem | null>(null);
  const [editingkontenerTipus, setEditingkontenerTipus] = useState<GepparkItem | null>(null);
  const [editingkontenerGarantalunk, setEditingkontenerGarantalunk] = useState<GepparkItem | null>(null);
  const [highlightedSection, setHighlightedSection] = useState<keyof KontenerData | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const kontenerHeroData = await fetchData("kontenerHero");
        const kontenerTipusData = await fetchData("kontenerTipus");
        const kontenerGarantalunkData = await fetchData("kontenerGarantalunk");

        setData({
          kontenerHero: kontenerHeroData,
          kontenerTipus: kontenerTipusData,
          kontenerGarantalunk: kontenerGarantalunkData,
        });
      } catch (error) {
        setError("Failed to load data");
      }
    };

    fetchAllData();
  }, []);

  const handleEdit = (item: GepparkItem | null, section: keyof KontenerData) => {
    switch (section) {
        case "kontenerHero":
            setEditingkontenerHero(item);
        break;
      case "kontenerTipus":
        setEditingkontenerTipus(item);
        break;
      case "kontenerGarantalunk":
        setEditingkontenerGarantalunk(item);
        break;
      default:
        break;
    }
  };

  const cancelEdit = () => {
    setEditingkontenerHero(null)
    setEditingkontenerTipus(null);
    setEditingkontenerGarantalunk(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, section: keyof KontenerData) => {
    e.preventDefault();

    let editingItem: GepparkItem | null = null;
    switch (section) {
        case "kontenerHero":
        editingItem = editingkontenerHero;
        break;
      case "kontenerTipus":
        editingItem = editingkontenerTipus;
        break;
      case "kontenerGarantalunk":
        editingItem = editingkontenerGarantalunk;
        break;
      default:
        return;
    }

    if (!editingItem) return;

    try {
      const idAsString = editingItem.id.toString();
      await updateData(section, idAsString, editingItem);
      cancelEdit();

      const updatedData = await fetchData(section);
      setData((prevData) => ({
        ...prevData,
        [section]: updatedData,
      }));
      setHighlightedSection(section);
      setTimeout(() => {
        setHighlightedSection(null);
      }, 500);
    } catch (error) {
      setError(`Failed to update ${section} item`);
    }
  };

  return {
    data,
    editing: {
      kontenerHero:editingkontenerHero,
      kontenerTipus: editingkontenerTipus,
      kontenerGarantalunk: editingkontenerGarantalunk
    },
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  };
};

export default useKontenerData;
