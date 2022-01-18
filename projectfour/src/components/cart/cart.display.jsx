import React from 'react'
import './cartdisplay.css'
export default function CartDisplay(props) {
    return (

        <div className="cart111">
            <div className="cartdis">
            <h1>{props.title}</h1>
            <img src={props.img} alt ="monitor" class="details-image"/>
            <small>{props.shortDesc}</small>
            <h1>{props.price}$</h1>
            <div className="quantitybtn">
            <button onClick={() => { props.plusCounter(JSON.parse(localStorage.getItem('products'))); props.plusItem(props.indx) }} class="btnpluss">+</button>
            <h1 class="counterquantity">{props.quantity}</h1>
            <button onClick={() => { props.minusCounter(JSON.parse(localStorage.getItem('products'))); props.minusItem(props.indx) }} class="btnpluss">-</button>
            </div>
            
            <button onClick={() => props.deleteItem(props.indx)} className="btnplussbtn red">Delete Item</button>
            </div>
        </div>
    )
}
