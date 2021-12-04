import React from 'react'
import './card.css'
export default function CardContainer(props) {
    return (
        // PRODUCTS PAGE 
        <div className="card">
            <img src={props.value.img} />
            <h3>{props.value.title}</h3>
            <p>{props.value.shortDesc}</p>
            <h6>{props.value.price}</h6>
            {/* <h4>{props.value.longDesc}</h4> */}
            <button className="add-to-cart-button">add to cart</button>
        </div>
    )
}
