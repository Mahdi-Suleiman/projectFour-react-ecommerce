import React from 'react'

class DeleteCard extends React.Component {
    constructor(props) {
        super(props);
    }
    deleteCard = (props) => {
        let oldItemsArray = (JSON.parse(localStorage.getItem('products')));
        const newItemsArray = oldItemsArray.filter((item) => item.img !== this.props.imgURL)
        localStorage.removeItem("products")
        localStorage.setItem("products", JSON.stringify(newItemsArray))

    }
    render() {
        return (
            this.props.role === "admin" ?
                <button className="add-to-cart-button" onClick={this.deleteCard}>
                    {this.props.buttonValue}</button>
                : <button className="add-to-cart-button" onClick={this.addToCart}>
                    {this.props.buttonValue}</button>

        )
    }
}

export default DeleteCard;