import React, { useState } from 'react'

const FormValidation = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [termsCondition, setTermsCondition] = useState(false)
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
         e.preventDefault();
         if(!name || !email || !termsCondition || city){
            alert("All fields are necessary")
         }
         console.log(name, email, password, confirmPassword, termsCondition, city)
    }

    const handlePassword = () => {
        if(password !== confirmPassword){
            alert("Paswords are not matching")
        }
    }

    
  return (
    <div>
    <form onSubmit={handleSubmit, handlePassword}>
      <h2>Hi User</h2>
      <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'></input><br />
      <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'></input><br />
      <input type='password' onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Your Password'></input><br />
      <input type='password' onChange={(e)=> setConfirmPassword(e.target.value)} placeholder='Confirm Password'></input><br />
      <select name="city" onChange={(e)=> setCity(e.target.value)}>
        <option>Select city</option>
        <option>Delhi</option>
        <option>Noida</option>
        <option>Gurgram</option>
      </select><br />
      <input type='checkbox' onChange={(e)=>setTermsCondition(true)}></input>
      <span>Terms & Conditions</span><br />
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default FormValidation

