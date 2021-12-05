import React from 'react'
import CardContainer from './card.containter'
import './card.css'

export default function Card(props) {
    const localStorageData = JSON.parse(localStorage.getItem('products'))
    return (
        <div className="card-container">
            {
                localStorageData.map((data, index) => {
                    return (
                        <CardContainer value={data} index={index} role={props.role} plusCounter={props.plusCounter} deleteCard={props.deleteCard}/>
                    )
                })
            }

        </div>
    )
}
