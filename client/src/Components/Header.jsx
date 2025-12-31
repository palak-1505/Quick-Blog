import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

import { useAppContext } from '../context/AppContext'




const Header = () => {

// Simple auth check - replace with your real auth logic if using Context/Redux
  // const isLoggedIn = () => localStorage.getItem('adminToken') !== null;


  
  // const loggedIn = isLoggedIn();

  // const handleAuthClick = () => {
  //   if (loggedIn) {
  //     navigate('/admin');
  //   } else {
  //     navigate('/login');
  //   }
  // };
const navigate = useNavigate();
  const {token} = useAppContext();
 
    

    return (
        <>
        <div className='flex flex-row justify-between items-center py-5 mx-8 sm-mx-20 xl:mx-32 sticky'>
            <img onClick={()=>navigate('/')} 
            src={assets.logo}
            alt="Logo"  
            className='w-32 sm:w-44  cursor-pointer'
            />
            <button onClick={()=> navigate('/admin')}
            className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
            >
                {token ? 'Admin' : 'Login'}
                <img src={assets.arrow} alt="->"  className='w-3'/>
            </button>
        </div>
        </>
        
    )
}

export default Header
