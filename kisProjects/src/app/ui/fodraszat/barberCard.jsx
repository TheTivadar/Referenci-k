import Image from 'next/image';
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitterSquare, FaInstagramSquare  } from "react-icons/fa";

// BlogCard komponens
const BarberCard = ({ img, title }) => (
  <div className='bg-stone-900 text-white text-start w-80 max-w-sm mx-auto overflow-hidden shadow-lg hover:scale-105 duration-300'>
    <div className='h-80'>
      <Image 
        src={img}
        alt={title}
        width={300}
        height={400}
        className='object-cover w-full h-full'
      />
    </div>
    <div className='p-6 pl-8 pt-6'>
      <h1 className='text-xl font-bold mb-2 text-center '>{title}</h1>
      <div className='flex flex-row justify-evenly pt-2 pb-4'>
        <RiFacebookBoxFill className='text-yellow-400'/>
        <FaTwitterSquare className='text-yellow-400' />
        <FaInstagramSquare className='text-yellow-400' />
      </div>
      <div className='flex justify-center'>
      <button className='text-yellow-400 text-sm p-4 py-2 border decoration-yellow-400 hover:bg-yellow-400 hover:text-black '>Foglalj most!</button>
      </div>
    </div>
  </div>
);

export default BarberCard;


