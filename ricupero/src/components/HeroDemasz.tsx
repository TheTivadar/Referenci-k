import React from 'react'
import TopButton from './Buttons/TopButton'
import Image from 'next/image'

const HeroDemasz = () => {
  return (
    <div className='py-20'>
        <div className="flex flex-col lg:px-16 gap-y-8">
            <div className="flex ">
                <div className="flex-[2]">
                    <h1 className="text-7xl font-bold  pb-4">Démász bérlése</h1>
                    <p className="pb-8 text-lg text-gray-700">A Démász épületében szobáink kiadók, amelyek jól felszereltek és kényelmesek, minden igényt kielégítve. Az épület a város szívében található, így a központi elhelyezkedésnek köszönhetően minden fontos helyszín könnyen megközelíthető. </p>
                    <TopButton>Ajánlat kérése</TopButton>
                </div>
                <div className="flex-[1]"> 
                    <Image
                    height={600}
                    width={1400}
                    alt='Demasz'
                    src="/munkagep.jpg"
                    className="w-96 h-64 object-cover rounded-2xl"
                    />
                </div>
            </div>
            <div className="flex" >
                <div className="flex-[1]">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-row gap-x-6">
                            <div>
                                <h2>123</h2>
                                <h2>Férőhelyek száma</h2>
                            </div>
                            <div>
                                <h2>123</h2>
                                <h2>Szobák száma</h2>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div>
                                Korábbi partnereink
                            </div>
                            <div className="flex flex-row space-x-4">
                               <div>
                                <Image
                                src="/munkagep.jpg"
                                height={100}
                                width={100}
                                alt='partners'
                                className="w-8 h-8 object-cover rounded-md"
                                />
                               </div>
                               <div>
                                <Image
                                height={100}
                                width={100}
                                alt='partners'
                                src="/munkagep.jpg"
                                className="w-8 h-8 object-cover rounded-md"
                                />
                               </div>
                               <div>
                                <Image
                                height={100}
                                width={100}
                                alt='partners'
                                src="/munkagep.jpg"
                                className="w-8 h-8 object-cover rounded-md"
                                />
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-[1]"> 
                <Image
                    height={600}
                    width={800}
                    alt='partners'
                    src="/munkagep.jpg"
                    className="w-96 h-64 object-cover rounded-2xl"
                    />
                </div>
                <div className="flex-[1]"> 
                <Image
                    height={600}
                    width={800}
                    alt='partners'
                    src="/munkagep.jpg"
                    className="w-96 h-64 object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroDemasz