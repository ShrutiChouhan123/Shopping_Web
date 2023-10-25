import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
    const cart = useSelector(state => state.cart.cart);
    const fev = useSelector(state => state.fev.fev)

    return (
        <div className="body-navbar">
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
        </div>
    )
}
