import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>

    </>
  )
}

export default LayoutOne