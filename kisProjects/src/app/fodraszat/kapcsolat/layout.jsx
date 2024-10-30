import FodraszDin from '@/app/ui/fodraszat/heroDynamic'
import KapcsolatFodrasz from '@/app/ui/fodraszat/kapcsolat'
import FodraszNavbar from '@/app/ui/fodraszat/Navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='text-black'>
      <FodraszNavbar />
      <FodraszDin />
        {children}
      <KapcsolatFodrasz />
    </div>
  )
}

export default Layout