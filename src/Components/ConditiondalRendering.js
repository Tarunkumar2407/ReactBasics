import React, { useState } from 'react'

const ConditiondalRendering = () => {

    const [loggedIn, setLoggedIn] = useState()
  return (
    <div>
    {/* this is for only two conditions 
      {
        loggedIn ? <h1>Welcome Anil</h1> : <h1>Welcome User</h1>
      } */}

      {/* for three conditions */}
      {
        (loggedIn === 1) ? <h2>Welcome User1</h2> : (loggedIn === 2) ? <h2>Welcome User2</h2> :
        <h2>Welcome User3</h2>
      }
    </div>
  )
}

export default ConditiondalRendering
