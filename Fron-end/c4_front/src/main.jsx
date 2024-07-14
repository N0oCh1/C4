import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Pedidos from './Pedidos.jsx'
import Mesa from './mesa.jsx'
import Orden from './Orden.jsx'
import Facturacion from './Facturacion.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/pedidos",
    element: <Pedidos/>
  },
  {
    path: "/pedidos/mesa/:id",
    element: <Mesa />
  },
  {
    path: "/pedidos/mesa/:id/Orden/",
    element: <Orden/>
  },
  {
    path: "/pedidos/mesa/:id/factura/",
    element: <Facturacion/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
