"use client"
import { useState, useEffect } from "react";
import { fetchData, updateData } from "./api";
import { DashboardData, GepparkItem } from "../../components/types";

const useDashboardData = () => {
  const [data, setData] = useState<DashboardData>({
    mainHeader: [],
    mainSzolgaltatasok: [],
    mainCard: [],
    mainContent: [],
    mainLogo: [],
    mainReferences: [],
  });

  const [editingMainHeader, setEditingMainHeader] = useState<GepparkItem | null>(null);
  const [editingMainSzolgaltatasok, setEditingMainSzolgaltatasok] = useState<GepparkItem | null>(null);
  const [editingMainCard, setEditingMainCard] = useState<GepparkItem | null>(null);
  const [editingMainContent, setEditingMainContent] = useState<GepparkItem | null>(null);
  const [editingMainLogo, setEditingMainLogo] = useState<GepparkItem | null>(null);
  const [editingMainReferences, setEditingMainReferences] = useState<GepparkItem | null>(null);
  const [highlightedSection, setHighlightedSection] = useState<keyof DashboardData | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const mainHeaderData = await fetchData("mainHeader");
        const mainSzolgaltatasokData = await fetchData("mainSzolgaltatasok");
        const mainCardData = await fetchData("mainCard");
        const mainContentData = await fetchData("mainContent");
        const mainLogoData = await fetchData("mainLogo");
        const mainReferencesData = await fetchData("mainReferences");

        setData({
          mainHeader: mainHeaderData,
          mainSzolgaltatasok: mainSzolgaltatasokData,
          mainCard: mainCardData,
          mainContent: mainContentData,
          mainLogo: mainLogoData,
          mainReferences: mainReferencesData,
        });
      } catch (error) {
        setError("Failed to load data");
      }
    };

    fetchAllData();
  }, []);

  const handleEdit = (item: GepparkItem | null, section: keyof DashboardData) => {
    switch (section) {
      case "mainHeader":
        setEditingMainHeader(item);
        break;
      case "mainSzolgaltatasok":
        setEditingMainSzolgaltatasok(item);
        break;
      case "mainCard":
        setEditingMainCard(item);
        break;
      case "mainContent":
        setEditingMainContent(item);
        break;
      case "mainLogo":
        setEditingMainLogo(item);
        break;
      case "mainReferences":
        setEditingMainReferences(item);
        break;
      default:
        break;
    }
  };

  const cancelEdit = () => {
    setEditingMainHeader(null);
    setEditingMainSzolgaltatasok(null);
    setEditingMainCard(null);
    setEditingMainContent(null);
    setEditingMainLogo(null);
    setEditingMainReferences(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, section: keyof DashboardData) => {
    e.preventDefault();

    let editingItem: GepparkItem | null = null;
    switch (section) {
      case "mainHeader":
        editingItem = editingMainHeader;
        break;
      case "mainSzolgaltatasok":
        editingItem = editingMainSzolgaltatasok;
        break;
      case "mainCard":
        editingItem = editingMainCard;
        break;
      case "mainContent":
        editingItem = editingMainContent;
        break;
      case "mainLogo":
        editingItem = editingMainLogo;
        break;
      case "mainReferences":
        editingItem = editingMainReferences;
        break;
      default:
        return;
    }

    if (!editingItem) return;

    try {
      await updateData(section, editingItem.id, editingItem);
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
      mainHeader: editingMainHeader,
      mainSzolgaltatasok: editingMainSzolgaltatasok,
      mainCard: editingMainCard,
      mainContent: editingMainContent,
      mainLogo: editingMainLogo,
      mainReferences: editingMainReferences,
    },
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  };
};

export default useDashboardData;
