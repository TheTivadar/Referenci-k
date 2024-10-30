import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import { FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-6 py-2 transition-colors relative z-10";

const ToggleableSection = ({
  componentA,
  componentB,
}: {
  componentA: React.ReactNode;
  componentB: React.ReactNode;
}) => {
  const [showComponentA, setShowComponentA] = useState(true);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isTextComponentActive, setIsTextComponentActive] = useState(false);
  const componentARef = useRef<HTMLDivElement>(null);
  const componentBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (componentARef.current) {
      setContainerHeight(componentARef.current.offsetHeight);
    }
  }, []);

  const toggleComponent = () => {
    setShowComponentA(!showComponentA);
    const nextHeight = showComponentA
      ? componentBRef.current?.offsetHeight
      : componentARef.current?.offsetHeight;

    if (showComponentA) {
      toggleViewMode("desktop");
      setIsTextComponentActive(true);
    } else {
      setIsTextComponentActive(false); 
    }

    setContainerHeight(nextHeight ?? null);
  };

  const toggleViewMode = (mode: "desktop" | "tablet" | "mobile") => {
    if (!isTextComponentActive) {
      setViewMode(mode);
    }
  };

  const getComponentStyle = () => {
    switch (viewMode) {
      case "desktop":
        return "w-[1280px] h-full";
      case "tablet":
        return "w-[800px] h-full";
      case "mobile":
        return "w-[375px] h-full";
      default:
        return "w-full h-auto";
    }
  };

  return (
    <div className="w-full  p-4 border decoration-4 decoration-black bg-white rounded-lg shadow-lg h-max flex flex-col items-center justify-between">
      <div className="flex justify-center md:justify-between w-full flex-col md:flex-row my-2">
        <SliderToggle
          selected={showComponentA}
          toggleComponent={toggleComponent}
        />
        {/*
        <ViewModeToggle 
          selectedView={viewMode} 
          toggleView={toggleViewMode} 
          isDisabled={isTextComponentActive} 
        />*/}
      </div>
      <motion.div
        className="relative flex items-center justify-center w-full overflow-hidden"
        animate={{ height: containerHeight || "auto" }}
        transition={{ type: "spring", damping: 15, stiffness: 250 }}
      >
        <div className={`${getComponentStyle()}`}>
          {showComponentA ? (
            <div ref={componentARef}>{componentA}</div>
          ) : (
            <div ref={componentBRef}>{componentB}</div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const SliderToggle = ({
  selected,
  toggleComponent,
}: {
  selected: boolean;
  toggleComponent: () => void;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${selected ? "text-white" : "text-slate-800"}`}
        onClick={toggleComponent}
      >
        <AiOutlinePicture className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Kép</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${!selected ? "text-white" : "text-slate-800"}`}
        onClick={toggleComponent}
      >
        <BsCardText className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Szöveg</span>
      </button>
      <div className={`absolute border rounded-2xl decoration-black inset-0 z-0 flex ${selected ? "justify-start" : "justify-end"}`}>
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

const ViewModeToggle = ({
  selectedView,
  toggleView,
  isDisabled,
}: {
  selectedView: "desktop" | "tablet" | "mobile";
  toggleView: (mode: "desktop" | "tablet" | "mobile") => void;
  isDisabled: boolean; // Új props
}) => {
  return (
    <div className="relative flex items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${selectedView === "desktop" ? "text-white" : "text-slate-800"}`}
        onClick={() => { if (!isDisabled) toggleView("desktop"); }}
        disabled={isDisabled} 
      >
        <FaDesktop className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Asztali</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selectedView === "tablet" ? "text-white" : "text-slate-800"}`}
        onClick={() => { if (!isDisabled) toggleView("tablet"); }}
        disabled={isDisabled} 
      >
        <FaTabletAlt className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Tablet</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${selectedView === "mobile" ? "text-white" : "text-slate-800"}`}
        onClick={() => { if (!isDisabled) toggleView("mobile"); }}
        disabled={isDisabled} 
      >
        <FaMobileAlt className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Telefon</span>
      </button>
      <div className={`absolute border rounded-2xl decoration-black inset-0 z-0 flex ${selectedView === "desktop" ? "justify-start" : selectedView === "tablet" ? "justify-center" : "justify-end"}`}>
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default ToggleableSection;
