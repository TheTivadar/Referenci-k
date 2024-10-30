import Image from 'next/image';
import TopButton from './Buttons/TopButton';
import { FlipWordsMain } from './Flipwords';
import { GepparkItem } from './types';


interface Props {
  data: GepparkItem[];
}


const HeroMain = ({data}:Props) => {


  if (!data || data.length === 0) return null;

  // Használj keresést a body-k kinyerésére
  const body1 = data.find((item: GepparkItem) => item.id === "1")?.body;
  const body2 = data.find((item: GepparkItem) => item.id === "2")?.body;
  const body3 = data.find((item: GepparkItem) => item.id === "3")?.body;

  return (
    <div className="pt-10 md:pt-16">
      <div className="relative bg-gray-900 h-[600px] w-full overflow-hidden">
        <Image
          alt=""
          src="/munkag.jpg"
          width={1000}
          height={600}
          className="absolute inset-0 z-0 h-full w-full object-cover md:object-center opacity-35"
        />
        <div className="pt-20 absolute top-0 left-0 z-10 px-10 flex flex-col items-start w-full h-4/5">
          <FlipWordsMain />
          <p className="md:text-xl text-lg text-white">{body1} </p>
          <p className="md:text-xl text-lg mb-10 text-white">{body2}</p>
          <div className="items-center  flex flex-col">
            <div className="py-10 ">
              <TopButton>{body3}</TopButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
