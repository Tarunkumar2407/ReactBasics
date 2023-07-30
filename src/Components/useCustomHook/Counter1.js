import React, { useState } from 'react'
import useCustom from './useCustom'

const Counter1 = () => {
   
  const [count, handleIncrement, handleDecrement] = useCustom()

  return (
    <div>
     <h1>Counter 1 : {count}</h1>
     <button onClick={handleIncrement}>Increase</button>
     <button onClick={handleDecrement}>Decrease</button>
      
    </div>
  )
}

export default Counter1
