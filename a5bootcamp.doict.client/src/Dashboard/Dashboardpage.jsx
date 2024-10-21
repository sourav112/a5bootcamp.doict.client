import React from 'react'
import Sidebar from './Sidebar'
import Navbar from '../Layout/Common/Navbar'
import { Outlet } from 'react-router-dom'

function Dashboardpage() {
  return (
    <>
     <div>
        <div className="shadow-md bg-slate-100">
          <Navbar />
        </div>
        <div className="block lg:flex">
          <div className="min-w-64 shadow-md bg-slate-100">
            <Sidebar />
          </div>
          <div className="w-3/4 min-h-screen p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboardpage