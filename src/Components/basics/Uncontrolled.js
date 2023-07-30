import React, { useRef } from 'react'

const Uncontrolled = () => {

    const nameRef = useRef(null)
    const passwordRef = useRef(null)
 
    const handleSubmit =(e) => {
        e.preventDefault()
        alert(`${nameRef.current.value} ${passwordRef.current.value}`)
    }
  return (
    <div>
      <h2>Uncontrolled Component</h2>
      <form onSubmit={handleSubmit}>
      <input ref={nameRef} type='text'></input><br />
      <input ref={passwordRef} type='password'></input><br />
      <button >Submit</button>
      </form>
      
    </div>
  )
}

export default Uncontrolled
