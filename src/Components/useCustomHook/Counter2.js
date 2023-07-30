import React from 'react'
import useCustom from './useCustom'

const Counter2 = () => {

    const [count, handleIncrement, handleDecrement] = useCustom(10)

  return (
    <div>
      <h1>Counter 2 : {count}</h1>
     <button onClick={handleIncrement}>Increase</button>
     <button onClick={handleDecrement}>Decrease</button>   
    </div>
  )
}

export default Counter2
