import React, { Component } from 'react'
import CartDisplay from './cart.display';

export class Cart extends Component {
    constructor(props){
        super(props);

        this.state = {
            quantity: JSON.parse(localStorage.getItem('cart'))
        }

    }

    plusItem = (id)=> {
        let idIndex;
        let indexArray = this.props.quantity;
        console.log(this.props.quantity)
        for(let i=0;i<indexArray.length;i++){
            if(id===i){
                idIndex = i;
                break;
            }
        }
        indexArray[idIndex].quantity +=1;
        localStorage.setItem('cart', JSON.stringify(indexArray))
        this.setState({quantity: indexArray})
    }

    minusItem = (id) => {
        let idIndex;
        let indexArray = this.props.quantity;
        for(let i=0;i<indexArray.length;i++){
            if(id===i){
                idIndex = i;
                break;
            }
        }
        if(indexArray[idIndex].quantity!=0){
        indexArray[idIndex].quantity -=1;
        localStorage.setItem('cart', JSON.stringify(indexArray))
        this.setState({quantity: indexArray}) 
        }
    }

    render() {
        
        return (
            <div>
                {localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')).map((data,indx)=>
                        
                         <CartDisplay img={data.img} title={data.title} indx={indx} shortDesc={data.shortDesc} price={data.price} quantity={data.quantity} id={data.id} plusItem={this.plusItem} minusItem={this.minusItem} plusCounter={this.props.plusCounter} minusCounter={this.props.minusCounter} deleteItem={this.props.deleteItem}/>) : <h1>Your cart is empty</h1>}
            </div>
        )
       
    }
}

export default Cart
