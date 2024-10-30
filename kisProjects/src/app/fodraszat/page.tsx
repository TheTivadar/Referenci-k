import React from 'react'
import FodraszNavbar from '../ui/fodraszat/Navbar'
import FodraszHero from '../ui/fodraszat/Hero'
import Szolgaltatasok from '../ui/fodraszat/szolgaltatások'
import IconBar from '../ui/fodraszat/iconbar'
import Kupon from '../ui/fodraszat/kupon'
import ClientReview from '../ui/fodraszat/clientReview'
import Brands from '../ui/fodraszat/brands'
import KapcsolatFodrasz from '../ui/fodraszat/kapcsolat'

export default function Fodraszat () {
  return (
    <div >
        <FodraszNavbar />
        <FodraszHero />
        <Szolgaltatasok />
        <IconBar />
        <Kupon />
        <ClientReview />
        <Brands />
        <KapcsolatFodrasz />
    </div>
  )
}
