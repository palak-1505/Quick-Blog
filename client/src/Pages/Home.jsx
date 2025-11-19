import React from 'react'
import Header from '../Components/Header'
import Admin from './Admin'
import { assets } from '../assets/assets'
import BlogList from '../Components/BlogList'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'

function Home() {
  return (
    <>
    
    <div className='relative min-h-screen bg-white overflow-hidden '>
      <Header/>
      <div className='text-center mt-20 mb-8'>

        <HeroSection/>
        <BlogList/>
        <Newsletter/>
        <Footer/>

      </div>

      

      <img src={assets.gradientBackground} alt="" className='absolute top-50 z-1 opacity-50' />

    </div>
    
    </>
  )
}

export default Home