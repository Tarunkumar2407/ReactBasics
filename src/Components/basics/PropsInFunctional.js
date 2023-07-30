import React, { useState } from 'react'
import PropsChild from './PropsChild'

const PropsInFunctional = () => {
    const [name, setName] = useState('Tarun Kumar')
    
    const handleUpdate = () => {
        setName("Ravi")
    }
  return (
    <div>
      <h1>Props in Functional Components</h1>
      <PropsChild name={name} email={"tarun@gmail.com"} others={{address:'Delhi', mobile:'666666666'}} />
      <button onClick={handleUpdate}>Update Name</button>
    </div>
  )
}

export default PropsInFunctional
