import React from 'react'
import KapcsolatHero from '../ui/dashboard/kapcsolat/hero'
import IconBar from '../ui/dashboard/vasarloi/iconBar'
import KapcsolatForm from '../ui/dashboard/kapcsolat/kapcsolat'

const Kapcsolat = () => {
  return (
    <div>
        <KapcsolatHero />
        <KapcsolatForm />
        <IconBar />
    </div>
  )
}

export default Kapcsolat