import React from 'react'
import Card from '../card/card'

export default function Homepage() {
    let storageProducts = JSON.parse(localStorage.getItem('products'))
    return (
        storageProducts.map(data =>{
            return(
            <div>
                <h1>{data.img}</h1>
            </div>
            )
        })
        
    )
}
