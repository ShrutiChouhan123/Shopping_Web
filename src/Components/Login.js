import React, { useState } from 'react'
import { useEffect } from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  let users = useSelector(state => state.cart.user)
  let handleSubmit = (event) => {
    event.preventDefault()
    setUsername('')
    setPassword('')
    let newdata = users.find((data) => data.username === username && data.password === password)

    if (newdata) {
      let login=true
      localStorage.setItem("login",JSON.stringify(login))
      navigate("/products")
    }
    else {
      alert("not valid")
    }
   

  }
  useEffect(() => {
   if(localStorage.getItem("login")==="true"){
    navigate("/products")
   }
  })
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="left">
            <div className="login">Login</div>
            <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
          </div>
          <div className="right">
            <svg viewBox="0 0 320 300">
              <defs>
              
              </defs>
              <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
            </svg>
            <div className="form">
              <label for="email">Name</label>
              <input type="text" id="email" placeholder='Enter Name' value={username} onChange={(e) => setUsername(e.target.value)} />
              <label for="password">Password</label>
              <input type="number" id="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="submit" id="submit" value="Submit" onClick={handleSubmit} />

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login