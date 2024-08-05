import React from 'react'
import { RocketLaunchIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/20/solid'

const FuvarozasSzolgaltatas2 = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6  lg:overflow-visible lg:px-0 pt-20">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600 py-10">Ricopero</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gépparkunk</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Vállalatunk széles körű szállítási és bontási szolgáltatásokat kínál az építőiparban. Korszerű flottánk, amely 4 tengelyes tehergépjárművekből, 2 tengelyes 4x4 tehergépjárművekből és 3 m³-es dömperekből áll, biztosítja a különféle anyagok és törmelék hatékony mozgatását.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/contractor.jpg"
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
                    <strong className="font-semibold text-gray-900"> 4 tengelyes tgk</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">2 tengelyes 4x4 tgk</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-orange-600" />
                  <span>
                    <strong className="font-semibold text-gray-900"> 3 m3 -es dömperrel</strong>
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

export default FuvarozasSzolgaltatas2