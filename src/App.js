import React, { useState } from "react";
import './App.css';
import Product from "./Components/ProductData";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import Header from "./Components/Header";
import Product_Details from "./Components/Product_Details";
import { useSelector } from "react-redux";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Protected from "./Components/Protected";





function App() {
  // const cart = useSelector(state => state.cart.cart);
  // const fev = useSelector(state => state.fev.fev)

  return (
   

    <>
   
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>

          {/* <Route exact path="/products" element={<Protected Component={Product}/>}></Route> */}
          <Route exact path="/products" element={<Product />}></Route>

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/productdetails/:id" element={<Product_Details />}></Route>
          <Route exact path="login" element={<Login />}></Route>
          <Route exact path="/products/profile" element={<Profile />}></Route>


        </Routes>
      </BrowserRouter>
     
   
  

    </>

  );

}

export default App;


{/* <div className="body-navbar">
          <ul className="nav-links">
            <li>
              <Link to='/' className="nav-buttons">Home</Link>
            </li>
            <li className="center">
              <Link to='/products' className="nav-buttons">Products</Link>
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
        </div> */}