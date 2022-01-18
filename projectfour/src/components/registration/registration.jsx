import React, { Component } from 'react'
import './registration.style.css'
export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            userEmail: '',
            userPassword: '',
            userRePassword: '',
            canRegister: false,
        }
    }

    inputTracker = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    checkInputs = () => {
        const form = document.getElementById('form');
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const userEmail = document.getElementById('userEmail');
        const userPassword = document.getElementById('userPassword');
        const userRePassword = document.getElementById('userRePassword');
        // const usernamePattern = /^[A-Za-z]{3,13}$/;

        // trim to remove the whitespaces
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const userEmailValue = userEmail.value.trim();
        const userPasswordValue = userPassword.value.trim();
        const userRePasswordValue = userRePassword.value.trim();

        const flags = [];
        if (firstNameValue === '') {
            this.setErrorFor(firstName, 'First name cannot be blank');
            flags.push(false);
        } else {
            this.setSuccessFor(firstName);
            flags.push(true);
        }
        //
        if (lastNameValue === '') {
            this.setErrorFor(lastName, 'Last name cannot be blank');
            flags.push(false);
        } else {
            this.setSuccessFor(lastName);
            flags.push(true);
        }
        //
        if (userEmailValue === '') {
            this.setErrorFor(userEmail, 'Email cannot be blank');
            flags.push(false);

        } else if (!this.isEmail(userEmailValue)) {
            this.setErrorFor(userEmail, 'Not a valid email');
            flags.push(false);

        } else {
            this.setSuccessFor(userEmail);
            flags.push(true);

        }

        //
        if (userPasswordValue === '') {
            this.setErrorFor(userPassword, 'Password cannot be blank');
            flags.push(false);

        } else if (userPasswordValue.length < 6) {

            this.setErrorFor(userPassword, 'Password cannot be less than 6 characters');
            flags.push(false);

        } else {
            this.setSuccessFor(userPassword);
            flags.push(true);
        }
        //
        if (userRePasswordValue === '') {
            this.setErrorFor(userRePassword, 'Password cannot be blank');
            flags.push(false);

        } else if (userRePasswordValue.length < 6) {

            flags.push(false);
            this.setErrorFor(userRePassword, 'Password cannot be less than 6 characters');
        } else {
            this.setSuccessFor(userRePassword);
            flags.push(true);
        }

        if (userPasswordValue !== userRePasswordValue) {
            this.setErrorFor(userRePassword, 'Passwords do not match');
            flags.push(false);
        }


        console.log(flags);
        let flag = true;
        // if any flag is false, return false;
        for (let index = 0; index < flags.length; index++) {
            if (flags[index] === false) {
                // flag = false;
                console.log("before return", flags[index]);
                this.setState({
                    canRegister: false
                })
                return;
                // break;
            }
        }

        //if every flag is true return true;
        // return true;
        console.log("before setstate", this.state.canRegister);
        this.setState({
            canRegister: true
        })
        console.log("after setstate", this.state.canRegister);

    }


    setErrorFor = (input, message) => {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'formControl error';
        small.innerText = message;
    }

    setSuccessFor = (input) => {
        const formControl = input.parentElement;
        formControl.className = 'formControl success';
    }
    isEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    registrationChecker = (e) => {
        e.preventDefault();

        let usersObject = {
            fname: this.state.firstName,
            lname: this.state.lastName,
            email: this.state.userEmail,
            password: this.state.userPassword,
            repassword: this.state.userRePassword,
            orders: []

        }

        let usersArray = []

        let flag = true
        if (this.state.canRegister === true) {
            if (localStorage.getItem('users')) {
                usersArray = JSON.parse(localStorage.getItem('users'))
                for (let i = 0; i < usersArray.length; i++) {
                    if (usersArray[i].email === this.state.userEmail) {
                        alert("Email already exist")
                        flag = false;
                        return false;
                    }
                }
                if (flag === true) {
                    usersArray.push(usersObject)
                    localStorage.setItem("users", JSON.stringify(usersArray))
                    alert("Done...Go to login Page")
                }

            }

            else {
                usersArray.push(usersObject);
                localStorage.setItem('users', JSON.stringify(usersArray))

            }
        }
    }

    render() {
        return (
            <main className="main-cont">
                <div className="registration-container">
                    <div className="header">
                        <h2>Create Account</h2>
                    </div>
                    <form id="form" className="form" onSubmit={this.registrationChecker}>
                        <div className="formControl">

                            <label htmlFor="firstName">Firstname</label>
                            <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.inputTracker} onKeyUp={this.checkInputs} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>
                        </div>
                        <div className="formControl">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.inputTracker} onKeyUp={this.checkInputs} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>


                        </div>
                        <div className="formControl">
                            <label htmlFor="userEmail">Email</label>
                            <input type="email" id="userEmail" name="userEmail" value={this.state.userEmail} onChange={this.inputTracker} onKeyUp={this.checkInputs} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>

                        </div>
                        <div className="formControl">
                            <label htmlFor="userPassword">Password</label>
                            <input type="password" id="userPassword" name="userPassword" value={this.state.userPassword} onChange={this.inputTracker} onKeyUp={this.checkInputs} />
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>Error message</small>

                        </div>
                        <div className="formControl">
                            <label htmlFor="userRePassword">Repeat Password</label>
                            <input type="password" id="userRePassword" name="userRePassword" value={this.state.userRePassword} onChange={this.inputTracker} onKeyUp={this.checkInputs} />
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
