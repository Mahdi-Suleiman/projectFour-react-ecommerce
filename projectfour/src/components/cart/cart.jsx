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
        indexArray[idIndex].quantity +=1;
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
        localStorage.setItem('cart', JSON.stringify(indexArray))
        this.setState({quantity: indexArray})
        }
    }

    render() {
        return (
            JSON.parse(localStorage.getItem('cart')).map(data=>{
                return(
                    
                     <CartDisplay img={data.img} title={data.title} shortDesc={data.shortDesc} price={data.price} quantity={data.quantity} id={data.id} plusItem={this.plusItem} minusItem={this.minusItem}/>   
                )
            })
        )
    }
}

export default Cart
