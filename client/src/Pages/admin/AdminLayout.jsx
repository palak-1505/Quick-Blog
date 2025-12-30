import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/admin/Sidebar';
import { useAppContext } from '../../Context/AppContext';

function AdminLayout() {

    const navigate = useNavigate();
    const {token} = useAppContext();

    useEffect(() => {
      if(token === null) return;

      if(!token){
        navigate('/admin/login');
      }
    }, [token]);

    

    const logout = () => {
      localStorage.removeItem('token'); // Clear the token
      navigate('/'); // Redirect to home
    };


  return (
    <>
    <div className='flex itmes-center justify-between py-2 h-[70px] px-2 sm:px-12 border-b border-gray-200'>
        <img src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer'
        onClick={() => navigate('/')} />

        <button onClick={logout}
        className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer '>Logout</button>
    </div>

    <div className='flex h-[calc(100vh-70px)]'>
        
        <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

export default AdminLayout
