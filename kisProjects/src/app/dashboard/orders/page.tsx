"use client"
import React, { useEffect, useState } from 'react';
/*import {  fetchOrders } from '../../fetchData';  */

const Orders = () => {
  /*const [orders, setItems] = useState([]);*/
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const getData = async () => {
      try {
        /*const data = await fetchOrders();*/  
        /*setItems(data);*/
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
        <button>Rendelés hozzadása</button>
      </div>
      <div className=' rounded-lg p-2 bg-red-700 hover:bg-red-500'>
        <button>Rendelés törlése</button>
      </div>
    </div>
    <table className="table-auto w-8/9 mx-auto rounded-t-lg overflow-hidden ">
      <thead>
        <tr className="text-left bg-gray-200 text-black rounded-t-lg text-sm font-light">
          <th className="p-4">Rendelés</th>
          <th className="p-4">Időpont</th>
          <th className="p-4">Felhasználó</th>
          <th className="p-4">Összeg</th>
          <th className="p-4">Fizetés státusza</th>
          <th className="p-4">Összepakolás státusza</th>
          <th className="p-4">Termék szám</th>
          <th className="p-4">Szállítás státusza</th>
          <th className="p-4">Szállítás típusa</th>
        </tr>
      </thead>
      <tbody>
        {/*{orders.map((item, index) => (
          <tr
            key={item.id}
            className={`bg-slate-50 border decoration-bl hover:bg-slate-200 ${index === items.length - 1 ? 'rounded-b-lg' : ''}`}
          >
            <td className="p-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
            </td>
            <td className="p-2">
              <img src={item.img || "/noavatar.png"} alt={item.name} className="w-8 h-8 object-cover rounded-md" />
            </td>
            <td className="p-2">
              <span className="font-semibold text-gray-800">{item.name}</span>
            </td>
            <td className="p-2">
              <span className="font-semibold text-gray-800">{item.category_id}</span>
            </td>
            <td className="p-2">
              <span className={`text-sm ${item.active? 'bg-green-400 p-2 rounded-lg text-black' : 'bg-slate-600 p-2 rounded-lg text-black'}`}>{item.active ? "Available" : "Unavailable"}</span>
            </td>
          </tr>
        ))}*/}
      </tbody>
    </table>
  </div>
  
  );
};

export default Orders;
