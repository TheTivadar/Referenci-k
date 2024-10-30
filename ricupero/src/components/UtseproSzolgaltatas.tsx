import React from 'react'
import OrangeBackground from './OrangeBackground'
import { RocketLaunchIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

interface KontenerTipus {
  id: string;
  title: string;
  body: string;
  description?: string;
  prop1?: string;
  prop2?: string;
  prop3?: string;
  src?:string;
}

interface Props {
  utseproKontent: KontenerTipus[];
}

const UtseproSzolgaltatas = ({ utseproKontent }: Props) => {
  
  const body1 = utseproKontent.find(item => item.id === "1")?.body;
  const title1 = utseproKontent.find(item =>item.id === "1")?.title;
  const prop1 = utseproKontent.find(item =>item.id === "1")?.prop1;
  const prop2 = utseproKontent.find(item =>item.id === "1")?.prop2;
  const prop3 = utseproKontent.find(item =>item.id === "1")?.prop3;

  return (
        <div className="relative isolate overflow-hidden bg-white px-6  lg:overflow-visible lg:px-0">
          <OrangeBackground />
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600 py-2 md:py-10">Ricupero</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title1}</h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                  {body1}
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <Image
                alt=""
                src="/locsolo.jpg"
                width={1000}
                height={800}
                className="w-[32rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 pb-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <ul role="list" className=" space-y-6 text-gray-600">
                    <li className="flex gap-x-3">
                      <RocketLaunchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" />
                      <span>
                        <strong className="font-semibold text-black">{prop1}</strong>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <UserGroupIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" />
                      <span>
                        <strong className="font-semibold text-black">{prop2}</strong>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ShieldCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" />
                      <span>
                        <strong className="font-semibold text-black">{prop3}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default UtseproSzolgaltatas