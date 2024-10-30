import { cn } from "../utils/cn";
import {
  IconAdjustmentsBolt,
  IconHelp,
  IconRouteAltLeft,
} from "@tabler/icons-react";

interface KontenerTipus {
  id: string;
  title: string;
  body?: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  kontenerGarantalunk: KontenerTipus[];
}


const Feature4 = ({ kontenerGarantalunk }: Props) => {
  if(!kontenerGarantalunk) return null;
  const title1 = kontenerGarantalunk.find(item =>item.id === "1")?.title;
  const body2 = kontenerGarantalunk.find(item => item.id === "2")?.body;
  const title2 = kontenerGarantalunk.find(item =>item.id === "2")?.title;
  const body3 = kontenerGarantalunk.find(item => item.id === "3")?.body;
  const title3 = kontenerGarantalunk.find(item =>item.id === "3")?.title;
  const body4 = kontenerGarantalunk.find(item => item.id === "4")?.body;
  const title4 = kontenerGarantalunk.find(item =>item.id === "4")?.title;

  const features = [
    {
      title: title2 || "Megbízhatóság és Pontosság",
      description:body2 || "A cég garantálja, hogy a bérbe adott gépek megbízhatóak és jól karbantartottak. Az eszközök mindig a megállapodott időpontban és helyszínen állnak rendelkezésre.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: title3 || "Szakképzett Operátorok és Technikai Támogatás",
      description:body3 ||
        "A cég biztosítja, hogy a gépek működtetésére szakképzett és tapasztalt operátorokat alkalmaz. Továbbá, technikai támogatást és szervizszolgáltatást is nyújtanak a gépek működése során felmerülő problémák esetén.",
      icon: <IconHelp />,
    },
    {
      title:title4 || "Rugalmasság és Testreszabott Megoldások",
      description:body4 ||
        "A cég kínálja a szükséges gépeket és eszközöket a projekt specifikus igényeinek megfelelően, és rugalmasan alkalmazkodik a változó projektkövetelményekhez.",
      icon: <IconAdjustmentsBolt />,
    },
  ];
  return (
    <div className="pt-20 relative px-6  lg:overflow-visible lg:px-0">
        <div className="text-black font-extrabold  text-2xl  md:text-4xl flex justify-center p-4 pb-1">
        {title1}
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 md:w-2/5 border-b-4 border-yellow-500 font-extrabold mb-20"></div>
      </div>
    <div className="pb-16 grid grid-cols-1 sm:grid-cols-3 space-y-3 md:sapce-y-0 relative z-10  max-w-full mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

export default Feature4;

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
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xl relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
