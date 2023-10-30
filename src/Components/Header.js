import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {

    return (

        <div className="body-navbar">

            <ul className="nav-links">
                <li>
                    <Link to='/' className="nav-buttons">Home</Link>
                </li>
                <div className="dropdown" style={{ marginLeft: "800px" }}>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <li className="forward">
                            <div style={{color:"white"}}>
                                <span><i className="fa fa-user" style={{ fontSize: "29px" }}></i></span>
                             </div>
                        </li>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div style={{color:"white",marginLeft:"3rem"}}><Link to='/login' className="nav-buttons">Login</Link></div>

                    </div>
                </div>
               </ul>
        </div>
    )
}
