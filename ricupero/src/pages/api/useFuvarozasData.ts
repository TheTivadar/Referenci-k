"use client"
import { useState, useEffect } from "react";
import { fetchData, updateData } from "./api";
import { FuvarData, GepparkItem } from "../../components/types";

const useFuvarozasData = () => {
  const [data, setData] = useState<FuvarData>({
    fuvarozasHero: [],
    fuvarozasSzolgaltatas: [],
    fuvarozasGeppark: [],
    fuvarozasSzolgaltatas2: [],
    fuvarozasSzolgaltatas3: [],
  });

  const [editingfuvarozasHero, setEditingfuvarozasHero] = useState<GepparkItem | null>(null);
  const [editingfuvarozasSzolgaltatas, setEditingfuvarozasSzolgaltatas] = useState<GepparkItem | null>(null);
  const [editingfuvarozasGeppark, setEditingfuvarozasGeppark] = useState<GepparkItem | null>(null);
  const [editingfuvarozasSzolgaltatas2, setEditingfuvarozasSzolgaltatas2] = useState<GepparkItem | null>(null);
  const [editingfuvarozasSzolgaltatas3, setEditingfuvarozasSzolgaltatas3] = useState<GepparkItem | null>(null);
  const [highlightedSection, setHighlightedSection] = useState<keyof FuvarData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const fuvarozasHeroData = await fetchData("fuvarozasHero");
        const fuvarozasSzolgaltatasData = await fetchData("fuvarozasSzolgaltatas");
        const fuvarozasGepparkData = await fetchData("fuvarozasGeppark");
        const fuvarozasSzolgaltatas2Data = await fetchData("fuvarozasSzolgaltatas2");
        const fuvarozasSzolgaltatas3Data = await fetchData("fuvarozasSzolgaltatas3");

        setData({
          fuvarozasHero: fuvarozasHeroData,
          fuvarozasSzolgaltatas: fuvarozasSzolgaltatasData,
          fuvarozasGeppark: fuvarozasGepparkData,
          fuvarozasSzolgaltatas2: fuvarozasSzolgaltatas2Data,
          fuvarozasSzolgaltatas3: fuvarozasSzolgaltatas3Data,
        });
      } catch (error) {
        setError("Failed to load data");
      }
    };

    fetchAllData();
  }, []);

  const handleEdit = (item: GepparkItem | null, section: keyof FuvarData) => {
    switch (section) {
        case "fuvarozasHero":
        setEditingfuvarozasHero(item);
        break;
      case "fuvarozasSzolgaltatas":
        setEditingfuvarozasSzolgaltatas(item);
        break;
      case "fuvarozasGeppark":
        setEditingfuvarozasGeppark(item);
        break;
      case "fuvarozasSzolgaltatas2":
        setEditingfuvarozasSzolgaltatas2(item);
        break;
       case "fuvarozasSzolgaltatas3":
        setEditingfuvarozasSzolgaltatas3(item);
        break;
      default:
        break;
    }
  };

  const cancelEdit = () => {
    setEditingfuvarozasHero(null)
    setEditingfuvarozasSzolgaltatas(null);
    setEditingfuvarozasGeppark(null);
    setEditingfuvarozasSzolgaltatas2(null);
    setEditingfuvarozasSzolgaltatas3(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, section: keyof FuvarData) => {
    e.preventDefault();

    let editingItem: GepparkItem | null = null;
    switch (section) {
        case "fuvarozasHero":
        editingItem = editingfuvarozasHero;
        break;
      case "fuvarozasSzolgaltatas":
        editingItem = editingfuvarozasSzolgaltatas;
        break;
      case "fuvarozasGeppark":
        editingItem = editingfuvarozasGeppark;
        break;
      case "fuvarozasSzolgaltatas2":
        editingItem = editingfuvarozasSzolgaltatas2;
        break;
      case "fuvarozasSzolgaltatas3":
        editingItem = editingfuvarozasSzolgaltatas3;
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
      fuvarozasHero:editingfuvarozasHero,
      fuvarozasSzolgaltatas: editingfuvarozasSzolgaltatas,
      fuvarozasGeppark: editingfuvarozasGeppark,
      fuvarozasSzolgaltatas2: editingfuvarozasSzolgaltatas2,
      fuvarozasSzolgaltatas3: editingfuvarozasSzolgaltatas3,
    },
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  };
};

export default useFuvarozasData;
