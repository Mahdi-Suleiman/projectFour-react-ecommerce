import React, { Component } from 'react'
import { Link} from "react-router-dom";
import './nav-style.css';
import Logo from './logo.png'


export default class Navigation extends Component {
    handleLogout = () => {
       localStorage.clear();
        window.location.reload();
    }
    render() {
        let buttons;
        let Profile;

        if (!localStorage.getItem('loggedUser')) {
             buttons = (

                <ul className="nav-ul">
               
                    <li className="nav-li">
                        <Link to={'/signup-signin'} className="nav-links"> Sign in | Sign Up </Link>
                      
                    </li>
                </ul>
            )
            Profile = '';
        } else {
            buttons = (
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to={'/'} onClick={this.handleLogout} className="nav-links">Logout</Link>
                    </li>
                </ul>
            )
            Profile = 'Profile';
        }
        return (
            <div className={'nav-container'}>
                <nav className="sub-nav-container">
                    <div className={'main-nav'}>
                        <div className={'nav-logo'}>
                            <Link to={'/'} className=""><img src={Logo} className='logo-image-nav' alt="pcbuilder" /></Link>
                        </div>
                        <div className={'nav-pages'}>
                            <Link to={'/'} className="nav-menu">Home</Link>
                          
                            <Link to={'/products'} className="nav-menu">Products</Link>
                       
                            <Link to={'/profile'} className="nav-menu">{Profile}</Link>
                        </div>
                    </div>
                    <div className="nav-buttons">
                        {buttons}
                    </div>
                </nav>
            </div>
        );
    }
}
