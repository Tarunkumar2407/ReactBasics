import React, { useEffect, useState } from 'react'

const UseEffectWtihFetchData = () => {
    const [user, setUser] = useState([])
    const [id, setId] = useState(1)
    const [fetchId, setFetchId] = useState(1)

    const handleId = () => {
        setFetchId(id)
    }

    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>response.json())
        .then(data =>{
            console.log(data)
            setUser(data)})
    },[fetchId])
  return (
    <div>
      
      <input value={id} onChange={(e) => setId(e.target.value) }></input>
      <button value={fetchId} onClick={handleId}>Fetch Data</button> 
      <h3>{user.title}</h3>
      {/* <ul>
        {
            users.map((user) => {
                return(
                    <li key={user.id}>{user.title}</li>
                )
            })
        }
      </ul> */}
    </div>
  )
}

export default UseEffectWtihFetchData
