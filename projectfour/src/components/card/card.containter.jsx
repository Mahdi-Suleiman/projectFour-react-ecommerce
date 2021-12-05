import React from 'react'
import AddToCart from '../cart/addtocart'
import {  Link } from 'react-router-dom';
import DeleteCard from './delete.card'
export default class CardContainer extends React.Component {
    constructor(props){
        super(props)
        
    }

    render(){
        
            return (
                
                // PRODUCTS PAGE 
                <div className="card">
                <img src={this.props.value.img} />
                <h3>{this.props.value.title}</h3>
                <p>{this.props.value.shortDesc}</p>
                <h6>{this.props.value.price}</h6>
                {

                    
                    this.props.role === "user" ?
                    // <DeleteCard buttonValue="Add to cart" index={this.props.index} plusCounter={this.props.plusCounter} imgURL={this.props.value.img} role="user" /> 
                    <AddToCart handleAddToCart={this.props.handleAddToCart} index={this.props.index} plusCounter={this.props.plusCounter} />:
                        // <DeleteCard buttonValue="Delete Item" index={this.props.index} imgURL={this.props.value.img} role="admin" />
                        <button onClick={this.props.deleteCard}> Delete Card</button>
                
                }
            </div>
            )
    }
    
}
