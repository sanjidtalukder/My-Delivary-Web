import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';



import {
 
  RouterProvider,
} from "react-router";
import { router } from './router/Router.jsx';
import AuthProvider from './context/AuthContext/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font.urbanist max-w-7xl mx-auto'>
<AuthProvider>
   <RouterProvider router={router} />
</AuthProvider>
    </div>
    
  </StrictMode>,
)
