import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './login.style.css'

export class Login extends Component {
    constructor() {
        super();

        this.state = {
            userEmail: '',
            userPassword: ''
        }
    }

    loginFieldTracker = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    loginValidation = (e) => {
        e.preventDefault();

        let flag = true;
        let usersArray = [];
        usersArray = (JSON.parse(localStorage.getItem('users')))
        for (let i = 0; i < usersArray.length; i++) {
            if (this.state.userEmail === usersArray[i].email && this.state.userPassword === usersArray[i].password) {
                localStorage.setItem('loggedUser', JSON.stringify(usersArray[i]))
                alert("Thank You ...You Can Go To Home")
                return (flag = false)
            }
        }
        if (flag === true) {
            alert('you Need to sign up ')
        }

        // let arr = [];
        // arr = {fname:"ghassan",lname:"",email:"gh@mail.com",password:"",repassword:""}
        // localStorage.setItem('isLogged', 'ghassan')
        // localStorage.setItem('loggedUser',JSON.stringify(arr))
        //  When logging in, check if the email matches the email on local storage
        //  when logging in, check if the password matches the password of the same email

    }

    render() {
        return (
            <main className="main-cont">
                <div className="container-login">
                    <div className="header">
                        <h2>Sign in</h2>
                    </div>
                    <form id="form" className="form" onSubmit={this.loginValidation}>
                        <div className="formControl">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="userEmail" value={this.state.userEmail} onChange={this.loginFieldTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small id="result">Error message</small>
                        </div>
                        <div className="formControl">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="userPassword" value={this.state.userPassword} onChange={this.loginFieldTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <button type="submit" className="log-btn">Sign in</button>
                        <p className="font">Don't have an account?</p>
                        <NavLink to="/registration"><button type="button" className="reg-btn" >Registration</button></NavLink>
                    </form>
                </div>
            </main>
        )
    }
}

export default Login
