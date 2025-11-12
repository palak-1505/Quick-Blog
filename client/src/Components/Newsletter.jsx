import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-8 text-center rounded-lg mb-24 '>
        <h1 className='text-4xl font-bold '>Never Miss a Blog!</h1>
        <p className='text-gray-500 my-4 mb-8 text-lg'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
        
        <form className='flex justify-between  border border-gray-300 rounded bg-white overflow-hidden max-w-lg m-auto h-12 w-full md:w-1/2 '>
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