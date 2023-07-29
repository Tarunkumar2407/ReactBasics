import React, { useEffect, useState }from 'react'
import axios from 'axios'

const AxiosData = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setUsers(response.data)
        })
        .catch((error) => {
            console.log("error is fetching")
        })
    })
  return (
    <div>
      <ul>
        {
            users.map((user)=> {
                return(
                    <h2 key={user.id}>{user.name}</h2>
                )
            })
        }
      </ul>
    </div>
  )
}

export default AxiosData
