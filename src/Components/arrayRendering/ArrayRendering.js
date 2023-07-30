import React from 'react'

const ArrayRendering = () => {
    const array = ["Tarun", "Sahil", "Ankit", "Arpit", "Ankur", "Mayur"]
  return (
    <div>

      {
        array.map((item) => {
            return (
                <h2>{item}</h2>
            )
        })
      }
      {/* {
        for(let i=0; i< array.length; i++){
            <h2>array[i]</h2>
        }
      } */}
    </div>
  )
}

export default ArrayRendering
