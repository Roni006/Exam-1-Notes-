import React from 'react'
import Navbar from '../components/menubar'
import { Outlet } from 'react-router-dom'

const Rootlayouts = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Rootlayouts