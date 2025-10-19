import React from 'react'
import Cards from './components/cards.jsx'



const App = () => {
  return (
    <div className ="parent" >
      <Cards user = 'aditya' img ='https://images.unsplash.com/photo-1760694121380-0dc12e8ac00f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764' />
      <Cards user = 'saurabh' img='https://images.unsplash.com/photo-1760709072133-2472415b05f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' />
      
      
    </div>  
  )
}

export default App





// Type	Example	Capitalization Rule
// React Component	    import App from './App'       	✅ Must start with Capital (React convention)
// Utility Function	     import { add } from './math'	        ✅ Usually lowercase
// Constant/Object	     import config from './config'	     ✅ Usually lowercase