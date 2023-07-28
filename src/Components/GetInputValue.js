import React, { useState } from 'react'

const GetInputValue = () => {
    const [input, setInput] = useState("")
    const [print, setPrint] = useState("")

    const handleInput = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

  return (
    <div>
      <h1>Hi {print} </h1>
      <input type='text' onChange={handleInput}></input>
      <button onClick={() => setPrint(input)}>Click Me</button>
    </div>
  )
}

export default GetInputValue
