import React from 'react'
import CardContainer from './card.containter'

export default function Card() {
    const localStorageData = JSON.parse(localStorage.getItem('products'))
    // get products from local storage, map then send the data to card.container
    return (
        <div className="card-container">
            {
                localStorageData.map((data, index) => {
                    return (
                        <CardContainer value={data} index={index} />
                    )
                })
            }
        </div>
    )
}
