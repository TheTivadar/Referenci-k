import { cn } from "../utils/cn";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

interface KontenerTipus {
  id: string;
  title: string;
  body: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  fuvarozasSzolgaltatas: KontenerTipus[];
}


export function BentoGridFour({fuvarozasSzolgaltatas}: Props) {
  if (!fuvarozasSzolgaltatas) return null;

  const items = [
    {
      title: fuvarozasSzolgaltatas.find(item => item.id === "1")?.title || "Nincs cím", // Biztosítsd a fallback értéket
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: (
        <Image
          src={`/${fuvarozasSzolgaltatas.find(item => item.id === "1")?.src}`} // Dinamikusan állítsd be a src-t
          width={400}
          height={500}
          alt="Image 1"
          className="w-full h-40 md:h-60 object-cover"
        />
      ),
    },
    {
      title: fuvarozasSzolgaltatas.find(item => item.id === "2")?.title || "Nincs cím",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: (
        <Image
          src={`/${fuvarozasSzolgaltatas.find(item => item.id === "2")?.src}`}
          width={400}
          height={300}
          alt="Image 2"
          className="w-full h-40 md:h-60 object-cover"
        />
      ),
    },
    {
      title: fuvarozasSzolgaltatas.find(item => item.id === "3")?.title || "Nincs cím",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: (
        <Image
          src={`/${fuvarozasSzolgaltatas.find(item => item.id === "3")?.src}`}
          width={400}
          height={300}
          alt="Image 3"
          className="w-full h-40 md:h-60 object-cover"
        />
      ),
    },
    {
      title: fuvarozasSzolgaltatas.find(item => item.id === "4")?.title || "Nincs cím",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: (
        <Image
          src={`/${fuvarozasSzolgaltatas.find(item => item.id === "4")?.src}`}
          width={400}
          height={300}
          alt="Image 4"
          className="w-full h-40 md:h-60 object-cover"
        />
      ),
    },
  ];

  return (
    <BentoGrid className="md:max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
