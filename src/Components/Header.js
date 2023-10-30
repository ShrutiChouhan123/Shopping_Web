import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {

    return (

        <div className="body-navbar">

            <ul className="nav-links">
                <li>
                    <Link to='/' className="nav-buttons">Home</Link>
                </li>
                {/* <li className="center">
                    <Link to="/products" className="nav-buttons">Products</Link>
                </li> */}

                {/* <li className="upward" style={{ marginLeft: "40rem" }} >
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
                </li> */}
                <div class="dropdown" style={{ marginLeft: "800px" }}>
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <li className="forward">
                            <a className="nav-buttons">
                                <span><i class="fa fa-user" style={{ fontSize: "29px" }}></i></span>
                            </a>
                        </li>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="/login"> <Link to='/login' className="nav-buttons">Login</Link></a>
         
                        {/* <a class="dropdown-item" href="#"><Link to="/profile"  className="nav-buttons">Profile</Link></a> */}

                    </div>
                </div>
                {/* <li className="forward" style={{ marginLeft: "800px" }}>
                    <Link to='/login' className="nav-buttons">
                        <span><i class="fa fa-user" style={{ fontSize: "29px" }}></i></span>
                    </Link>
                </li> */}
            </ul>

        </div>
    )
}
