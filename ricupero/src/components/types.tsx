// types.ts
import React from 'react'

const Types = () => {
  return (
    <div>Types</div>
  )
}

export default Types


export interface DashboardItem {
    id: string;
    body: string;
  }
 
  
  export interface DashboardData {
    mainHeader: GepparkItem[];
    mainSzolgaltatasok: GepparkItem[];
    mainCard: GepparkItem[];
    mainContent: GepparkItem[];
    mainLogo: GepparkItem[];
    mainReferences: GepparkItem[];
  }


  export interface GepparkItem {
    id: string; 
    title?: string; 
    body?: string;  
    src?:string;
    description?: string; 
    prop1?: string; 
    prop2?: string; 
    prop3?: string; 
    prop4?: string; 
    category?:string;
  }
  
  export interface GepparkData {
    gepparkHeader:GepparkItem[];
    gepparkGepek: GepparkItem[];
    gepparkGarantalunk: GepparkItem[];
    gepparkReferencia: GepparkItem[];
  }

  export interface FuvarData {
    fuvarozasHero:GepparkItem[];
    fuvarozasSzolgaltatas: GepparkItem[];
    fuvarozasGeppark: GepparkItem[];
    fuvarozasSzolgaltatas2: GepparkItem[];
    fuvarozasSzolgaltatas3: GepparkItem[];
  }
  export interface UtepitesData {
    utepitesHero:GepparkItem[];
    utepitesSzolgaltatas: GepparkItem[];
    utepitesGeppark: GepparkItem[];
    utepitesSzolgaltatas2: GepparkItem[];
    utepitesSzolgaltatas3: GepparkItem[];
  }

  export interface UtseproData {
    utseproHero:GepparkItem[];
    utseproKontent: GepparkItem[];
    utseproGarantalunk: GepparkItem[];
  }

  export interface DemaszData {
    demaszHero:GepparkItem[];
    demaszSzolgaltatas: GepparkItem[];
    demaszIcon: GepparkItem[];
  }

  export interface KontenerData {
    kontenerHero:GepparkItem[];
    kontenerTipus: GepparkItem[];
    kontenerGarantalunk: GepparkItem[];
  }

