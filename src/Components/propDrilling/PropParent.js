import React from 'react'
import ChildA from './ChildA'

const PropParent = () => {
    const name = "Tarun"
  return (
    <div>
      <ChildA name={name}/>
    </div>
  )
}

export default PropParent
