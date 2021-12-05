import React from 'react'
import AddToCart from '../cart/addtocart'
import DeleteCard from './delete.card'
export default function CardContainer(props) {
    return (

        // PRODUCTS PAGE 
        <div className="card">
            <img src={props.value.img} />
            <h3>{props.value.title}</h3>
            <p>{props.value.shortDesc}</p>
            <h6>{props.value.price}</h6>
            
            {
                props.role === "user" ?
                    // <DeleteCard buttonValue="Add to cart" index={props.index} plusCounter={props.plusCounter} imgURL={props.value.img} role="user" /> 
                    <AddToCart index={props.index} plusCounter={props.plusCounter} />:
                    // <DeleteCard buttonValue="Delete Item" index={props.index} imgURL={props.value.img} role="admin" />
                    <button onClick={props.deleteCard}> Delete Card</button>
            }
        </div>
    )
}
