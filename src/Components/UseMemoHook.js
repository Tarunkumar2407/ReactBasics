import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);

    const multiMemo = useMemo(function multiply() {
        console.log("hi am multiply function")
        return count * 2;
    },[count])

    
  return (
    <div>
      <h1>useMemo Hook</h1>
      <h2>Count : {count}</h2>
      <h2>Multiply count: {multiMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <h2>Items : {item}</h2>
      <button onClick={() => setItem(item+10)}>Increase Items </button>
    </div>
  )
}

export default UseMemoHook
