import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Component} = props;

    let navigate=useNavigate()
    useEffect(()=>{
   let users = JSON.parse(localStorage.getItem("login"))
    if(!users){
        navigate("/login")
    }
      
   })
  return (
    <div><Component/></div>
   
  
  )
}

export default Protected