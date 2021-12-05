import React from 'react'
import CardContainer from './card.containter'
import './card.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';


export default function Card(props) {
    const localStorageData = JSON.parse(localStorage.getItem('products'))
    return (
        <div className="card-container">
            {
                localStorageData.map((data, index) => {
                    return (
                        <CardContainer value={data} index={index} role={props.role} plusCounter={props.plusCounter} deleteCard={props.deleteCard} />
                    )
                })
            }
        </div>
    )
}
