import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridFour() {
  return (
    <BentoGrid className="md:max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
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

const items = [
  {
    title: "Építési törmelék eltávolítása",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <img src="/munkagep.jpg" alt="Image 1" className="w-full h-40 object-cover" />,
  },
  {
    title: "Ömlesztett árú fuvarozás",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <img src="/munkagep.jpg" alt="Image 1" className="w-full h-40 object-cover" />,
  },
  {
    title: "Bontás",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <img src="/munkagep.jpg" alt="Image 1" className="w-full h-40 object-cover" />,
  },
  {
    title: "Építőanyag szállítás",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <img src="/munkagep.jpg" alt="Image 1" className="w-full h-40 object-cover" />,
  },
];
