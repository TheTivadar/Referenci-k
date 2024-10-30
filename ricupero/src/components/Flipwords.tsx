import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = [" Alapásás", " Fakivágás", " Földmunka", " Tereprendezés"];
  return (
    <div className="h-[40rem] flex justify-start md:justify-center items-start md:items-center">
      <div className="text-4xl md:text-[3rem] font-bold mt-1 leading-none mx-auto text-white md:ml-6p py-3">
        Professzionális 
        <FlipWords words={words} /> <br />
        <p className="py-3">
            Ricupero gépeivel
        </p>
      </div>
    </div>
  );
}

export function FlipWordsFuvar(){
  const wordsFuvar =[" Építési törmelék eltávolítása", " Ömlesztett árú fuvarozásivágás", " Építőanyag szállítás"];
  return (
    <div className="h-[40rem] flex justify-center items-center md:px-4">
      <div className="text-4xl md:text-[3rem] font-bold mt-1 leading-none mx-auto text-white md:ml-6p py-3">
        Professzionális 
        <FlipWords words={wordsFuvar} /> <br />
        <p className="py-3">
            Ricupero gépeivel
        </p>
      </div>
    </div>
  );
}
export function FlipWordsMain(){
  const wordsFuvar =[" tereprendezés", " aszfaltozás", " térkövezés", " földmunka"];
  return (
    <div className="h-[40rem] flex justify-start md:justify-center items-start md:items-center">
      <div className="text-4xl md:text-[3rem] font-bold mt-1 leading-none mx-auto text-white md:ml-6p py-3">
        Professzionális 
        <FlipWords words={wordsFuvar} />        <br />
        <p className="py-3">
            Ricupero gépeivel
        </p>
      </div>
    </div>
  );
}
