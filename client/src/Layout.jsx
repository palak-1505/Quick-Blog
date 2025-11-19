import React from 'react'
import {Outlet} from 'react-router-dom'

import Home from './Pages/Home'



function Layout() {
    return (
        <>
       
        
        <Outlet/>
        
        </>
        
    )
}

export default Layout
