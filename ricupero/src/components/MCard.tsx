"use client"
import React, { useEffect, useState } from 'react'
import { FaMapLocation } from "react-icons/fa6";
import OrangeBackground from './OrangeBackground';
import Image from 'next/image';
import Link from 'next/link';

interface KontenerTipus {
  id: string;
  title?: string;
  body?: string;
  description?: string;
  prop1?: string;
  src?:string;
}

interface Props {
  mainCard: KontenerTipus[];
}

export default function Card({ mainCard }: Props) {
  if (!mainCard) return null;
  const body1 = mainCard.find(item => item.id === "1")?.body;

    return (
      <div className="bg-white relative isolate overflow-hidden px-6  lg:overflow-visible lg:px-0">
         <OrangeBackground />
        <div className="mx-auto max-w-full py-24 sm:px-6 sm:pb-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="1" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#d9590f" />
                  <stop offset={2} stopColor="#d9590f" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ricupero
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {body1}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="/"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Szolgáltatások
                </Link>
                <Link href="/kapcsolat" className="text-sm font-semibold leading-6 text-white">
                  Lépj kapcsolatba! <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="mt-20 flex flex-row items-center justify-start gap-x-3 lg:justify-start">
                <FaMapLocation  className="text-4xl text-white" />
                <p className="text-white">Bács-kiskun</p>
                <div className="h-6 bg-gray-600 w-0.5"></div>
                <FaMapLocation  className="text-4xl text-white" />
                <p className="text-white">Csongrád</p>
                <div className="h-6 bg-gray-600 w-0.5"></div>
                </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                alt="App screenshot"
                src="/locsolo.jpg"
                width={1824}
                height={1080}
                className="absolute md:left-0 top-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  