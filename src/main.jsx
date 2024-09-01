import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-[1440px] mx-auto '>
    <RouterProvider router={router}></RouterProvider>
    </div>
  </StrictMode>,
)
