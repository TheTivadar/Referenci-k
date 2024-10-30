import FuvarKapcsolatComp from '@/app/ui/fuvar/fuvarkapcsolat'
import FuvarJarmuParkComp from '@/app/ui/fuvar/jarmupark'
import FuvarSzolgaltatasJarmuPark from '@/app/ui/fuvar/szolgaltatasFlotta'
import React from 'react'

const FuvarJarmuPark = () => {
  return (
    <div>
      <FuvarJarmuParkComp />
      <FuvarSzolgaltatasJarmuPark />
      <FuvarKapcsolatComp />
    </div>
  )
}

export default FuvarJarmuPark