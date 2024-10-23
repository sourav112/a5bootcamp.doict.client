import React from 'react'
import Navbar from "../Common/Navbar"
import Footer from "../Common/Footer"
import { Outlet } from 'react-router-dom'
function CommonLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default CommonLayout