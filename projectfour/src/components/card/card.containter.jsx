import React, { Component } from 'react'
import AddToCart from '../cart/addtocart'
import {  Link } from 'react-router-dom';
import DeleteCard from './delete.card'

import '../card/card.css'
import ProductDetails from './product.details'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

class CardContainer extends Component {
    constructor(props) {
        super(props);
    }
    toProductDetails = () => {
        // alert("you clicked the span")
        console.log("props index", this.props.index)
        localStorage.setItem("selectedProduct", JSON.stringify(`${this.props.index}`))
    }
    render() {
        return (
            <div className="card">
                <NavLink to="/productdetails" onClick={this.toProductDetails}>
                    <img src={`/${this.props.value.img}`} />
                    <h3>{this.props.value.title}</h3>
                    <p>{this.props.value.shortDesc}</p>
                    <h6>{this.props.value.price}</h6>
                </NavLink>

                {
                    this.props.role === "user" ?
                        // <DeleteCard buttonValue="Add to cart" index={props.index} plusCounter={props.plusCounter} imgURL={props.value.img} role="user" /> 
                        <AddToCart index={this.props.index} plusCounter={this.props.plusCounter} /> :
                        // <DeleteCard buttonValue="Delete Item" index={props.index} imgURL={props.value.img} role="admin" />
                        <button className="add-to-cart-button" onClick={this.props.deleteCard}> Delete Card</button>
                }
            </div>
        )
    }
}
export default CardContainer;
