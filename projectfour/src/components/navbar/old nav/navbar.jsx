import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom"

export default function Navbar(props) {

    const handleLogout = ()=>{
        if(localStorage.getItem('cart')){
            localStorage.removeItem('cart')
        }
        localStorage.removeItem('loggedUser')
        props.handleLogOut();
    }

    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/card">Products</Link>
                            </li>
                            <li className="nav-item">
                                
                            <Link className="nav-link" to="/userprofile">Profile</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            
                            {props.loggedIn ? <div className="customContents">
                            <li className="nav-item CustomCartZ">
                                <Link className="nav-link" to="/"><button  onClick={handleLogout}>Logout</button></Link>
                            </li>
                            <li className="nav-item CustomCartZ">
                                <Link className="nav-link" to="/cartdisplay"><i className="fas fa-shopping-cart CustomCartZ"></i></Link>
                                <span className="item-count CustomCartZ">{props.counter}</span>
                            </li>
                            </div> : <li className="nav-item">
                                <Link className="nav-link " to="/signin">Login</Link>
                            </li>}
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}