"use client"
import { useState, useEffect } from "react";
import { fetchData, updateData } from "./api";
import { GepparkData, GepparkItem } from "../../components/types";

const useGepparkData = () => {
  const [data, setData] = useState<GepparkData>({
    gepparkHeader: [],
    gepparkGepek: [],
    gepparkGarantalunk: [],
    gepparkReferencia: [],
  });

  const [editinggepparkHeader, setEditinggepparkHeader] = useState<GepparkItem | null>(null);
  const [editingGepparkGepek, setEditingGepparkGepek] = useState<GepparkItem | null>(null);
  const [editingGepparkGarantalunk, setEditingGepparkGarantalunk] = useState<GepparkItem | null>(null);
  const [editingGepparkReferencia, setEditingGepparkReferencia] = useState<GepparkItem | null>(null);
  const [highlightedSection, setHighlightedSection] = useState<keyof GepparkData | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const gepparkHeaderData = await fetchData("gepparkHeader");
        const gepparkGepekData = await fetchData("gepparkGepek");
        const gepparkGarantalunkData = await fetchData("gepparkGarantalunk");
        const gepparkReferenciaData = await fetchData("gepparkReferencia");

        setData({
          gepparkHeader: gepparkHeaderData,
          gepparkGepek: gepparkGepekData,
          gepparkGarantalunk: gepparkGarantalunkData,
          gepparkReferencia: gepparkReferenciaData,
        });
      } catch (error) {
        setError("Failed to load data");
      }
    };

    fetchAllData();
  }, []);

  const handleEdit = (item: GepparkItem | null, section: keyof GepparkData) => {
    switch (section) {
        case "gepparkHeader":
        setEditinggepparkHeader(item);
        break;
      case "gepparkGepek":
        setEditingGepparkGepek(item);
        break;
      case "gepparkGarantalunk":
        setEditingGepparkGarantalunk(item);
        break;
      case "gepparkReferencia":
        setEditingGepparkReferencia(item);
        break;
      default:
        break;
    }
  };

  const cancelEdit = () => {
    setEditinggepparkHeader(null)
    setEditingGepparkGepek(null);
    setEditingGepparkGarantalunk(null);
    setEditingGepparkReferencia(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, section: keyof GepparkData) => {
    e.preventDefault();

    let editingItem: GepparkItem | null = null;
    switch (section) {
        case "gepparkHeader":
        editingItem = editinggepparkHeader;
        break;
      case "gepparkGepek":
        editingItem = editingGepparkGepek;
        break;
      case "gepparkGarantalunk":
        editingItem = editingGepparkGarantalunk;
        break;
      case "gepparkReferencia":
        editingItem = editingGepparkReferencia;
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
      gepparkHeader:editinggepparkHeader,
      gepparkGepek: editingGepparkGepek,
      gepparkGarantalunk: editingGepparkGarantalunk,
      gepparkReferencia: editingGepparkReferencia,
    },
    error,
    handleEdit,
    handleSubmit,
    cancelEdit,
  };
};

export default useGepparkData;
