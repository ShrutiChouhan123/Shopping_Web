import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Protect2(props) {
    const Component2 = props;
    let navigate=useNavigate()
    useEffect(()=>{
    let login = localStorage.getItem("login")
    if(login){
        navigate("/products")
    }
    else{
        navigate("/login")
    }
    
    
   })

  return (
    <>
    <Component2/>
    </>
  )
}

export default Protect2