import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/createSlice';
import { useNavigate } from 'react-router-dom';
import './Register.css'



const Register = () => {
      const [username, setUserName] = useState()
      const [email, setEmail] = useState()
      const [password, setPassword] = useState()
      const [mobile, setMobile] = useState()
    //   const [city, setCity] = useState()
      const [isReistered, setIsRegistered] = useState(false)
      const navigate = useNavigate()
      const dispatch = useDispatch()
      
      const onRegister = () => {
        console.log(username, " ", email, " ", password," ",mobile," ");
          if (username && username !== "" && email && email !=="" && password && password !== ""&& mobile && mobile !== ""){
            const registerInfo = {
                username:username,
                email:email,
                password:password,
                mobile:mobile,
                // city:city
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
        // <div>
        //     <div className="container">
        //       <div className="main text-center">
        //           <div className="loginbox mx-auto mt-5 p-5 bg-light border border-2 rounded" style={{width:"100%",height:"24rem"}}>

        //               <div className="input-group mb-3">
        //                   <span className="input-group-text">UserName</span>
        //                   <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="user name"/>
        //               </div>
        //               <div className="input-group mb-3">
        //                   <span className="input-group-text">Email</span>
        //                   <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" required/>
        //               </div>
        //               <div className="input-group mb-3">
        //                   <span className="input-group-text">Password</span>
        //                   <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} required/>
        //               </div>
        //               <div className="input-group mb-3">
        //                   <span className="input-group-text">Mobile</span>
        //                   <input className="form-control" type="number" onChange={(e) => setMobile(e.target.value)} required/>
        //               </div>
        //               <div className="input-group mb-3">
        //                   <span className="input-group-text">City</span>
        //                   <input className="form-control" type="text" onChange={(e) => setCity(e.target.value)} required/>
        //               </div>
        //               {/* <button className="btn bg-success rounded border text-white mt-3" onClick={onLogin}>Log in</button> */}
        //               <button className="btn bg-primary rounded border text-white mt-3" onClick={onRegister}>Register</button>
        //               {/* </div> */}
        //           </div>
        //       </div>
        //     </div>
        // </div>
        <div className="page">
        <div className="container">
          <div className="left">
            <div className="login">Signup</div>
            <div className="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
          </div>
          <div className="right" style={{height:"23rem"}}> 
            <svg viewBox="0 0 320 300">
              <defs>
                
              </defs>
              <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
            </svg>
            <div className="form">
              <label for="email">User Name</label>
              <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="user name"/>
              <label for="password">Email</label>
               <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" required/>
               <label for="password">Password</label>
              <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} required/>
              <label for="password">Mobile</label>
              <input className="form-control" type="number" onChange={(e) => setMobile(e.target.value)} required/>
              {/* <label for="password">City</label> */}
              {/* <input className="form-control" type="text" onChange={(e) => setCity(e.target.value)} required/> */}
              <button style={{background:"none"}} onClick={onRegister}>Register</button>

              {/* <input type="submit" id="submit" value="Submit" onClick={onRegister}/> */}

            </div>
          </div>
        </div>
      </div>
      )
  }
  
  export default Register