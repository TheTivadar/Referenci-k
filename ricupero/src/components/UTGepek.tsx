"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function UtGEpek() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Ismerje meg munkagépeinket!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/gepiFoldmunka"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Forgó kotró",
    title: "Cat m 315 15T",
    src: "/catm315.jpg",
    content: <DummyContent />,
  },
  {
    category: "Úthenger",
    title: "Terex Tv 1200",
    src: "/terex1200.jpg",
    content: <DummyContent />,
  },
  
  {
    category: "Térkőrakó adapter",
    title: "Hunklinger P12",
    src: "/terkorako.jpg",
    content: <DummyContent />,
  },
  {
    category: "Dömper",
    title: "Terex dömper",
    src: "/terex.jpg",
    content: <DummyContent />,
  },
  {
    category: "Gumihevederes markoló",
    title: "Kubota 61-3",
    src: "/kubota.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Traktor alapú kotró",
    title: "Case 590",
    src: "/case590.jpg",
    content: <DummyContent />,
  },
  {
    category: "Billincses",
    title: " Man Tga 4x4",
    src: "/4x4.jpg",
    content: <DummyContent />,
  },
];
