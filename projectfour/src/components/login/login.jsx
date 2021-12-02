import React, { Component } from 'react'

export class Login extends Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            userPassword: ''
        }
    }

    loginFieldTracker = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    loginValidation = (e) => {
        e.preventDefault();

        //  When logging in, check if the email matches the email on local storage
        //  when logging in, check if the password matches the password of the same email

    }

    render() {
        return (
            <main className="main-cont">
                <div className="container">
                    <div className="header">
                        <h2>Sign in</h2>
                    </div>
                    <form id="form" className="form" onSubmit={this.loginValidation}>
                        <div className="form-control">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="userName" value={this.state.userName} onChang={this.loginFieldTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small id="result">Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="userPassword" value={this.state.userPassword} onChang={this.loginFieldTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <button type="submit" className="log-btn">Sign in</button>
                        <p className="font">Don't have an account?</p>
                        <button type="button" class="reg-btn" onclick="goToRegisteration()">Register</button>
                    </form>
                </div>
            </main>
        )
    }
}

export default Login
