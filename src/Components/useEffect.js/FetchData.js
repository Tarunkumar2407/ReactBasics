import React, { useEffect } from 'react'

const FetchData = () => {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if(response.ok === true){
                return response.json()
            }
            else{
                throw new Error("Error is data fetching")
            }
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default FetchData
