import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Cart from './pages/Cart'

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
            { index: true, element: <Home /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'cart', element: <Cart /> },
    ]
  }
])




  return <RouterProvider router={router}/>
}

export default App
