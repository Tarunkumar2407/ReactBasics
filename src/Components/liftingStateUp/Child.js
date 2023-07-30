import React from 'react'

const Child = ({getData}) => {
    const name = "Tarun";
  return (
    <div>
       <h2>Child Component</h2>
       <button onClick={()=>getData(name)}>Send Data</button>
    </div>
  )
}

export default Child
