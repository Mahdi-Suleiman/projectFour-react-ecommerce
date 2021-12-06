import React from 'react'
import { NavLink } from 'react-router-dom';

export default function CartDisplay(props) {
    return (
        
        <div>
            <h1 style={{color:'green'}}> PRODUCT PAGE </h1>
            <h1>{props.img}</h1>
            <h1>{props.title}</h1>
            <h1>{props.shortDesc}</h1>
            <h1>{props.price}</h1>
            <h1  style={{color:'red'}}>{props.quantity}</h1>
            <h1>{props.id}</h1>
            <button onClick={()=>{props.plusCounter(JSON.parse(localStorage.getItem('products'))); props.plusItem(props.indx)}}>+</button>
            <button  onClick={()=>{props.minusCounter(JSON.parse(localStorage.getItem('products')));props.minusItem(props.indx)}}>-</button>
            <NavLink to="/checkout"><button style={{backgroundColor:'red'}} onClick> Proceed to checkout</button></NavLink>
            <button onClick={()=>props.deleteItem(props.indx)}>Delete Item</button>
        </div>
    )
}
