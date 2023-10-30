import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { removeWishlist } from '../redux/createSlice';
import { Link } from 'react-router-dom';




function Wishlist() {
  const dispatch = useDispatch();
  const fev = useSelector(state => state.fev.fev)
  const cart = useSelector(state => state.cart.cart);

  return (
    <>
      <h2>fev items</h2>
      {fev.map((item) => {
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
            <div style={{ marginTop: "5rem", height: "2rem", width: "30rem" }}>
              <div 
              className='productCard2'
                style={{ width: "15rem", marginLeft: "23rem" }}
              >
                <img src={item.image} alt='' style={{ width: "50%", height: "50%" }} />
                <div style={{ marginTop: "5rem" }}>
                  <h4 style={{ marginLeft: "2rem" }}>{item.name}</h4>
                  <button className="button-28" style={{ marginLeft: "2rem", width: "70%" }} onClick={() => dispatch(removeWishlist({ id: item.id }))}>Remove</button>
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