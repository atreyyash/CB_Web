import React from 'react'

let randomNumber = Math.floor(Math.random() * 10);

const App = () => {
  return (
    <div>
      I am the APP Component - {randomNumber}
    </div>
  )
}

export default App
