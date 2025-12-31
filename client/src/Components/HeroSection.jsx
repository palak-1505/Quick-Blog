import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

function HeroSection() {
  const {input,setInput} = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  }

  const onClear = () =>{
    setInput('');
    inputRef.current.value = '';

  }
    return (
        <>
                <div className='inline-flex justify-center items-center gap-4 px-8 py-1.5 mb-4  border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                  <p className=''>New: Al feature integrated </p> 
                  <img src={assets.star_icon} alt="" className='w-2.5 inline' />
                </div>
        
                <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your own<span className='text-primary'> blogging</span><br/>platform.</h1>
        
                <p className='text-gray-500 max-w-2xl  text-smsm:text-xs  my-8 m-auto sm:my-8 '>
                  This is your space to think out loud, to share what matters,
                  and to write without filters. Whether it's one word or a thousand,
                  your story starts right here.
                </p>
        
                <form onSubmit={onSubmitHandler}
                className='flex justify-between  border border-gray-300 rounded bg-white overflow-hidden max-w-lg m-auto'>
                  <input ref={inputRef} type="text" 
                  placeholder='Search for blogs' 
                  className='mx-4 outline-none' required/>
        
                  <button type='submit'
                  className='rounded bg-primary text-white m-1.5 py-2 px-8 hover:scale-105 transition-all cursor-pointer '>Search</button>
                </form>

                <div className='text-center'>
                  { input &&
                  <button  onClick={onClear}
                  className='border font-light text-xs py-2 px-3 rounded-s  shadow-custom-sm cursor-pointer'
                  >Clear Search</button>
}
                </div>
        </>
                
        
        
    )
}

export default HeroSection
