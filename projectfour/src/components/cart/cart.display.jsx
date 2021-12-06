import React from 'react'
import { NavLink } from 'react-router-dom';
import './cartdisplay.css';
export default function CartDisplay(props) {
    return (
        <div className="cart111">
            {/* <h1 className="titelProductPage"> PRODUCT PAGE </h1> */}
        <div className="cartdis">
        {/* <img src={`/${props.value.img}`} /> */}
            <h1>{props.title}</h1>
            <h1>{props.img}</h1>
            <small>{props.shortDesc}</small>
            <h1>{props.price}</h1>
            <div className="quantitybtn">
            <button className="btnpluss" onClick={()=>{props.plusCounter(JSON.parse(localStorage.getItem('products'))); props.plusItem(props.id)}}>+</button>
            <h1 className="counterquantity" >{props.quantity}</h1>
            <button className="btnpluss" onClick={()=>{props.minusCounter(JSON.parse(localStorage.getItem('products')));props.minusItem(props.id)}}>-</button>
            </div>
            <NavLink to="/checkout"><button className="btnplussbtn " style={{backgroundColor:'red'}} onClick> Proceed to checkout</button></NavLink>
        </div>
        </div>
    )
}