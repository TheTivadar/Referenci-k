"use client";
import React, { useState, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

interface KontenerTipus {
  id: string;
  title?: string;
  body?: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  mainReferences: KontenerTipus[];
}

export function LayoutGridD({ mainReferences }: Props) {


  const SkeletonOne = () => {
    const title1 = mainReferences.find(item => item.id === "1")?.title;
    const body1 = mainReferences.find(item => item.id === "1")?.body;
    
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          {title1}
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {body1}
        </p>
      </div>
    );
  };

  const SkeletonTwo = () => {
    const title2 = mainReferences.find(item => item.id === "2")?.title;
    const body2 = mainReferences.find(item => item.id === "2")?.body;
    
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          {title2}
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {body2}
        </p>
      </div>
    );
  };

  const SkeletonThree = () => {
    const title3 = mainReferences.find(item => item.id === "3")?.title;
    const body3 = mainReferences.find(item => item.id === "3")?.body;
    
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          {title3}
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {body3}
        </p>
      </div>
    );
  };

  const SkeletonFour = () => {
    const title4 = mainReferences.find(item => item.id === "4")?.title;
    const body4 = mainReferences.find(item => item.id === "4")?.body;
    
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          {title4}
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {body4}
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/munkagep.jpg",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/munkagep.jpg",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/munkagep.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/munkagep.jpg",
    },
  ];

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
