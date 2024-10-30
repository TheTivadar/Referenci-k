import FuvarKapcsolatComp from '@/app/ui/fuvar/fuvarkapcsolat'
import FuvarRolunkIcons from '@/app/ui/fuvar/rolunkIcons'
import RolunkKepSzoveg from '@/app/ui/fuvar/rolunkKepSzoveg'
import RolunkKepSzovegNagy from '@/app/ui/fuvar/rolunkKepSzovegNagy'
import React from 'react'

const FuvarRolunk = () => {
  return (
    <div>
        <RolunkKepSzoveg />
        <FuvarRolunkIcons />
        <RolunkKepSzovegNagy />
        <FuvarKapcsolatComp />
    </div>
  )
}

export default FuvarRolunk