"use client"
import React, { useState } from 'react';

const FilterBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSearch = () => {
    console.log("Search:", searchQuery);
    console.log("Category:", category);
    console.log("Sort by:", sortBy);
  };

  return (
    <div className="bg-gray-100 p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="font-bold text-xl">Szűrő</div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Keresés a bútorok között"
          className="border rounded-md p-2 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div>
        <label className="mr-2">Kategóriák:</label>
        <select
          className="border rounded-md p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Kiválasztás</option>
          <option value="sofas">Kanapé</option>
          <option value="chairs">Ágy</option>
          <option value="tables">Szőnyeg</option>
        </select>
      </div>

      {/* Sort by Filter */}
      <div>
        <label className="mr-2">Rendszerezés:</label>
        <select
          className="border rounded-md p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Kiválasztás</option>
          <option value="price-asc">Ár: Alacsonytól magasig</option>
          <option value="price-desc">Ár: Magastól alacsonyig</option>
          <option value="newest">Legújabbak</option>
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default FilterBar;
