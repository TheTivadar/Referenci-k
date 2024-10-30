import React from 'react'
import BlogCard from './blogCard'

const Blogs =  [
    {
        img: '/dark.jpg',
        title: 'Blog Post 1',
        description: 'Duis porta, ligula rhoncus euismod pretium, nisi tellus.',
      },
      {
        img: '/dark.jpg',
        title: 'Blog Post 1',
        description: 'Duis porta, ligula rhoncus euismod pretium, nisi tellus.',
      },
      {
        img: '/dark.jpg',
        title: 'Blog Post 1',
        description: 'Duis porta, ligula rhoncus euismod pretium, nisi tellus.',
      },
      {
        img: '/dark.jpg',
        title: 'Blog Post 1',
        description: 'Duis porta, ligula rhoncus euismod pretium, nisi tellus.',
      },
]



const BlogSection = () => {
  return (
    <div className='bg-stone-900 flex flex-col py-20'>
        <h2 className='text-center text-yellow-400 text-xl md:text-3xl font-medium pb-4'>Blog</h2>
        <h1 className='text-center text-white text-3xl md:text-6xl pb-10 font-semibold'>Legújabb hírek</h1>
        <div className='justify-center items-center flex'>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 '>
        {Blogs.map((blog, index) => (
        <BlogCard 
            key={index}
            img={blog.img}
            title={blog.title}
            description={blog.description}
        />
        ))}
    </div>
    </div>
    </div>
  )
}

export default BlogSection