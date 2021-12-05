import './App.css';
import Registration from './components/registration/registration';
import Login from './components/login/login';
import UserProfile from './components/userprofile/userprofile';
import React from 'react';
import Admin from './components/admin/admin';
import Card from './components/card/card';
import AddToCart from './components/cart/addtocart';
import Cart from './components/cart/cart';
import CheckoutButton from './components/cart/checkout.button';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            totalPrice: JSON.parse(localStorage.getItem('total'))
        }
    }

    plusCounter = (price) => {
        if (JSON.parse(localStorage.getItem('loggedUser'))) {
            this.setState({ counter: this.state.counter + 1 })
            this.setState({totalPrice:JSON.parse(localStorage.getItem('total'))})
            this.setState({totalPrice: Number(this.state.totalPrice) + Number(price)})
            console.log("hello" + typeof(this.state.totalPrice))
            localStorage.setItem('total', JSON.stringify(this.state.totalPrice))
            console.log(typeof(this.state.totalPrice))
            console.log("hello" + typeof(price))
        }
    }

    // editUserData = (e,firstname,lastname,email,password) => {
    //     e.preventDefault();

    //     let localArray = [JSON.parse(localStorage.getItem('users'))]
    //     let loggedUser = JSON.parse(localStorage.getItem('isLogged'))

    //     console.log(localArray)
    //     console.log(loggedUser)

    //     for(let i=0;i<localArray.length;i++){
    //         if(localArray[i].fname===loggedUser){
    //             firstname = localArray[i].fname;
    //             lastname = localArray[i].lname;
    //             email = localArray[i].email;
    //             password = localArray[i].password;
    //             this.setState({currentUserData: localArray[i]})
    //         }
    //     }

    // }

    render() {
        return (
            <div>
                <Login />
                <Registration />
                <UserProfile />  
                 {/* <Card plusCounter={this.plusCounter} /> */}
                {/* <Admin counter={this.state.counter} totalPrice={this.state.totalPrice}/>  */}
                {/* <Cart />  */}
                <CheckoutButton totalPrice={this.state.totalPrice} counter={this.state.counter}/>

            </div>
        );
    }
}

export default App