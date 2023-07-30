import React, { useState } from 'react'

const ControlledComponent = () => {
    const  [input , setInput] = useState("")
  return (
    <div>
      <h1>Controlled Component</h1>
      <input value={input} onChange={(e)=> setInput(e.target.value)}></input>
      <h3>{input}</h3>
    </div>
  )
}

export default ControlledComponent
