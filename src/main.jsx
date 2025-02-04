<<<<<<< HEAD
import { StrictMode } from 'react'
=======
import{BrowserRouter} from 'react-router-dom'
>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <StrictMode>
    <App />
  </StrictMode>,
=======
  <BrowserRouter>
    <App />
  </BrowserRouter>
>>>>>>> 3b270f39bf30f92cd9a282d5b8b6f688cbdb4704
)
