import React from 'react'
import { blogCategories } from '../assets/assets'

function BlogList() {
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((category) => (
                <div key={category} className='text-gray-500'>
                    <button>{category}</button>
                </div> 
            ))}

        </div>
    </div>
  )
}

export default BlogList