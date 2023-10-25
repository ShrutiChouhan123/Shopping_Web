import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { removeCart } from '../redux/createSlice';


function Cart() {
  const dispatch = useDispatch();
  const cart =useSelector(state =>state.cart.cart)
  let total=0
  cart.map(item=>total+=item.price)
  const remove = (cart) =>{
    dispatch(removeCart(cart))
  }
  return (
    <>
     <h2>cart items</h2>
     {cart.map((item)=>{
      
      
      return (
        <>

        <div style={{marginTop:"3rem",height:"14rem",width:"30rem"}}>
        <div className='d-flex' style={{width:"30rem",marginLeft:"15rem"}}>
          <img src={item.image} alt='' style={{height:"15rem",width:"250rem"}}/>
          <div style={{marginTop:"5rem"}}>
            <h4 style={{marginLeft:"4rem"}}>{item.name}</h4>
            <h4 style={{marginLeft:"4rem"}}>{item.price}</h4>
            {/* <button style={{marginLeft:"4rem"}} className='btn'>remove</button> */}
            <button class="button-28" role="button" style={{ marginLeft:"4rem",width:"70%"}} onClick={()=>remove(item)}>Remove</button>

          </div>
        </div>
        </div>

        </>
      )
     })}
       <div style={{width:"100%",height:"5rem",fontSize:"2rem",marginTop:"2rem"}}>
        Total:{total}
       </div>
    </>
  )
}

export default Cart