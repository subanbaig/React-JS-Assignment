import React, { useState } from 'react'

const Signup = ({click}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const ohndleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted", name, email, password)
  }
  
  return (
    <div onSubmit={ohndleSubmit}>
        <h1>Signup Form</h1>
        <form>
          <label htmlFor="">User Name : </label>
          <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Username" />
          <br /><br />
          <label htmlFor="">Email : </label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
          <br /><br />
          <label htmlFor="">Password : </label>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
          <br /><br />
          <a href="#" onClick={click}>Already Have an Account</a> 
          <br />
          <input type="submit" value="Signup" />
        </form>
    </div>
  )
}

export default Signup
