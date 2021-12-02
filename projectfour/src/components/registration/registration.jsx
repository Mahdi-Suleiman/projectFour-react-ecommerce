import React, { Component } from 'react'

export class Registration extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            userEmail: '',
            userPassword: '',
            userRePassword: ''
        }
    }

    inputTracker = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    registrationChecker = (e) => {
        e.preventDefault();

        let usersObject = {
            fname: this.state.firstName,
            lname: this.state.lastName,
            email: this.state.userEmail,
            password: this.state.userPassword,
            repassword: this.state.userRePassword
        }

        let usersArray = []

        if (JSON.parse(localStorage.getItem('users'))) {
            alert('test')
        }
        else {
            usersArray.push(usersObject);
            localStorage.setItem('users', JSON.stringify(usersArray))
            this.setState()
        }
    }

    render() {
        return (
            <main className="main-cont">
                <div className="container">
                    <div className="header">
                        <h2>Create Account</h2>
                    </div>
                    <form id="form" className="form" onSubmit={this.registrationChecker}>
                        <div className="form-control">
                            <label htmlFor="username">Firstname</label>
                            <input type="text" id="username" name="firstName" value={this.state.firstName} onChange={this.inputTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="username">Lastname</label>
                            <input type="text" id="username" name="lastName" value={this.state.lastName} onChange={this.inputTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="username">Email</label>
                            <input type="email" name="userEmail" value={this.state.userEmail} onChange={this.inputTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="userPassword" value={this.state.userPassword} onChange={this.inputTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <div className="form-control">
                            <label htmlFor="passwordcheck">Repeat Password</label>
                            <input type="password" id="password2" name="userRePassword" value={this.state.userRePassword} onChange={this.inputTracker} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <button className="sub-btn">Submit</button>
                    </form>
                </div>
            </main>
        )
    }
}

export default Registration
