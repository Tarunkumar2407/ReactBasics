import React, { useRef } from 'react'

const UseRefHook = () => {
    let inputRef = useRef(null)
    function handleInput(){
        inputRef.current.value ="abc";
        inputRef.current.focus()
    }
  return (
    <div>
      <input type='text' ref={inputRef} ></input>
      <button onClick={handleInput}>Handle Input</button>
      <button onClick={() => inputRef.current.value=""}>Reset</button>
    </div>
  )
}

export default UseRefHook
