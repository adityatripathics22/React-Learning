import React from 'react'

const App = () => {
  const a = 3;
  let user = "aditya";

  let changeUser = () => {
    user = "harsh";
  }

  return (
    <div>
      <h1> hello {user}</h1>
      <button onClick={changeUser} > change user</button>
    </div>
  )
}

export default App