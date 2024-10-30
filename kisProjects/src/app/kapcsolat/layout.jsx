import React from 'react'
import Navbar from '../ui/webshop/navbar'
import Footer from '../ui/webshop/footer'

const Layout = ({children}) => {
  return (
    <div className='text-black'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout