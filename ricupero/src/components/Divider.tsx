import React from "react";
import { cn } from "../utils/cn";

export const SlantedDivider = () => {
  return (
    <div
      className={cn("relative h-10 md:h-16 w-full bg-orange-400 shadow-xl shadow-black")}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%,50% 50%, 0 100%)"
      }}
    ></div>
  );
};
export const SlantedDividerDown = () => {
  return (
    <div
      className={cn("relative h-10 md:h-16 w-full bg-orange-400 shadow-xl shadow-black")}
      style={{
        clipPath: "polygon(0 0,50% 50%, 100% 0, 100% 100%, 0 100%)"
      }}
    ></div>
  );
};

