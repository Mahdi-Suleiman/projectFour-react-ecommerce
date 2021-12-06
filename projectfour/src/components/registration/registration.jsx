import React, { Component } from 'react'

export class Registration extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            userEmail: '',
            userPassword: '',
            userRePassword:'',
            
        }
    }

    inputTracker = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    registrationChecker = (e) => {
        // e.preventDefault();

        let usersObject = {
            fname: this.state.firstName,
            lname: this.state.lastName,
            email: this.state.userEmail,
            password: this.state.userPassword,
            repassword: this.state.userRePassword,
            orders :[]
        }

        let usersArray = []

        let flag=true
        if(localStorage.getItem('users')){

            usersArray = JSON.parse(localStorage.getItem('users'))
            for(let i=0; i<usersArray.length ; i++){
                if(usersArray[i].email===this.state.userEmail){
                alert("Email already exist")
                return flag= false;
                }
            }
            if(flag===true){
                usersArray.push(usersObject)
                localStorage.setItem("users", JSON.stringify(usersArray))
                alert("Done...Go to login Page")
                
              }
      
            }
        else {
            usersArray.push(usersObject);
            localStorage.setItem('users', JSON.stringify(usersArray))
        }
        // if (JSON.parse(localStorage.getItem('users'))) {
        //     usersArray = (JSON.parse(localStorage.getItem('users')))
        //     usersArray.push(usersObject)
        //     localStorage.setItem('users', JSON.stringify(usersArray))
        // }
        // else {
        //     usersArray.push(usersObject);
        //     localStorage.setItem('users', JSON.stringify(usersArray))
        //     this.setState()
        // }
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
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" id="firstname" name="firstName"  value={this.state.firstName} onChange={this.inputTracker}   pattern="^[A-Za-z0-9]{5,10}$"  required/>
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>the Name must be more Than 4 characters</small>
                           
                        </div>
                        <div className="form-control">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.inputTracker} pattern="^[A-Za-z0-9]{5,10}$" required/>
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small> the Name must be more Than 4 characters</small>
                           
                            
                        </div>
                        <div className="form-control">
                            <label htmlFor="userEmail">Email</label>
                            <input type="email" name="userEmail" value={this.state.userEmail} onChange={this.inputTracker} required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"/>
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>It should be a valid Email address </small>
                           
                        </div>
                        <div className="form-control">
                            <label htmlFor="userPassword">Password</label>
                            <input type="password" id="userPassword" name="userPassword" value={this.state.userPassword} onChange={this.inputTracker} required pattern="^[A-Za-z0-9]{8,15}$"/>
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>the Password must be more Than 8 characters</small>
                           
                        </div>
                        <div className="form-control">
                            <label htmlFor="userRePassword">Repeat Password</label>
                            <input type="password" id="userRePassword" name="userRePassword" value={this.state.userRePassword} onChange={this.inputTracker} required pattern={this.state.userPassword}/>
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                            <small>the Password is not match</small>
                         
                        </div>
                        <button className="sub-btn">Submit</button>
                    </form>
                </div>
            </main>
        )
    }
}

export default Registration
