import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <StrictMode>  
      <App />
  </StrictMode>
  </BrowserRouter>,
  
 
)
