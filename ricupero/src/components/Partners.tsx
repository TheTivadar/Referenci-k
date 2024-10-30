import React, { useEffect, useState } from "react"
import CountUp from 'react-countup';

interface KontenerTipus {
  id: string;
  title?: string;
  body?: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  mainLogo: KontenerTipus[];
}

interface ExperienceProps {
  title: React.ReactNode;
  number: React.ReactNode;
}

async function getmainItem() {
  const res = await fetch("http://localhost:4000/mainLogo");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}


const Experience: React.FC<ExperienceProps> = ({ title, number }) => {
  return (
    <div className="relative flex justify-center items-center">
      <span className="text-gray-200 text-[150px] font-bold ">
      {number}
        </span>
      <span className="text-gray-900 text-xl font-bold absolute whitespace-nowrap">{title}</span>
    </div>
  );
};

export default function Logo({ mainLogo }: Props) {
    if (!mainLogo) return null;
    const body1 = mainLogo.find(item => item.id === "1")?.body;
    const body2 = mainLogo.find(item => item.id === "2")?.body;
    const body3 = mainLogo.find(item => item.id === "3")?.body;
    const body4 = mainLogo.find(item => item.id === "4")?.body;
    const body5 = mainLogo.find(item => item.id === "5")?.body;
    const body6 = mainLogo.find(item => item.id === "6")?.body;

    return (
      <div className="bg-white pb-24 sm:pb-32  sm:pt-16 relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between space-x-4">
          <Experience title={body1} number={body2} />
          <Experience title={body3} number={body4} />
          <Experience title={body5} number={body6} />
          </div>
        </div>
      </div>
    )
  }
  