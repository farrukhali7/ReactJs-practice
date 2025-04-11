import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/buttons/navbar.jsx'
import Footer from './components/buttons/footer.jsx'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout