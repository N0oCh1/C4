import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Pedidos from './Pedidos.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/pedidos",
    element: <Pedidos/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
