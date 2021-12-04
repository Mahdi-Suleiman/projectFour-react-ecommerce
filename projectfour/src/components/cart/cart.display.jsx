import React from 'react'

export default function CartDisplay(props) {
    return (
        <div>
            <h1>{props.img}</h1>
            <h1>{props.title}</h1>
            <h1>{props.shortDesc}</h1>
            <h1>{props.price}</h1>
            <h1  style={{color:'red'}}>{props.quantity}</h1>
            <h1>{props.id}</h1>
            <button onClick={()=>{props.plusItem(props.id)}}>+</button>
            <button  onClick={()=>{props.minusItem(props.id)}}>-</button>
        </div>
    )
}
