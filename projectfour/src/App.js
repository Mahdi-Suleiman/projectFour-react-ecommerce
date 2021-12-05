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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/homepage';

import ProductDetails from './components/card/product.details';
import Footer from './components/footer/footer';
import CartDisplay from './components/cart/cart.display';
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
            totalPrice: JSON.parse(localStorage.getItem('total')),
            clicked: false,
        }
    }

    plusCounter = () => {
        if (JSON.parse(localStorage.getItem('loggedUser'))) {
            this.setState({ counter: this.state.counter + 1 })

        }
    }

    minusCounter = (price) => {
        if (JSON.parse(localStorage.getItem('loggedUser'))) {
            // -1 to be solved
            if (this.state.counter >= 0)
                this.setState({ counter: this.state.counter - 1 })
        }
    }

    handleAddToCart=()=>{
        this.setState({clicked:true})
    }

    deleteItem = (id)=>{
        const allProducts = JSON.parse(localStorage.getItem('cart')).filter(data=> data.id !== id)
        localStorage.setItem('cart',JSON.stringify(allProducts))
        this.setState({})
    }

    render() {
        return (
            <div>
                    <Navbar counter={this.state.counter} />
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/card" element={<Card handleAddToCart={this.handleAddToCart} clicked={this.state.clicked} plusCounter={this.plusCounter} />} />
                        <Route exact path="/signin" element={<Login />} />
                        <Route exact path="/registration" element={<Registration />} />
                        <Route exact path="/cartdisplay" element={<Cart plusCounter={this.plusCounter} minusCounter={this.minusCounter} deleteItem={this.deleteItem}/>} />
                        <Route exact path="/checkout" element={<CheckoutButton />} />
                        <Route exact path="/productdetails" element={<ProductDetails plusCounter={this.plusCounter} handleAddToCart={this.handleAddToCart}/>} />
                    </Routes>
                    <Footer />

            </div>

        );
    }
}

export default App