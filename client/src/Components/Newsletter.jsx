import React from 'react'

function Newsletter() {
  return (
    <div className='text-center flex flex-col items-center space-y-2 my-32 '>
        <h1 className='md:text-4xl font-semibold text-2xl '>Never Miss a Blog!</h1>
        <p className='text-gray-500/70  pb-8 md:text-lg'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
        
        <form className='flex  items-center justify-between  max-w-2xl  h-12 w-full md:h-13 '>
          <input type="text"  
          placeholder='Enter your email' 
          className='outline-none border border-gray-300 rounded-md h-full border-r-0 rounded-r-none px-3 text-gray-500 w-full' 
          required/>

          <button type='submit'
          className='md:px-12 px-8 h-full text-white bg-primary hover:bg-primary transition-all  rounded-md rounded-l-none cursor-pointer'>Subscribe</button>

        </form>
        
    </div>
  )
}

export default Newsletter