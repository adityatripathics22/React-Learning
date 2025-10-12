import React from 'react'
import card from './components/card'

const App = () => {
  const user = 'John Doe'
  const age = 25

  return (
    <div>
      <h1> Hello, Guys  I am {user}</h1>
      <h2>and I am {age} year old</h2>
      {card()}
    </div>
    
  )
}

export default App