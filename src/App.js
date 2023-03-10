import React from 'react'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import Header from './components/header/Header'

export default function App() {
  return (
    <div>
        <Header />
      <div id='generalDiv'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}
