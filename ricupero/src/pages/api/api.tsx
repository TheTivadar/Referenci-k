// api.ts
import { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';



export async function fetchData(endpoint: string) {
/*
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect
    };*/
    try{
      const res = await fetch(`https://gatium.hu/api/config/ricupero-config/${endpoint}`, {
        next: { revalidate: 3600 }, // Cache idő: 1 óra
        cache: 'force-cache', // Kényszerített cache-elés szerveroldalon
      });
      return res.json();
    }catch(error){
      throw new Error(`Failed to fetch ${endpoint}`);
    }
  }
  export async function fetchAlData() {

    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect
    };
    try{
      const res = await fetch(`https://gatium.hu/api/config/ricupero-config`,requestOptions);
      return res.json();
    }catch(error){
      throw new Error(`Failed to fetch `);
    }
  }

  export async function fetchAllData() {
    const data = await fetchAlData(); 
  
    return {
        mainHeader: data.mainHeader,
        mainSzolgaltatasok: data.mainSzolgaltatasok,
        mainCard: data.mainCard,
        mainContent: data.mainContent,
        mainReferences: data.mainReferences,
        mainLogo: data.mainLogo,
        gepparkHeader: data.gepparkHeader,
        gepparkGepek: data.gepparkGepek,
        gepparkGarantalunk: data.gepparkGarantalunk,
        gepparkReferencia: data.gepparkReferencia,
        fuvarozasHero: data.fuvarozasHero,
        fuvarozasSzolgaltatas: data.fuvarozasSzolgaltatas,
        fuvarozasGeppark: data.fuvarozasGeppark,
        fuvarozasSzolgaltatas2: data.fuvarozasSzolgaltatas2,
        fuvarozasSzolgaltatas3: data.fuvarozasSzolgaltatas3,
        utepitesHero: data.utepitesHero,
        utepitesSzolgaltatas: data.utepitesSzolgaltatas,
        utepitesGeppark: data.utepitesGeppark,
        utepitesSzolgaltatas2: data.utepitesSzolgaltatas2,
        utepitesSzolgaltatas3: data.utepitesSzolgaltatas3,
        utseproHero: data.utseproHero,
        utseproKontent: data.utseproKontent,
        utseproGarantalunk: data.utseproGarantalunk,
        demaszHero: data.demaszHero,
        demaszSzolgaltatas: data.demaszSzolgaltatas,
        demaszIcon: data.demaszIcon,
        kontenerHero: data.kontenerHero,
        kontenerTipus: data.kontenerTipus,
        kontenerGarantalunk: data.kontenerGarantalunk,
    };
  }
  

  export async function login(username: string, password: string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
            username,
            password,
        }),
    };

    try {
        const response = await fetch(`https://gatium.hu/api/login/`, requestOptions);
        
        if (!response.ok) {
            // A hibát a szerver visszaadott státuszának és szövegének alapján kezeljük
            const errorData = await response.json();
            throw new Error(`Login failed: ${errorData.detail.map((err: { msg: string }) => err.msg).join(', ')}`);
        }

        // Válasz feldolgozása
        const data = await response.json();

        // Kivonjuk a token-t a válaszból
        const token = data.access_token; // access_token az API válaszból

        // Visszatérünk a token-nel és a token típusával
        return {
            token,
            tokenType: data.token_type,
        };
    } catch (error) {
        throw new Error(`Error in login:`);
    }
}

export const logOut = () => {
  // Töröljük a tárolt token-t és token type-ot
  localStorage.removeItem('access_token');
  localStorage.removeItem('token_type');
  localStorage.removeItem('user');

  // Itt irányítsd át a felhasználót a bejelentkező oldalra vagy a főoldalra
  window.location.href = '/login'; // Vagy a kívánt URL
};


export const AuthMe = async () => {
  const token = localStorage.getItem('access_token'); 
  if (token) {
      const response = await fetch('https://gatium.hu/api/auth/me', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`, // A tokent az Authorization fejlécben kell átadni
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          return { authenticated: false, user: null }; // Ha a válasz nem sikeres
      }

      const userData = await response.json(); // Válasz JSON-ként

      return {
          authenticated: true,
          user: userData, // Az API válaszát közvetlenül visszaadjuk
      };
  }
  return { authenticated: false, user: null };
};

  
  export async function updateData(endpoint: string, id: string, data: any) {

    const token = localStorage.getItem('access_token');
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
  
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(data),
    };
  
    try {
      const res = await fetch(`https://gatium.hu/api/config/ricupero-config/${endpoint}/${id}`);
      if (!res.ok) {
        throw new Error(`Failed to update ${endpoint}`);
      }
  
      return res.json();
    } catch (error) {
      throw new Error(`Error in updateData`);
    }
  }


  import React from 'react'
  
  const Api = () => {
    return (
      <div>Api</div>
    )
  }
  
  export default Api

/*
export async function fetchData(endpoint: string) {
  const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTAwMDAwMiIsInVuaXF1ZSI6IiQyYiQxMiRQQmppZXROc2Q0bEFpOWd5MjQ3LjUuVlFhOW9vMVZ1NG5vNnd4UDBCNnJ4aFpIbTZNZCIsImV4cCI6MTcyODcyNzAwNn0.I0T-3U0FLrGlJrAjRSZgURTM1Den2_4EHc56F5TSaPA");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect
    };
    try{
      const res = await fetch(`https://gatium.hu/api/ricupero-config/${endpoint}`,requestOptions);
      return res.json();
    }catch(error){
      throw new Error(`Failed to fetch ${endpoint}`);
    }
  }
*/