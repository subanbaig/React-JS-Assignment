import React from 'react'

const Login = ({click}) => {
  return (
    <div>
      <h1>Login Form</h1>
      <br />
      <label htmlFor="">Email : </label>
      <input type="text" placeholder="Email" />
      <br /><br />
      <label htmlFor="">Pasword : </label>
      <input type="password" placeholder="Password" />
      <br /><br />
      <a href="#" onClick={click}>Create an account</a>
      <br />
      <button type="submit">Login</button>
    </div>
  )
}

export default Login
