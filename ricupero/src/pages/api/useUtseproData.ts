"use client"
import { useState, useEffect } from "react";
import { fetchData, updateData } from "./api";
import { UtseproData, GepparkItem } from "../../components/types";

const useUtseproData = () => {
  const [data, setData] = useState<UtseproData>({
    utseproHero: [],
    utseproKontent: [],
    utseproGarantalunk: [],
  });

  const [editingutseproHero, setEditingutseproHero] = useState<GepparkItem | null>(null);
  const [editingutseproKontent, setEditingutseproKontent] = useState<GepparkItem | null>(null);
  const [editingutseproGarantalunk, setEditingutseproGarantalunk] = useState<GepparkItem | null>(null);
  const [highlightedSection, setHighlightedSection] = useState<keyof UtseproData | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const utseproHeroData = await fetchData("utseproHero");
        const utseproKontentData = await fetchData("utseproKontent");
        const utseproGarantalunkData = await fetchData("utseproGarantalunk");

        setData({
          utseproHero: utseproHeroData,
          utseproKontent: utseproKontentData,
          utseproGarantalunk: utseproGarantalunkData,
        });
      } catch (error) {
        setError("Failed to load data");
      }
    };

    fetchAllData();
  }, []);

  const handleEdit = (item: GepparkItem | null, section: keyof UtseproData) => {
    switch (section) {
        case "utseproHero":
            setEditingutseproHero(item);
        break;
      case "utseproKontent":
        setEditingutseproKontent(item);
        break;
      case "utseproGarantalunk":
        setEditingutseproGarantalunk(item);
        break;
      default:
        break;
    }
  };

  const cancelEdit = () => {
    setEditingutseproHero(null)
    setEditingutseproKontent(null);
    setEditingutseproGarantalunk(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, section: keyof UtseproData) => {
    e.preventDefault();

    let editingItem: GepparkItem | null = null;
    switch (section) {
        case "utseproHero":
        editingItem = editingutseproHero;
        break;
      case "utseproKontent":
        editingItem = editingutseproKontent;
        break;
      case "utseproGarantalunk":
        editingItem = editingutseproGarantalunk;
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
    }
  };

  return {
    data,
    editing: {
        utseproHero:editingutseproHero,
        utseproKontent: editingutseproKontent,
        utseproGarantalunk: editingutseproGarantalunk
    },
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  };
};

export default useUtseproData;
