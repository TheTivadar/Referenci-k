import React from 'react';


import Navbar from '@/components/Navbar'
import Footer2 from '@/components/Footer2'
import KapcsolatForm from '@/components/Kapcsolat';
import { constructMetadata } from '@/lib/utils';

export const metadata = constructMetadata({
  title: 'Ricupero - Lépj kapcsolatba',
  description: 'Vedd fel a kapcsolatot és Kezdjük el a közös Munkát. ',
  image: '/contractor.jpg', // Egyedi kép a főoldalhoz
});

const Kapcsolat = () => {
  return (
    <div>
      <Navbar />
      <KapcsolatForm />
      <Footer2 />
    </div>
  )
}

export default Kapcsolat

