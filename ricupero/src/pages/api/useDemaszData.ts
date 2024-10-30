"use client"
import { useState, useEffect } from "react";
import { fetchData, updateData } from "./api";
import { DemaszData, GepparkItem } from "../../components/types";

const useDemaszData = () => {
  const [data, setData] = useState<DemaszData>({
    demaszHero: [],
    demaszSzolgaltatas: [],
    demaszIcon: []
  });

  const [editingdemaszHero, setEditingdemaszHero] = useState<GepparkItem | null>(null);
  const [editingdemaszSzolgaltatas, setEditingdemaszSzolgaltatas] = useState<GepparkItem | null>(null);
  const [editingdemaszIcon, setEditingdemaszIcon] = useState<GepparkItem | null>(null);
  const [highlightedSection, setHighlightedSection] = useState<keyof DemaszData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const demaszHeroData = await fetchData("demaszHero");
        const demaszSzolgaltatasData = await fetchData("demaszSzolgaltatas");
        const demaszIconData = await fetchData("demaszIcon");

        setData({
          demaszHero: demaszHeroData,
          demaszSzolgaltatas: demaszSzolgaltatasData,
          demaszIcon: demaszIconData,
        });
      } catch (error) {
        setError("Failed to load data");
      }
    };

    fetchAllData();
  }, []);

  const handleEdit = (item: GepparkItem | null, section: keyof DemaszData) => {
    switch (section) {
        case "demaszHero":
        setEditingdemaszHero(item);
        break;
      case "demaszSzolgaltatas":
        setEditingdemaszSzolgaltatas(item);
        break;
      case "demaszIcon":
        setEditingdemaszIcon(item);
        break;
      default:
        break;
    }
  };

  const cancelEdit = () => {
    setEditingdemaszHero(null)
    setEditingdemaszSzolgaltatas(null);
    setEditingdemaszIcon(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, section: keyof DemaszData) => {
    e.preventDefault();

    let editingItem: GepparkItem | null = null;
    switch (section) {
        case "demaszHero":
        editingItem = editingdemaszHero;
        break;
      case "demaszSzolgaltatas":
        editingItem = editingdemaszSzolgaltatas;
        break;
      case "demaszIcon":
        editingItem = editingdemaszIcon;
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
        demaszHero:editingdemaszHero,
        demaszSzolgaltatas: editingdemaszSzolgaltatas,
        demaszIcon: editingdemaszIcon,
    },
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  };
};

export default useDemaszData;
