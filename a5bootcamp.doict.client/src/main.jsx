import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from '../src/routes/routes.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProvider>
    
  </StrictMode>,
)
