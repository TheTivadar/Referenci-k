import React from 'react'
import { RocketLaunchIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const LocsoloSzolgaltatas = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6  lg:overflow-visible lg:px-0 pt-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Man Tga 4x4 locsoló-seprő</h1>
              <p className="mt-12 text-xl leading-8 text-gray-700">
              Biztosíthatja, hogy építési területei tiszták és pormentesek maradjanak. Ezek a járművek erős és megbízható megoldást nyújtanak nagyobb projektekhez, garantálva a hatékony és gyors tisztítást. A MAN TGA 4x4 locsoló-seprő autók használata jelentősen csökkenti a por és a törmelék mennyiségét, így biztonságosabb és rendezettebb munkakörnyezetet biztosít. Ideális választás, ha professzionális és kiváló minőségű tisztítási megoldásra van szüksége.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt=""
            width={800}
            height={800}
            src="/locsolo.jpg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-xl leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className=" space-y-6 text-gray-600">
                <li className="flex gap-x-3">
                  <RocketLaunchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Hatékony és gyors tisztítást</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Professzionális és kiváló minőségű megoldás</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" />
                  <span>
                    <strong className="font-semibold text-gray-900"> MAN TGA 4x4 locsoló-seprő</strong>
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

export default LocsoloSzolgaltatas