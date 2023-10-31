import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="body-navbar">
            <ul className="nav-links">
                <li>
                    <Link to='/' className="nav-buttons"><i class="fa fa-home" style={{fontSize:"35px"}}></i></Link>
                </li>
                <div className="dropdown" style={{ marginLeft: "800px" }}>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <li className="forward">
                            <div style={{ color: "white" }}>
                                <span>
                                <i class="fa fa-bars" style={{fontSize:"30px"}}></i>
                                </span>
                            </div>
                        </li>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div style={{ color: "white", marginLeft: "3rem",width:"20%" }}><Link to='/login' className="nav-buttons">Login</Link></div>
                    </div>
                </div>
            </ul>
        </div>
    )
}
