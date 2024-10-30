"use client"
import { useState, useEffect } from "react";
import { fetchData, updateData } from "./api";
import { UtepitesData, GepparkItem } from "../../components/types";

const useUtepitesData = () => {
  const [data, setData] = useState<UtepitesData>({
    utepitesHero: [],
    utepitesSzolgaltatas: [],
    utepitesGeppark: [],
    utepitesSzolgaltatas2: [],
    utepitesSzolgaltatas3: [],
  });

  const [editingutepitesHero, setEditingutepitesHero] = useState<GepparkItem | null>(null);
  const [editingutepitesSzolgaltatas, setEditingutepitesSzolgaltatas] = useState<GepparkItem | null>(null);
  const [editingutepitesGeppark, setEditingutepitesGeppark] = useState<GepparkItem | null>(null);
  const [editingutepitesSzolgaltatas2, setEditingutepitesSzolgaltatas2] = useState<GepparkItem | null>(null);
  const [editingutepitesSzolgaltatas3, setEditingutepitesSzolgaltatas3] = useState<GepparkItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [highlightedSection, setHighlightedSection] = useState<keyof UtepitesData | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const utepitesHeroData = await fetchData("utepitesHero");
        const utepitesSzolgaltatasData = await fetchData("utepitesSzolgaltatas");
        const utepitesGepparkData = await fetchData("utepitesGeppark");
        const utepitesSzolgaltatas2Data = await fetchData("utepitesSzolgaltatas2");
        const utepitesSzolgaltatas3Data = await fetchData("utepitesSzolgaltatas3");

        setData({
          utepitesHero: utepitesHeroData,
          utepitesSzolgaltatas: utepitesSzolgaltatasData,
          utepitesGeppark: utepitesGepparkData,
          utepitesSzolgaltatas2: utepitesSzolgaltatas2Data,
          utepitesSzolgaltatas3: utepitesSzolgaltatas3Data,
        });
      } catch (error) {
        setError("Failed to load data");
      }
    };

    fetchAllData();
  }, []);

  const handleEdit = (item: GepparkItem | null, section: keyof UtepitesData) => {
    switch (section) {
        case "utepitesHero":
        setEditingutepitesHero(item);
        break;
      case "utepitesSzolgaltatas":
        setEditingutepitesSzolgaltatas(item);
        break;
      case "utepitesGeppark":
        setEditingutepitesGeppark(item);
        break;
      case "utepitesSzolgaltatas2":
        setEditingutepitesSzolgaltatas2(item);
        break;
       case "utepitesSzolgaltatas3":
        setEditingutepitesSzolgaltatas3(item);
        break;
      default:
        break;
    }
  };

  const cancelEdit = () => {
    setEditingutepitesHero(null)
    setEditingutepitesSzolgaltatas(null);
    setEditingutepitesGeppark(null);
    setEditingutepitesSzolgaltatas2(null);
    setEditingutepitesSzolgaltatas3(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, section: keyof UtepitesData) => {
    e.preventDefault();

    let editingItem: GepparkItem | null = null;
    switch (section) {
        case "utepitesHero":
        editingItem = editingutepitesHero;
        break;
      case "utepitesSzolgaltatas":
        editingItem = editingutepitesSzolgaltatas;
        break;
      case "utepitesGeppark":
        editingItem = editingutepitesGeppark;
        break;
      case "utepitesSzolgaltatas2":
        editingItem = editingutepitesSzolgaltatas2;
        break;
      case "utepitesSzolgaltatas3":
        editingItem = editingutepitesSzolgaltatas3;
        break;
      default:
        return;
    }

    if (!editingItem) return;

    try {
      // Convert id to string if needed
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
      utepitesHero:editingutepitesHero,
      utepitesSzolgaltatas: editingutepitesSzolgaltatas,
      utepitesGeppark: editingutepitesGeppark,
      utepitesSzolgaltatas2: editingutepitesSzolgaltatas2,
      utepitesSzolgaltatas3: editingutepitesSzolgaltatas3,
    },
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  };
};

export default useUtepitesData;
