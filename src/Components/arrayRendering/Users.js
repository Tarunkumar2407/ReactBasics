import React from 'react'

const Users = () => {

    const array = [{name: "Tarun", age:24, gender: "male"},
                   {name: "Ankur", age:25, gender: "male"},
                   {name: "Sahil", age:26, gender: "male"}]
  return (
    <div>
      <h1>Reuse component with list</h1>
      {
        array.map((item)=>{
            return (
                <h1>{item.name}</h1>
            )
            
        })
      }
    </div>
  )
}

export default Users
