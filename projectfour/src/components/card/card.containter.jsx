import React from 'react'
import AddToCart from '../cart/addtocart'
import Cart from '../cart/cart'

export default function CardContainer(props) {
    return (

        // PRODUCTS PAGE 
        
        <div key={props.index}>
            <h1 style={{color:'green'}}> PRODUCT PAGE </h1>
            <h4>{props.value.img}</h4>
            <h4>{props.value.title}</h4>
            <h4>{props.value.price}</h4>
            <h4>{props.value.longDesc}</h4>
            <h4>{props.value.shortDesc}</h4>
            <AddToCart index={props.index} plusCounter={props.plusCounter}/>
        </div>
    )
}
