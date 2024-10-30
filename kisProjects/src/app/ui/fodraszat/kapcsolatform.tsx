"use client"
import React, { useState } from 'react'

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
    <div className='bg-black flex flex-col md:flex-row py-20'>
        <div className='flex flex-1 flex-col text-white text-center justify-center'>
            <h1 className='text-3xl font-bold pb-10'>Gyere és látogass el</h1>
            <h2 className='text-2xl font-semibold pb-2'>Irodánk</h2>
            <p className='text-md font-medium pb-2'>Magyarország, Budapest</p>
            <p className='text-md font-medium pb-6'>Kinizsi tér 1</p>
            <h2 className='text-2xl font-semibold pb-2'>Kapcsolat</h2>
            <p className='text-md font-medium pb-2'>info@comapny.com</p>
            <p className='text-md font-medium pb-6'>contact@company.com</p>
            <h2 className='text-2xl font-semibold pb-2'> Munkaórák</h2>
            <p className='text-md font-medium pb-2'>Hétfőtől-Péntekig 9:00-17:00</p>
            <p className='text-md font-medium pb-2'>Szombat-Vasárnap 10:00-16:00</p>
        </div>
        <div className='flex flex-1 flex-col bg-stone-900 m-12 p-6 text-white place-content-center'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-1 flex-col pr-4'>
                    <h1 className='pb-2'>Neved</h1>
                    <input
                        type="text"
                        placeholder="Teljes neved"
                        className="border p-2 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div className='flex flex-1 flex-col'>
                    <h1 className='pb-2'>Email</h1>
                    <input
                        type="email"
                        placeholder="Email cím"
                        className="border p-2 w-full"
                        value={name}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
            </div>
            <div>
                <h1 className='pb-2 pt-4'>Tárgy</h1>
                <input
                    type="tárgy"
                    placeholder="Megkeresés tárgya"
                    className="border p-2 w-full"
                    value={name}
                    onChange={(e) => setTargy(e.target.value)}
                    />
            </div>
            <div className='pb-4'>
                <h1 className='pb-2 pt-4'>Üzenet</h1>
                <input
                    type="tárgy"
                    placeholder=""
                    className="border p-2 w-full "
                    value={name}
                    onChange={(e) => setUzenet(e.target.value)}
                    />
            </div>
            <button 
                className='p-2 px-4 rounded-lg bg-orange-400 text-white font-semibold'
                onClick={handleSearch} 
                >
                Küldés
            </button>
        </div>
    </div>
  )
}

export default KapcsolatForm