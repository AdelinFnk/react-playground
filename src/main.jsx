import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App 
      subject="Milo"
      greeting="Welcome to my humble abode"
     />
  </StrictMode>,
)
