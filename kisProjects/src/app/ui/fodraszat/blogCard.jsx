import Image from 'next/image';

// BlogCard komponens
const BlogCard = ({ img, title, description }) => (
  <div className='bg-black text-white text-start w-72 max-w-sm mx-auto overflow-hidden shadow-lg hover:scale-105 duration-300'>
    <div className='h-64'>
      <Image 
        src={img}
        alt={title}
        width={300}
        height={400}
        className='object-cover w-full h-full'
      />
    </div>
    <div className='p-6 pl-8 pt-6'>
      <h1 className='text-xl font-bold mb-2'>{title}</h1>
      <p className='mb-4'>{description}</p>
      <button className='text-yellow-400 text-sm'>READ MORE</button>
    </div>
  </div>
);

export default BlogCard;


