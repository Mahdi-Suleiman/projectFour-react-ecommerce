import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom"

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
                                <NavLink class="nav-link" to="/">Home</NavLink>

                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/card">Products</NavLink>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            
                            {localStorage.getItem('loggedUser') ? <div>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/signin"><button onClick={handleLogout}>Logout</button></NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/cartdisplay"><i class="fas fa-shopping-cart"></i></NavLink>
                                <span className="item-count">{props.counter}</span>
                            </li>
</div> : <li class="nav-item">
                                <NavLink class="nav-link" to="/signin">Login</NavLink>
                            </li>}
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}
