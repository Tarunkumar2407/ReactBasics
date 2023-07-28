import React, { useState } from 'react'

const State = () => {
    const [name, setName] = useState("Tarun")
    const handleNameChange = () => {
        setName("Ravi");
    }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleNameChange}>Click Me</button>
      
    </div>
  )
}

export default State
