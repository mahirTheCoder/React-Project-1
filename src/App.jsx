import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layout/LayoutOne'
import Home from './Page/Home'

const App = () => {
const myRoute = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<LayoutOne/>}>
<Route index element={<Home/>}/>
  </Route>
))


  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App