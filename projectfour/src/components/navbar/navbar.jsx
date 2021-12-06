import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom"

export default function Navbar(props) {

    const handleLogout = ()=>{
        if(localStorage.getItem('cart')){
            localStorage.removeItem('cart')
        }
        localStorage.removeItem('loggedUser')
    }

    return (
        <header>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/card">Products</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/card">Profile</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            
                            {localStorage.getItem('loggedUser') ? <div className="customContents">
                            <li class="nav-item CustomCartZ">
                                <Link class="nav-link" to="/signin"><button  onClick={handleLogout}>Logout</button></Link>
                            </li>
                            <li class="nav-item CustomCartZ">
                                <Link className="nav-link" to="/cartdisplay"><i className="fas fa-shopping-cart CustomCartZ"></i></Link>
                                <span className="item-count CustomCartZ">{props.counter}</span>
                            </li>
                            </div> : <li class="nav-item">
                                <Link class="nav-link " to="/signin">Login</Link>
                            </li>}
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}