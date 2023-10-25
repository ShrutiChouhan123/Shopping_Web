import React from 'react';
import { useSelector } from 'react-redux';
import './index.css'


function Wishlist() {
  const fev =useSelector(state =>state.fev.fev)
  return (
    <>
     <h2>fev items</h2>
     {fev.map((item)=>{
      return (
        <>

        <div style={{marginTop:"3rem",height:"14rem",width:"30rem"}}>
        <div className='d-flex' style={{width:"30rem",marginLeft:"15rem"}}>
          <img src={item.image} alt='' style={{height:"15rem",width:"250rem"}}/>
          <div style={{marginTop:"5rem"}}>
            <h4 style={{marginLeft:"4rem"}}>{item.name}</h4>
            {/* <button style={{marginLeft:"4rem"}} className='btn'>remove</button> */}
            <button class="button-28" role="button" style={{ marginLeft:"4rem",width:"70%"}}>Remove</button>

          </div>
        </div>
        </div>
       
        </>
      )
     })}
    </>
  )
}

export default Wishlist;