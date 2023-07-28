import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {

    const [count, setCount] = useState(10)
    const [data, setData] = useState(100)

    useEffect(() => {
        console.log("count increased")
    },[count])

    useEffect(() => {
        console.log("data set")
    },[data])
  return (
    <div>
      <h1>useEffect</h1>
      <h2>{count}</h2>
      <h2>{data}</h2>
      <button onClick={() => setCount(count+10)}>Count</button>
      <button onClick={() => setData(data+100)}>Data</button>
    </div>
  )
}

export default UseEffect2
