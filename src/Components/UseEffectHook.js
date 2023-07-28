import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count , setCount] = useState(0)

    useEffect(() => {
        setTimeout(()=>{
            setCount((count) => count + 1)
        },1000)
    })

    // useEffect(() => {
    //     console.log("i am called")
    //     setTimeout(()=>{
    //         setCount((count) => count + 1)
    //     },1000)
    // }, [])

    // useEffect(() => {
    //     console.log("i am called")
    //     let timer = setTimeout(()=>{
    //         setCount((count) => count + 1)
    //     },1000)

    //     return () => clearTimeout(timer)
    // }, [])



  return (
    <div>
      <h1>I am called {count} times</h1>
    </div>
  )
}

export default UseEffectHook
