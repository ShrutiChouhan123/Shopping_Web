import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { removeCart } from '../redux/createSlice';
import { Link } from 'react-router-dom';



function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart)
  let total = 0
  cart.map(item => total += item.price)

  const fev = useSelector(state => state.fev.fev);

  return (
    <>
      <h2>cart items</h2>
      {cart.map((item) => {


        return (
          <>
            <div className="body-navbar">

              <ul className="nav-links">
                <li>
                  <Link to='/' className="nav-buttons">Home</Link>
                </li>

                <li className="center">
                  <Link to="/products" className="nav-buttons">Products</Link>
                </li>


                <li className="upward" style={{ marginLeft: "40rem" }} >
                  <Link to='/cart' className="nav-buttons">
                    <span class="material-icons" >shopping_cart </span>
                    <span class="notification-counter">{cart.length}</span>

                  </Link>

                </li>
                <li className="forward" >
                  <Link to='/wishlist' className="nav-buttons">
                    <span class="material-icons" > <i class="material-icons">favorite</i></span>
                    <span class="notification-counter">{fev.length}</span>
                  </Link>
                </li>
                

              </ul>

            </div>

            <div style={{ marginTop: "5rem", height: "2rem", width: "30rem" }}>
              <div className='d-flex' 
                style={{ width: "15rem", marginLeft: "23rem" }}
              >
                <img src={item.image} alt='' style={{ width: "50%", height: "50%" }} />
                <div style={{ marginTop: "5rem" }}>
                  <h4 style={{ marginLeft: "2rem" }}>{item.name}</h4>
                  <h4 style={{ marginLeft: "2rem" }}>{item.price}</h4>
                  {/* <button style={{marginLeft:"4rem"}} className='btn'>remove</button> */}

                  <button class="button-28" role="button" style={{ marginLeft: "2rem", width: "70%" }} onClick={() => dispatch(removeCart({ id: item.id }))}>Remove</button>


                </div>
              </div>
            </div>

          </>
        )
      })}<br />
      <div style={{ width: "100%", height: "5rem", fontSize: "2rem", marginLeft: "50px" }}>
        Total:{total}
      </div>


    </>
  )
}

export default Cart