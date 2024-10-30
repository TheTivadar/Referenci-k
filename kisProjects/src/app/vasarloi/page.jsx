import React from 'react'
import VasarloiHero from '../ui/dashboard/vasarloi/hero'
import FilterBar from '../ui/dashboard/vasarloi/search'
import Termekek from '../ui/webshop/termekek'
import IconBar from '../ui/dashboard/vasarloi/iconBar'
import Termekek2 from '../ui/webshop/termekek2'

export default function Vasarloi  () {
  return (
    <div className="text-black">
        <VasarloiHero />
        <FilterBar />
        <Termekek />
        <IconBar />
        <Termekek2 />
    </div>
  )
}
