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

import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import CartDisplay from './components/cart/cart.display';
import ProductDetails from './components/card/product.details';
import Footer from './components/footer/footer';
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

        }
    }

    minusCounter = (price) => {
        if (JSON.parse(localStorage.getItem('loggedUser'))) {
            // -1 to be solved
            if(this.state.counter >=0)
            this.setState({ counter: this.state.counter - 1 })
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

                <BrowserRouter>
                <Navbar counter={this.state.counter}/>
                {/* <Card plusCounter={this.plusCounter} /> */}
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/card" element={<Card plusCounter={this.plusCounter}/>} />
                    <Route exact path="/signin" element={<Login/>} />
                    <Route exact path="/registration" element={<Registration/>} />
                    <Route exact path="/cartdisplay" element={<Cart plusCounter={this.plusCounter} minusCounter={this.minusCounter}/>}/>
                    <Route exact path="/checkout" element={<CheckoutButton/>} />
                     <Route path="/productdetails" element={<ProductDetails />}>
                </Routes>
                <Footer />

                {/* <Login />
                <Registration />
                <UserProfile />   */}
                {/* <Admin counter={this.state.counter} totalPrice={this.state.totalPrice}/>  */}
                {/* <Cart />  */}
                {/* <CheckoutButton totalPrice={this.state.totalPrice} counter={this.state.counter}/> */}
                </BrowserRouter >
    
            </div>

        );
    }
}

export default App