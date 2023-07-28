import React from 'react'

const ClickEvent = () => {

  const handleAlert = () => {
    alert("Hi i am alert");
  }

  return (
    <div>
      <h1>Click Event</h1>
      {/* we cant use () with function name while attaching it with event handler bcz function will call itself even without clicking on button*/}
      {/* <button onClick={handleAlert()}>Click Me</button> */}

      {/* we can use it in these  ways:  */}
      {/* <button onClick={() => handleAlert()}>Click Me</button> */}
      {/* <button onClick={() => alert("Hello")}>Click Me </button> */}
      <button onClick={handleAlert}>Click Me</button>
    </div>
  )
}

export default ClickEvent
