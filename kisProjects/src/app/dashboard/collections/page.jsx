"use client"
import React, { useEffect, useState } from 'react';
import { fetchCollections } from '../../fetchData';  
import Image from 'next/image';

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCollections();  
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);  
      }
    };

    getData();  
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div className='pt-6'>
    <div className=' w-5/6 mx-auto rounded-t-lg overflow-hidden flex flex-row gap-8 pb-4 justify-end'>
      <div className='rounded-lg p-2 bg-slate-700 hover:bg-slate-500'>
        <button>Termék hozzadása</button>
      </div>
      <div className=' rounded-lg p-2 bg-red-700 hover:bg-red-500'>
        <button>Termék törlése</button>
      </div>
    </div>
    <table className="table-auto w-5/6 mx-auto rounded-t-lg overflow-hidden">
      <thead>
        <tr className="text-left bg-gray-200 text-black rounded-t-lg">
          <th className="p-4" style={{ width: '10%'}}>Kiválasztás</th>
          <th className="p-4" style={{ width: '10%'}}>Kép</th>
          <th className="p-4" style={{ width: '60%'}}>Termék</th>
          <th className="p-4" style={{ width: '20%'}}>Termékek száma</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={item.id}
            className={`bg-slate-50 border decoration-bl hover:bg-slate-200 ${index === items.length - 1 ? 'rounded-b-lg' : ''}`}
          >
            <td className="p-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
            </td>
            <td className="p-2">
              <Image width={400} height={400} src={item.img || "/noavatar.png"} alt={item.name} className="w-8 h-8 object-cover rounded-md" />
            </td>
            <td className="p-2">
              <span className="font-semibold text-gray-800">{item.name}</span>
            </td>
            <td className="p-2">
              <span className="font-semibold text-gray-800">{item.category_id}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default Products;
