import { cn } from "../utils/cn";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import OrangeBackground from "./OrangeBackground";

export function FuvarozasDesc() {
  const features = [
    {
      title: "Korszerű Flotta",
      description: "Modern járműparkunk garantálja, hogy minden típusú árut a legmegfelelőbb járművel szállítunk. ",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Pontosan határidőre",
      description:
        "Tudjuk, hogy az idő pénz, és mi garantáljuk, hogy szállítmánya mindig időben érkezik.",
      icon: <IconHelp />,
    },
    {
      title: "Rugalmasság és Testreszabhatóság",
      description:
        "Tudjuk, hogy minden ügyfél igénye egyedi. Ezért kínálunk rugalmas fuvarozási megoldásokat, amelyek pontosan az Ön igényeihez igazodnak.",
      icon: <IconAdjustmentsBolt />,
    },
  ];
  return (
    <div className="pt-20 relative px-6  lg:overflow-visible lg:px-0">
        <div className="text-black font-extrabold  text-2xl  md:text-4xl flex justify-center p-4 pb-1">
        Amit mi garantálunk!
      </div>
      <div className="flex justify-center">
        <div className="w-2/5 border-b-4 border-yellow-500 font-extrabold mb-20"></div>
      </div>
    <div className="pb-16 grid grid-cols-1 sm:grid-cols-3  relative z-10  max-w-full mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-lg relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
