import React from 'react'
import UserChild from './UserChild'

const Users = () => {

    const array = [{name: "Tarun", age:24, gender: "male"},
                   {name: "Ankur", age:25, gender: "male"},
                   {name: "Sahil", age:26, gender: "male"}]
  return (
    <div>
      <h1>Reuse component with list</h1>
      {
        array.map((item, i)=>{
            return (
                
                <UserChild data={item} id={i}/>
                
            )           
        })
      }
    </div>
  )
}

export default Users
