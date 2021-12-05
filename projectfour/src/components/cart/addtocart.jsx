import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Login from '../login/login';
import Cart from './cart';

export class AddToCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            loggedUser: localStorage.getItem('loggedUser'),
            clicked: false
        }
    }

    addToCart = (index) => {
        this.setState({ clicked: true })
        if (this.state.loggedUser) {
        
            let productsArray;
            let firstPushArray = [];
            let cartArray = [];
            let flag = false;
            productsArray = JSON.parse(localStorage.getItem('products'))[index]
            if (localStorage.getItem('cart')) {
                cartArray = JSON.parse(localStorage.getItem('cart'))
                for (let i = 0; i < cartArray.length; i++) {
                    if (i === cartArray.length - 1) { flag = true }
                    if (cartArray[i].id === productsArray.id) {
                        cartArray[i].quantity += 1
                        localStorage.setItem('cart', JSON.stringify(cartArray));

                        break;
                    } else if (flag === true) {
                        cartArray.push(productsArray)
                        localStorage.setItem('cart', JSON.stringify(cartArray))
                    }
                }
            } else {
                firstPushArray.push(JSON.parse(localStorage.getItem('products'))[index])
                firstPushArray[0].quantity += 1
                localStorage.setItem('cart', JSON.stringify(firstPushArray))
                console.log(firstPushArray)
            }
        }
    }

    render() {
        return (
            <div>
                    <button onClick={() => { this.addToCart(this.props.index); this.props.plusCounter(JSON.parse(localStorage.getItem('products'))[this.props.index].price); this.props.handleAddToCart() }}>Add To Cart</button>
            </div>
        )
    }
}

export default AddToCart
