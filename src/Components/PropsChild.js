import React from 'react'

const PropsChild = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Your Email is: {props.email}</h2>
      <h2>Your Address is: {props.others.address}</h2>
      <h2>Your Mobile No. is: {props.others.mobile}</h2>
    </div>
  )
}

export default PropsChild
