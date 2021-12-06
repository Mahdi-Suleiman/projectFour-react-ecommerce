import React from 'react'
import CardContainer from './card.containter'
import './card.css'

import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';




export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loggedIn:JSON.parse(localStorage.getItem('loggedUser')),
            clicked: false,
         localStorageData : JSON.parse(localStorage.getItem('products'))

        }
    }
    handleAddToCart=()=>{
        this.setState({clicked:true})
    }

    render(){
   
        if((!this.state.clicked) || (this.state.clicked&&this.state.loggedIn) )
        return (<div>
            <h1 className="titlecard">Shop</h1>
        <div className="card-container">
            {
                this.state.localStorageData.map((data, index) => {
                    return (

                        <CardContainer value={data} index={index} role={'user'} plusCounter={this.props.plusCounter} deleteCard={this.props.deleteCard} handleAddToCart = {this.handleAddToCart}/>
                    )
                })
            }
        </div>
        </div>
        )
        else
        return(
            <>
                <h1>You are not logged in </h1>
                <Link to="/signin">Please Login</Link>
            </>
        )
    
}
}
