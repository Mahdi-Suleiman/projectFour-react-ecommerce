import React from 'react'
import Cart from '../cart/cart'
import CardContainer from './card.containter'

export default function Card(props) {
    const localStorageData = JSON.parse(localStorage.getItem('products'))
// get products from local storage, map then send the data to card.container
    return (
        localStorageData.map((data,index)=>{
            return(
                <div>
                <CardContainer value={data} index={index} plusCounter={props.plusCounter}/>
                </div>
            )
        })
    )
}
