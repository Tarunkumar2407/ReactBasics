import React, { useState } from 'react'

const UseStateWithObject = () => {

    const [name, setName] = useState({
        firstName : "",
        lastName : ""
    })

  return (
    <div>
      <h2>{name.firstName}</h2>
      <h2>{name.lastName}</h2>
      <input onChange={(e)=> setName({...name, firstName : e.target.value})}></input><br />
      <input onChange={(e)=> setName({...name, lastName : e.target.value})}></input>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default UseStateWithObject
