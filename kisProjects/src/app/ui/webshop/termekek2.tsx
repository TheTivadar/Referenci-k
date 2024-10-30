"use client";
import React, { useEffect, useState } from 'react';


type Category = {
  id: number;
  name: string;
  parent_id: number | null;
};

// Külön függvény a kategóriák lekérésére
async function fetchCategories() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMDAxOSIsInVuaXF1ZSI6IiQyYiIsImV4cCI6MTcyNTk4NzA3NX0.BX4FLA4X2p6lzbt0NwsImG3qQufsz9c3tiiYcBIRNxI");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" 
  };

  try {
    const response = await fetch("https://test.gatium.hu/api/categories");
    if (!response.ok) {
      throw new Error(`Hiba történt: ${response.statusText}`);
    }
    const result = await response.json();
    return result; 
  } catch (error) {
    console.error('Fetch hiba:', error);
    throw error; // Ha hiba van, azt továbbadjuk
  }
}

export default function Termekek2() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const result = await fetchCategories(); 
        setCategories(result); 
        setLoading(false); 
      } catch (error: any) {
        setError(error.message); 
        setLoading(false); 
      }
    };

    getCategories(); // Függvény meghívása
  }, []); // Üres lista, csak egyszer fut le a komponens betöltésekor

  if (loading) {
    return <div>Adatok betöltése...</div>;
  }

  if (error) {
    return <div>Hiba történt: {error}</div>;
  }

  return (
    <div>
      <h1>Kategóriák</h1>
      <ul className="grid grid-cols-4 gap-4 items-center">
        {categories.map((category) => (
          <li key={category.id} className="w-52 mx-4">
            <div className="p-2 text-sm text-black bg-gray-400">
              {category.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
