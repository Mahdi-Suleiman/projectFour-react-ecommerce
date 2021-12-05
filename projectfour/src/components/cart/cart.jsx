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
        let indexArray = this.state.quantity;
        for(let i=0;i<indexArray.length;i++){
            if(id===indexArray[i].id){
                idIndex = i;
                break;
            }
        }
        indexArray[idIndex].quantity +=1;
        let totalPrice = JSON.parse(localStorage.getItem('total'))
        totalPrice += indexArray[idIndex].price
        console.log(totalPrice)
        console.log(typeof(totalPrice))
        localStorage.setItem('total',JSON.stringify(totalPrice))
        localStorage.setItem('cart', JSON.stringify(indexArray))
        this.setState({quantity: indexArray})
    }

    minusItem = (id) => {
        console.log(this.state.quantity)
        let idIndex;
        let indexArray = this.state.quantity;
        console.log(this.props.index)
        for(let i=0;i<indexArray.length;i++){
            if(id===indexArray[i].id){
                idIndex = i;
                break;
            }
        }
        if(indexArray[idIndex].quantity!=0){
        indexArray[idIndex].quantity -=1;
        console.log('he' ,indexArray[idIndex].quantity)
        console.log('he',this.state.quantity)
        let totalPrice = JSON.parse(localStorage.getItem('total'))
        totalPrice -= indexArray[idIndex].price
        localStorage.setItem('total',JSON.stringify(totalPrice))
        localStorage.setItem('cart', JSON.stringify(indexArray))
        this.setState({quantity: indexArray}) 
        }
    }

    render() {
        
        return (
            <div>
                {localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')).map(data=>
                        
                         <CartDisplay img={data.img} title={data.title} shortDesc={data.shortDesc} price={data.price} quantity={data.quantity} id={data.id} plusItem={this.plusItem} minusItem={this.minusItem} plusCounter={this.props.plusCounter} minusCounter={this.props.minusCounter}/>) : <h1>Your cart is empty</h1>}
            </div>
        )
       
    }
}

export default Cart
