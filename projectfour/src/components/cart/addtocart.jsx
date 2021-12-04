import React, { Component } from 'react'

export class AddToCart extends Component {
    constructor(props) {
        super(props);
    }

    addToCart = (index) => {
        if (!localStorage.loggedUser) {
            alert('go to login')
        } else {
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
                        localStorage.setItem('cart', JSON.stringify(cartArray))
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
            }
        }
    }

    render() {
        return (
            <button onClick={() => { this.addToCart(this.props.index) }}>Add To Cart</button>
        )
    }
}

export default AddToCart
