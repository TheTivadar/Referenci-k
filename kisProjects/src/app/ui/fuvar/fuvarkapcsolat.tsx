"use client"
import Link from 'next/link'
import React, { useState } from 'react';

const FuvarKapcsolatComp = () => {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (consent) {
        console.log({
          lastName,
          firstName,
          email,
          consent
        });
        // Tisztítás a küldés után
        setLastName('');
        setFirstName('');
        setEmail('');
        setConsent(false);
      } else {
        alert('A hírlevélre való feliratkozáshoz el kell fogadnod az adatkezelést!');
      }
    };

  return (
    <div>
    <div className='max-w-5xl mx-auto pt-8 md:pt-20'>
        <h1 className="text-white text-3xl md:text-5xl font-bold">Kapcsolat</h1>
        <div className='flex flex-col md:flex-row text-white pt-8 md:pt-16'>
            <div>
                <p className='font-bold'>Székhely: 2120 Dunakeszi, Pallag u. 7.</p>
                <p>Telefon: +36 20 414 5555 +36 20 3 233 233</p>
                <p>E-mail: info@bhstrans.hu</p>
                <p>Depóink: Debrecen, Nagytarcsa, Keszthely, Miskolc, Szeged, Szikszó, Székesfehérvár, Pécs</p>
            </div>
            <div className='pt-10 md:pt-0'>
                <p className='font-bold'>BHS Trans Srl.</p>
                <p>Székhely: RO 547605 Ungheni, Nr.261/R, Jud.Mureș, România</p>
                <p>E-mail: info@bhstrans.ro</p>
                <p>Depóink: Konstanca, Nagyvárad, Temesvár</p>
            </div>
        </div>
    </div>
        <Link href="/jelentkezes">
            <button
            className="bg-red-600 p-2 w-full  font-bold hover:bg-red-800 mt-8 md:mt-20 place-content-center"
            >
            Ajánlatkérés
            </button>
        </Link>
        <div className="max-w-3xl mx-auto p-6 ">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-start">Iratkozz fel hírlevelünkre</h2>
      <form onSubmit={handleSubmit}>
        {/* Vezetéknév */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-lg font-semibold text-white">
            Vezetéknév
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Add meg a vezetékneved"
            required
          />
        </div>

        {/* Keresztnév */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-lg font-semibold text-white">
            Keresztnév
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Add meg a keresztneved"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Adja meg kedvenc emailcímét!"
            required
          />
        </div>

        {/* Adatkezelési hozzájárulás */}
        <div className="mb-4 flex items-center">
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label htmlFor="consent" className="ml-2 block text-lg font-semibold text-white">
            Hozzájárulok, hogy a(z) Gatium Crs rendszerében kezelje az adataimat.
          </label>
        </div>

        
        <div className='flex justify-end pt-4 '>
        <button
            type='submit'
            className="bg-red-600 pr-8 pl-10 lg:pl-16 py-2 font-bold hover:bg-red-800"
            style={{ clipPath: 'polygon(25% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
            >
            Feliratkozom!
            </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default FuvarKapcsolatComp
