import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Props in React Components
// Props (short for properties) are read-only inputs passed from a parent component to a child component. They enable dynamic data flow and reusability.

// Props are immutable.
// They enable communication between components.