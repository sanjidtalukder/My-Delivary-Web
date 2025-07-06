import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'leaflet/dist/leaflet.css';

import { Toaster } from 'react-hot-toast';



import {
 
  RouterProvider,
} from "react-router";
import { router } from './router/Router.jsx';
import { AuthProvider } from './context/AuthContext/AuthContext.jsx';
// import AuthProvider from './context/AuthContext/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font.urbanist max-w-7xl mx-auto'>
<AuthProvider>
   <Toaster position="top-right" />
   <RouterProvider router={router} />
</AuthProvider>
    </div>
    
  </StrictMode>,
)
