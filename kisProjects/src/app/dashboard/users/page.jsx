"use client"
import React, { useEffect, useState } from 'react';
import {  fetchUsers } from '../../fetchData';  
import { IoIosCheckmarkCircle } from "react-icons/io";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUsers();  
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
        <button>Felhasználó hozzadása</button>
      </div>
      <div className=' rounded-lg p-2 bg-red-700 hover:bg-red-500'>
        <button>Felhasználó törlése</button>
      </div>
    </div>
    <table className="table-auto w-5/6 mx-auto rounded-t-lg overflow-hidden">
      <thead>
        <tr className="text-left bg-gray-200 text-black rounded-t-lg">
          <th className="p-2 text-lg py-4" style={{ width: '10%'}}><IoIosCheckmarkCircle /></th>
          <th className="p-2 py-4" style={{ width: '25%'}}>Felhasználó neve</th>
          <th className="p-2 py-4" style={{ width: '20%'}}>Hírlevél feliratkozás</th>
          <th className="p-2 py-4" style={{ width: '20%'}}>Helyzet</th>
          <th className="p-2 py-4" style={{ width: '10%'}}>Rendelés</th>
          <th className="p-2 py-4" style={{ width: '15%'}}>Elköltött összeg</th>
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
              <span className="font-semibold text-gray-800">{item.name}</span>
            </td>
            <td className='p-2'>
              <span className={`text-sm ${item.marketing? 'bg-green-400 p-2 rounded-lg text-black' : 'bg-slate-600 p-2 rounded-lg text-black'}`}>{item.markting ? "Feliratkozot" : "Elutasította"}</span>
            </td>
            <td className="p-2">
              <span className="font-semibold text-gray-800">location</span>
            </td>
            <td className="p-2">
              <span className="font-semibold text-gray-800">rendelés</span>
            </td>
            <td className="p-2">
              <span className="font-semibold text-gray-800">7000ft</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default Products;
