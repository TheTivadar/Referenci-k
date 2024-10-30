import Image from 'next/image'
import React from 'react'


const RolunkKepSzovegNagy = () => {
  return (
    <div className='w-full lg:max-w-7xl flex flex-col sm:flex-row mx-auto pt-10 md:pt-20'>
        <div className='flex-1 m-4 md:m-0'>
            <Image src={"/barbershop.jpg"} alt="image" width={400} height={400} className='object-fill w-full h-full'></Image>
        </div>
        <div className='flex-1 flex flex-col justify-center md:pl-10  m-4 md:m-0'>
            <h1 className='text-white text-3xl md:text-5xl font-bold'>Fenntarthatóság</h1>
            <p className='text-white text-md pt-10 max-w-lg'>A fenntarthatóság és környezettudatosság kiemelt szempont a BHS Trans Kft. életében, ezért új járműbeszerzéseinknél kizárólag a legkedvezőbb fogyasztási és károsanyag-kibocsátási mutatókkal rendelkező EURO 6 besorolású motorral rendelkező eszközöket választunk. Gépkocsivezetőink szakmai felkészültségét vezetéstechnikai és elméleti tréninggel fejlesztjük, hogy kollégáink megfeleljenek a legmagasabb minőségi elvárásoknak. Ennek köszönhetően, járműveink 90%-ban “ECO” üzemmódban közlekednek, ami jelentős üzemanyag megtakarítást eredményez. Beruházásainkat és kapacitástervezéseinket, fenntartható és környezettudatos szemléletben végezzük, ezzel is gondolva a jövő generációira.</p>
        </div>
    </div>
  )
}

export default RolunkKepSzovegNagy