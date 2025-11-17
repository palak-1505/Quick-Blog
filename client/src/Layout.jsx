import React from 'react'
import {Outlet} from 'react-router-dom'
import Admin from './Pages/Admin'
import Home from './Pages/Home'

function Layout() {
    return (
        <>
       
        <Home/>
        <Admin/>
        <Outlet/>
        
        </>
        
    )
}

export default Layout
