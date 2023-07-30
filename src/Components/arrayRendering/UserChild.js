import React from 'react'

const UserChild = ({ data, id } ) => {
  return (
    <div>
      <h2>{id+1} {data.name} {data.age} {data.gender}</h2>
    </div>
  )
}

export default UserChild
