"use client"
import React, { useState } from 'react';
import { FaTrophy,FaLocationDot  } from "react-icons/fa6";

const KapcsolatForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [targy, setTargy] = useState("");
    const [uzenet, setUzenet] = useState("");
  
    const handleSearch = () => {
      console.log("Nev:", name);
      console.log("Email:", email);
      console.log("Targy:", targy);
      console.log("Uzenet:", uzenet);
    };

  return (
    <div className='pb-20'>
        <div className='flex flex-col items-center py-10'>
            <h1 className='text-3xl font-bold pb-2'>Miben segíthetünk?</h1>
            <p className='text-lg font-semibold pb-6 text-center text-gray-600'>További információért termékeinkről és szolgáltatásainkról, <br/>kérjük, bátran írjon nekünk e-mailt. Munkatársaink mindig rendelkezésére állnak, hogy segítsenek. Ne habozzon!</p>
        </div>
        <div className='flex flex-col md:flex-row py-10'>
            <div className='flex-1 flex flex-col space-y-10 md:space-y-16 justify-center  '>
                <div className="flex flex-row items-center justify-center">
                    <FaLocationDot className="mr-4 text-3xl" />
                    <div>
                        <h1 className="text-xl font-bold">Cím</h1>
                        <p className="text-lg font-normal">Budapest,kinizsi tér 1</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <FaTrophy  className='mr-4 text-3xl'/>
                    <div>
                        <h1 className='text-xl font-bold'>Telefonszám</h1>
                        <p className='text-lg font-normal'>+36 70 347 1251</p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <FaTrophy  className='mr-4 text-3xl'/>
                    <div>
                        <h1 className='text-xl font-bold'>Nyitvatartási idő</h1>
                        <p className='text-lg font-normal'>Hétfőtől-péntekig 9:00-22:00</p>
                        <p className='text-lg font-normal'>Szombat-Vasárnap 10:00-21:00</p>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <div className='flex flex-col pb-4'>
                    <h1 className='pb-2'>Neved</h1>
                    <input
                    type="text"
                    placeholder="Teljes neved"
                    className="border rounded-md p-2 w-3/5"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col pb-4 text-black'>
                    <h1 className='pb-2'>Email</h1>
                    <input
                    type="text"
                    placeholder="Email cím"
                    className="border rounded-md p-2 w-3/5 text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col pb-4'>
                    <h1 className='pb-2'>Tárgy</h1>
                    <input
                    type="text"
                    placeholder="Megkeresés tárgya"
                    className="border rounded-md p-2 w-3/5"
                    value={targy}
                    onChange={(e) => setTargy(e.target.value)}
                    />
                </div>
                <div className='flex flex-col pb-4'>
                    <h1 className='pb-2'>Üzenet</h1>
                    <input
                    type="text"
                    placeholder="Megkeresés üzenete"
                    className="border rounded-md p-2 w-3/5"
                    value={uzenet}
                    onChange={(e) => setUzenet(e.target.value)}
                    />
                </div>
                <button className='p-2 px-4 rounded-lg bg-orange-400 text-white font-semibold'>Küldés</button>
            </div>
        </div>
    </div>
  )
}

export default KapcsolatForm