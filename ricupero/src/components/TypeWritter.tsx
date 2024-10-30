"use client";
import TopButton from "./Buttons/TopButton";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothD() {
    const words = [
      {
        text: "És",
      },
      {
        text: "Kezdjük",
      },
      {
        text: "el",
      },
      {
        text: "a",
      },
      {
        text: "közös",
        className: "text-orange-500 dark:text-orange-500",
      },
      {
        text: "Munkát.",
        className: "text-orange-500 dark:text-orange-500",
      },
    ];
  
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-24 ">
        <p className="text-gray-800 text-xl md:text-2xl ">
          Vedd fel a kapcsolatot!
        </p>
        <TypewriterEffectSmooth words={words} />
        <TopButton>Árajánlat kérése</TopButton>
        </div>
    );
}
