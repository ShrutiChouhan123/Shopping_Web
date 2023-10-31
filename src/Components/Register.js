import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/createSlice';
import { useNavigate } from 'react-router-dom';



const Register = () => {
      const [username, setUserName] = useState()
      const [email, setEmail] = useState()
      const [password, setPassword] = useState()
      const [mobile, setMobile] = useState()
      const [city, setCity] = useState()
      const [isReistered, setIsRegistered] = useState(false)
      const navigate = useNavigate()
      const dispatch = useDispatch()
      
      const onRegister = () => {
        console.log(username, " ", email, " ", password," ",mobile," ");
          if (username && username !== "" && email && email !=="" && password && password !== ""&& mobile && mobile !== ""&& city && city!== ""){
            const registerInfo = {
                username:username,
                email:email,
                password:password,
                mobile:mobile,
                city:city
            }
            console.log(registerInfo);
            let resFlag = dispatch((registerUser(registerInfo)))
            if(resFlag){
                setIsRegistered(true)
                navigate("/login")
            }
          }
      }
      return (
        <div>
            <div className="container">
              <div className="main text-center">
                  <div className="loginbox mx-auto mt-5 p-5 bg-light border border-2 rounded" style={{width:"85%"}}>
                      <h1 className="mb-5">Registration form</h1>
                      
                      <div className="input-group mb-3">
                          <span className="input-group-text">UserName</span>
                          <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="user name"/>
                      </div>
                      <div className="input-group mb-3">
                          <span className="input-group-text">Email</span>
                          <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" required/>
                      </div>
                      <div className="input-group mb-3">
                          <span className="input-group-text">Password</span>
                          <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} required/>
                      </div>
                      <div className="input-group mb-3">
                          <span className="input-group-text">Mobile</span>
                          <input className="form-control" type="number" onChange={(e) => setMobile(e.target.value)} required/>
                      </div>
                      <div className="input-group mb-3">
                          <span className="input-group-text">City</span>
                          <input className="form-control" type="text" onChange={(e) => setCity(e.target.value)} required/>
                      </div>
                      {/* <button className="btn bg-success rounded border text-white mt-3" onClick={onLogin}>Log in</button> */}
                      <button className="btn bg-primary rounded border text-white mt-3" onClick={onRegister}>Register</button>
                      {/* </div> */}
                  </div>
              </div>
            </div>
        </div>
      )
  }
  
  export default Register