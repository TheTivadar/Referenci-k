import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='text-white'>
      <div className='max-w-7xl mx-auto'>
      {children}
      </div>
    </div>
  )
}

export default Layout