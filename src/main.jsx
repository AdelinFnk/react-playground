import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA = [
  {name: 'Eat', id: 'todo-0', completed: true },
  {name: 'Sleep', id: 'todo-1', completed: false },
  {name: 'Repeat', id: 'todo-2', completed: false },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App 
      subject="Milo"
      greeting="Welcome to my humble abode"
      tasks={DATA}
     />
  </StrictMode>,
)
