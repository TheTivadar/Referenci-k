import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSeven() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Tereprendezés",
    description: "",
    header: <Skeleton />,
    icon:<Image src="/tereprendezes.jpg" width={400} height={300} alt="Image 1" className="w-full h-40 md:h-48  object-cover" />,
  },
  {
    title: "Aszfaltozás",
    description: "",
    header: <Skeleton />,
    icon: <Image src="/aszfalt.jpg" width={400} height={300} alt="Image 1" className="w-full h-40 md:h-48  object-cover" />,
  },
  {
    title: "Térkövezés gépi térkőrakóval",
    description: "",
    header: <Skeleton />,
    icon: <Image src="/tekovezes.jpg" width={400} height={300} alt="Image 1" className="w-full h-40 md:h-48  object-cover" />,
  },
  {
    title: "Közművek ásása",
    description:
      "",
    header: <Skeleton />,
    icon: <Image src="/kozmuasas.jpg" width={400} height={300} alt="Image 1" className="w-full h-40 md:h-48  object-cover" />,
  },
  {
    title: "Medence ásás",
    description: "",
    header: <Skeleton />,
    icon: <Image src="/medence.jpg" width={400} height={300} alt="Image 1" className="w-full h-40 md:h-48  object-cover" />,
  },
  {
    title: "Tuskózás",
    description: "",
    header: <Skeleton />,
    icon: <Image src="/tuskozas.jpg" width={400} height={300} alt="Image 1" className="w-full h-40 md:h-48  object-cover" />,
  },
  {
    title: "Talaj egyengetés",
    description: "",
    header: <Skeleton />,
    icon: <Image src="/talajegyengetes.jpg" width={400} height={300} alt="Image 1" className="w-full h-40 md:h-48 object-cover" />,
  },
];
