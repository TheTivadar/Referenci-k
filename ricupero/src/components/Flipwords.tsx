import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Alapásás", "Fakivágás", "Földmunka", "Tereprendezés"];
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-2xl md:text-[3rem] font-bold mt-1 leading-none mx-auto text-white ml-6">
        Professzionális 
        <FlipWords words={words} /> <br />
        <p className="py-3">
            RicuPero gépeivel
        </p>
      </div>
    </div>
  );
}

export function FlipWordsFuvar(){
  const wordsFuvar =["Építési törmelék eltávolítása", "Ömlesztett árú fuvarozásivágás", "Építőanyag szállítás"];
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-2xl md:text-[3rem] font-bold mt-1 leading-none mx-auto text-white ml-6">
        Professzionális 
        <FlipWords words={wordsFuvar} /> <br />
        <p className="py-3">
            RicuPero gépeivel
        </p>
      </div>
    </div>
  );
}
