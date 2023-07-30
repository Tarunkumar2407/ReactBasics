import React from 'react'
import Child from './Child'

const Parent = () => {
    function getData(name) {
        alert("hi i am from parent")
        alert("My name is "+name)
    }
  return (
    <div>
      {/* <h1>My name is {name}</h1> */}
      <Child getData={getData}/>
    </div>
  )
}

export default Parent
