import React, { useState } from 'react'
import {blogCategories } from '../assets/assets'
import { motion } from 'framer-motion'
import Blogcard from './Blogcard'
import { useAppContext } from '../Context/AppContext'


function BlogList() {

  const [menu , setMenu] = useState('All')
  const {blogs,input}  = useAppContext();

  const filteredBlogs = () =>{
    if(input === ''){
      return blogs;
    }
    return blogs.filter((blog) => blog.title.toLowerCase().includes(input.toLowerCase()) 
    || blog.category.toLowerCase().includes(input.toLowerCase()));
  }

  return (
    <div>
        <div className='flex justify-center gap-2  my-10 relative'>
            {blogCategories.map((category) => (
                <div key={category} className='relative'>
                    <button onClick={() => setMenu(category)} 
                      className={`relative cursor-pointer px-4 pt-0.5 ${menu === category ? 'text-white bg-primary rounded-full' : 'text-gray-500'}`}
                    >
                      
                      {menu === category && (
                          <motion.div layoutId='underline' 
                          transition={{type:'spring' , stiffness:500, damping:30}}
                          className='absolute left-0 right-0 top-0 h-7 -z-1'>
                      
                          </motion.div>
                        )
                      }
                      {category}
                    </button>
                </div> 
            ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 sm:mx-16 xl:mx-40'>
          {filteredBlogs().filter((blog) =>menu === 'All' ? true : blog.category ===menu)
          .map((blog) => <Blogcard key={blog._id} blog={blog} />)}

        </div>
    </div>
  )
}

export default BlogList