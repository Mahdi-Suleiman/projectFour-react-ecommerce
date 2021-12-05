import React from 'react'
import './card.css'
import DeleteCard from './delete.card';

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
                    <DeleteCard buttonValue="Add to cart" imgURL={props.value.img} role="user" /> :
                    <DeleteCard buttonValue="Delete Item" imgURL={props.value.img} role="admin" />
            }
        </div>
    )
}