import React from 'react'

const TopButton = ({children}: {children: string}) => {
  return (
    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          {children}
        </div>
      </button>
  )
}

export default TopButton