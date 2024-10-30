import React from 'react';
import MainHero from '../ui/fuvar/mainHero';
import FuvarMainIcons from '../ui/fuvar/mainIcons';
import FuvarMainSzovegKep from '../ui/fuvar/mainSzovegKep';
import FuvarMainJarmuPark from '../ui/fuvar/mainJarmuPark';
import FuvarKapcsolatComp from '../ui/fuvar/fuvarkapcsolat';

const Fuvar = () => {
  return (
    <div className='pt-20'>
        <MainHero />
        <FuvarMainIcons />
        <FuvarMainSzovegKep />
        <FuvarMainJarmuPark />
        <FuvarKapcsolatComp />
    </div>
  );
};

export default Fuvar;
