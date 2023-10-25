import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import Product from "./Components/ProductData";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";




function App() {
  // const cart = useSelector(state => state.cart.cart);
  // const fev = useSelector(state => state.fev.fev)

  return (


    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/products" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
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