import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { removeCart, increse, decrese } from '../redux/createSlice';
import { Link } from 'react-router-dom';


function Cart() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart)
  let total = 0
  cart.map(item => total += item.price * item.quntity)
  const fev = useSelector(state => state.fev.fev);

  const handleIncrese = (id) => {
    dispatch(increse(id))
    console.log(id)

  }

  const handleDecrese = (id) => {
    dispatch(decrese(id))
    console.log(id)

  }

  return (
    <>
      <h2>cart items</h2>
      <div>
      {cart.map((item) => {
        return (
          <>
            <div className="body-navbar">

              <ul className="nav-links">
                <li>
                  <Link to='/' className="nav-buttons"><i class="fa fa-home" style={{ fontSize: "35px" }}></i></Link>
                </li>

                <li className="center">
                  <Link to="/products" className="nav-buttons">Products</Link>
                </li>

                <li className="upward" style={{ marginLeft: "40rem" }} >
                  <Link to='/cart' className="nav-buttons">
                    <span className="material-icons" >shopping_cart </span>
                    <span className="notification-counter">{cart.length}</span>
                  </Link>

                </li>
                <li className="forward" >
                  <Link to='/wishlist' className="nav-buttons">
                    <span className="material-icons" > <i className="material-icons">favorite</i></span>
                    <span className="notification-counter">{fev.length}</span>
                  </Link>
                </li>

              </ul>

            </div>


            <div style={{ marginTop: "8rem", height: "6rem", width: "30rem" }}>
              <div className='productCard2'
                style={{ width: "15rem", marginLeft: "23rem" }}
              >
                <img src={item.image} alt='' style={{ width: "50%", height: "50%" }} />
                <div style={{ marginTop: "0rem" }}>
                  <h4 style={{ marginLeft: "2rem" }}>{item.name}</h4>
                  <h4 style={{ marginLeft: "2rem" }}>{item.price}</h4>
                  {/* <h4>quantity : {item.quntity}</h4> */}
                  <div style={{ width: "25%", marginLeft: "6rem", height: "5rem" }}>
                    <button style={{ borderRadius: "20px" }} onClick={() => handleIncrese(item.id)}>+</button><p>{item.quntity}</p><button style={{ borderRadius: "20px" }} onClick={() => handleDecrese(item.id)}>-</button>
                  </div>
                  <br />
                  <br />
                  <br />

                  <button className="button-28" style={{ marginLeft: "2rem", width: "70%" }} onClick={() => dispatch(removeCart({ id: item.id }))}>Remove</button>

                </div>
              </div>
            </div>
          

          </>
        )
      })}<br />
       <div style={{ width: "30%",background: "black", color: "white" ,bottom:"0px",position:"fixed",height:"3rem",marginLeft:"1rem",borderRadius:"6px"}}>
        <p style={{textAlign:"center",fontWeight:"500",marginTop:"1rem"}}>Total:{total}</p>
      </div>
      </div>
    </>
  )
}

export default Cart