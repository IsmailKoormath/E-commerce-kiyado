import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      
        <Outlet />

    </div>
  )
}

export default Layout