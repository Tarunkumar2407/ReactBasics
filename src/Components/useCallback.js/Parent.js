import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const Parent = () => {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    // const handleAge = () => {
    //     setAge(age+1)
    // }
    // const handleSalary = () => {
    //     setSalary(salary+5000)
    // }
    const handleAge = useCallback(() => {
          setAge(age+1)
    },[age])

     const handleSalary = useCallback(() => {
      setSalary(salary+5000)
    },[salary])

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={handleAge}>Increase Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={handleSalary}>Increase Salary</Button>
    </div>
  )
}

export default Parent
