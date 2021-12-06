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
import About from './components/About Us/About';


class App extends React.Component {
    constructor() {
        super();
        this.counterQuantity = JSON.parse(localStorage.getItem('cart'));
        this.state = {
            counter: 0,
            clicked: false,
            loggedIn: localStorage.getItem('loggedUser'),
            cards: JSON.parse(localStorage.getItem('products')),
            quantity: JSON.parse(localStorage.getItem('cart')),
            price: [],
            title: [],
            quantity: [],
            users: JSON.parse(localStorage.getItem('users')),
            show: false

        }
    }

    componentDidMount = () => {
        let sum = 0;
        this.counterQuantity &&
            this.counterQuantity.forEach(item => {
                sum += item.quantity;
            })

        this.setState({ counter: sum });
    }

    handleLogIn = () => {
        this.setState({ loggedIn: JSON.parse(localStorage.getItem('loggedUser')) });
    }

    handleLogOut = () => {
        this.setState({ loggedIn: JSON.parse(localStorage.getItem('loggedUser')) });
    }

    plusCounter = () => {
        if (JSON.parse(localStorage.getItem('loggedUser'))) {
            this.setState({ counter: this.state.counter + 1 })

        }
    }

    minusCounter = () => {
        if (JSON.parse(localStorage.getItem('loggedUser'))) {

            if (this.state.counter > 0)
                this.setState({ counter: this.state.counter - 1 })
        }
    }


    handleAddToCart = () => {
        this.setState({ clicked: true })
    }

    deleteItem = (id) => {
        const allQuantity = JSON.parse(localStorage.getItem('cart'))[id].quantity
        this.setState({ counter: this.state.counter - allQuantity })
        const allProducts = JSON.parse(localStorage.getItem('cart')).filter((data, indx) => indx !== id)
        !allProducts.length ? localStorage.removeItem('cart') : localStorage.setItem('cart', JSON.stringify(allProducts));
        this.setState({ quantity: JSON.parse(localStorage.getItem('cart')) })

    }

    renderTableData = () => {
        if (!this.state.show) {
            let index;
            let arrQuantity = this.state.quantity;
            let arrTitle = this.state.title;
            let arrPrice = this.state.price;
            const loggedUserOrders = JSON.parse(localStorage.getItem('loggedUser')).email
            const userOrders = JSON.parse(localStorage.getItem('users'))
            for (let i = 0; i < userOrders.length; i++) {
                if (userOrders[i].email === loggedUserOrders) {
                    index = i;
                }
            }
            if (JSON.parse(localStorage.getItem('users'))[index].orders.length) {
                userOrders[index].orders.map(data => {
                    data.map(element => {
                        arrPrice.push(element.price)
                        arrTitle.push(element.title)
                        arrQuantity.push(element.quantity)
                    })

                })
                this.setState({ price: arrPrice })
                this.setState({ title: arrTitle })
                this.setState({ quantity: arrQuantity })

                this.setState({ show: true })
            }
        }
    }

    render() {
        return (

            <div>
                <Navbar loggedIn={this.state.loggedIn} handleLogOut={this.handleLogOut} counter={this.state.counter} />
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/card" element={<Card cards={this.state.cards} handleAddToCart={this.handleAddToCart} clicked={this.state.clicked} plusCounter={this.plusCounter} />} />
                    <Route exact path="/userprofile" element={<UserProfile handleLogIn={this.handleLogIn} price={this.state.price} renderTableData={this.renderTableData} title={this.state.title} quantity={this.state.quantity} />} />
                    <Route exact path="/signin" element={<Login handleLogIn={this.handleLogIn} />} />
                    <Route exact path="/registration" element={<Registration />} />
                    <Route exact path="/cartdisplay" element={<Cart plusCounter={this.plusCounter} minusCounter={this.minusCounter} deleteItem={this.deleteItem} quantity={this.state.quantity} />} />
                    <Route exact path="/checkout" element={<CheckoutButton />} />
                    <Route exact path="/productdetails" element={<ProductDetails plusCounter={this.plusCounter} handleAddToCart={this.handleAddToCart} />} />
                    <Route exact path="/admin" element={<Admin />} />
                    <Route exact path="/about" element={<About />} />

                </Routes>
                <Footer />

            </div>

        );

    }
}

export default App