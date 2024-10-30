import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

interface KontenerTipus {
  id: string;
  title?: string;
  body?: string;
  description?: string;
  prop1?: string;
  src?: string;
}

interface Props {
  utepitesSzolgaltatas: KontenerTipus[];
}

export function BentoGridSeven({ utepitesSzolgaltatas }: Props) {
  if (!utepitesSzolgaltatas) return null;
  const items = utepitesSzolgaltatas.map((item, i) => ({
    title: item.title || "Alapértelmezett cím",
    header: <Skeleton />, 
    icon: (
      <Image
        src={`/${item.src}` || "/default.jpg"} // Ha nincs kép, alapértelmezett képet használ
        width={400}
        height={500}
        alt={`Image ${i + 1}`}
        className="w-full h-40 md:h-60 object-cover"
      />
    ),
  }));

  return (
    <div>
      <div id="title" className="text-center my-10 md:my-20">
        <h1 className="text-4xl lg:text-6xl font-bold text-black">Szolgáltatásink!</h1>
        <div className="flex justify-center">
          <div className="w-2/6 border-b-4 border-yellow-500 font-extrabold pt-2"></div>
        </div>
      </div>
      <BentoGrid className="max-w-7xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// Skeleton komponens a helykitöltéshez
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
