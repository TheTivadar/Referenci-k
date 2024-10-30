import Image from 'next/image';
import React from 'react'

export default async function Termekek() {
  const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    return res.json();
  }

  const data = await getProducts()

  return (
    <>
          <ul className="grid grid-cols-4 gap-4 items-center max-w-7xl mx-auto">
          {
            data.products.map( (item,index) =>(
              <li className="w-60 mx-4 p-2 rounded-lg hover:scale-105 duration-300 " key={index}>
                <Image width={100} height={100} src={item.thumbnail} alt={item.title} />
                <div className="p-2 text-sm text-black bg-gray-200 rounded-lg">
                      {item.title} <span className="rounded-lg p-1 px-1 ml-2 bg-gray-200">${item.price}</span>
                </div>
              </li>
            )) 
          }
          </ul>
    </>
  )
}
