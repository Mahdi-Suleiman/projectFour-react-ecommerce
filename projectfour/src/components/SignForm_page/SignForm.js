import React, { Component } from "react";
import "./SignForm.css";
import { Routes } from "react-router-dom";
import swal from "sweetalert";

class SignForm extends Component {
  state = {
    user: {
      fullname: "",
      email: "",
      password: "",
      repeatpassword: "",
    },
    loginuser: {
      email: "",
      password: "",
    },
    error: "",
    pError: "",
    eError: "",
    signInShow: false,
    //[login&register | step1] to make the Routes to the home page
    isLoggedIn: "",
  };
  //Register Methods

  //Fetch data from inputs &set State
  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let newuser = { ...this.state.user };
    newuser[name] = value;
    this.setState({
      user: newuser,
    });
  };

  //signup Store data to local storage
  submitHandler = (event) => {
    event.preventDefault();
    let users = [];
    let user = { ...this.state.user };
    //set users in local storage if not set
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users));
    }
    // Storing form data in LocalStorage
    let storedUsers = JSON.parse(localStorage.getItem("users"));
    //checking if email is unique
    let emailExist;
    let nomatch;
    storedUsers.map((storeUser) => {
      if (
        storeUser.email == user.email &&
        user.password != user.repeatpassword
      ) {
        let eError = "testemail1";
        let pError = "testpass1";

        this.setState({ eError: eError, pError: pError });
        emailExist = true;
        nomatch = true;
      }
      if (
        storeUser.email == user.email &&
        user.password == user.repeatpassword
      ) {
        let eError = "email is already exist";
        let pError = "";
        this.setState({ eError: eError, pError: pError });
        emailExist = true;
      }
      if (
        storeUser.email != user.email &&
        user.password != user.repeatpassword
      ) {
        let eError = "";
        let pError = "the passwords does not match";
        this.setState({ eError: eError, pError: pError });
        nomatch = true;
      }
    });
    if (!emailExist && !nomatch) {
      const newUsers = [...storedUsers, user];
      localStorage.setItem("users", JSON.stringify(newUsers));
      // sessionStorage.setItem('loggedUser',JSON.stringify(user) )
      localStorage.setItem("loggedUser", JSON.stringify(user));
      //[register| step2] to make the Routes to the home page
      this.setState({
        isLoggedIn: true,
      });
      // package alert message
      swal({
        // title:  `${alertUserName}` ,
        title: "You are logged in Successfully ",
        text: "Welcome!",
        icon: "success",
        button: "ok ",
      });
    }
    //Reseting form after submition
    document.getElementById("register").reset();
  };

  //Login Methods
  loginChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let loginuser = { ...this.state.loginuser };
    loginuser[name] = value;
    // console.log(loginuser);
    this.setState({
      loginuser: loginuser,
    });
  };

  loginSubmitHandler = (event) => {
    event.preventDefault();

    if (localStorage.getItem("users")) {
      let storedUsers = JSON.parse(localStorage.getItem("users"));
      storedUsers.map((storedUser) => {
        if (
          storedUser.email == this.state.loginuser.email &&
          storedUser.password == this.state.loginuser.password
        ) {
          sessionStorage.setItem("loggedUser", JSON.stringify(storedUser));
          let alertUserName = JSON.parse(sessionStorage.getItem("loggedUser"));
          console.log(alertUserName);
          //[login | step2] to make the Routes to the home page
          this.setState({
            isLoggedIn: true,
          });
          // package alert message
          swal({
            // title:  `${alertUserName}` ,
            title: "You are logged in Successfully ",
            text: "Welcome!",
            icon: "success",
            button: "ok ",
          });
          // this.props.history.push("/");
        } else {
          let error = "Incorrect email or password";
          this.setState({ error: error });
        }
      });
    } else {
      let error = "Incorrect email or password";
      this.setState({ error: error });
    }
    document.getElementById("login").reset();
  };

  toggleFormsHandler = () => {
    const show = this.state.signInShow;
    this.setState({ signInShow: !show });
  };

  render() {
    //[login&rigister | step3 | final step] to make the Routes to the home page
    if (this.state.isLoggedIn == true) {
      return <Routes to={"/services"} />;
    }
    let form = (
      <form onSubmit={this.submitHandler} id="register">
        <h1>Sign Up</h1>
        <input
          onChange={this.changeHandler}
          className="my-4"
          value={this.state.user.fullname}
          type="text"
          name="fullname"
          id
          placeholder="Full Name"
          required
        />
        <input
          onChange={this.changeHandler}
          className="my-4"
          value={this.state.user.email}
          type="email"
          name="email"
          id
          placeholder="Email"
          required
        />
        <div className="errorMsg">{this.state.eError}</div>
        <input
          onChange={this.changeHandler}
          className="my-4"
          value={this.state.user.password}
          type="password"
          name="password"
          id
          placeholder="Password"
          required
        />
        <input
          onChange={this.changeHandler}
          className="my-4"
          value={this.state.user.repeatpassword}
          type="password"
          name="repeatpassword"
          id
          placeholder="Password-confirm"
          required
        />
        <div className="errorMsg ">{this.state.pError}</div>
        <br />
        <br />
        <input
          className="my-5 mt-5"
          type="submit"
          defaultValue="Sign Up"
          className="submit-btn"
        />
        <br />
        <p onClick={this.toggleFormsHandler}>
          {" "}
          have an account? , please <button className="btn-sinup" >sign in</button>
        </p>
      </form>
    );
    if (this.state.signInShow) {
      form = (
        <form onSubmit={this.loginSubmitHandler} id="login">
          <h1 className="my-4">Sign In</h1>
          <div className="errorMsg">{this.state.error}</div>
          <input
            onChange={this.loginChangeHandler}
            className="my-4"
            type="email"
            name="email"
            id
            placeholder="Email"
            required
          />
          <input
            onChange={this.loginChangeHandler}
            className="my-5"
            type="password"
            name="password"
            id
            placeholder="Password"
            required
          />
          <input type="submit" defaultValue="Sign In" className="submit-btn" />
          <p onClick={this.toggleFormsHandler}>
            {" "}
            don't have an account? <button className="btn-sinup">sign up here</button>
          </p>
        </form>
      );
    }
    return (
      <div>
        <section className="form">
          <div className="login-panel">
            <div className="left-side" />
            <div className="right-side">{form}</div>
          </div>
        </section>
      </div>
    );
  }
}
export default SignForm;
