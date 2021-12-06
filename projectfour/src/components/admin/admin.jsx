import React, { Component } from 'react'
import Card from '../card/card';
import './admin.css'
import '../card/card.css'

export class Admin extends Component {
    constructor() {
        super();

        this.state = {
            productImage: '',
            productTitle: '',
            productShortDesc: '',
            productPrice: '',
            productLongDesc: '',
            productQuantity: 0,
            productID: '',
            arr: JSON.parse(localStorage.getItem('products'))
        }
    }

    editArray = (e) => {
        e.preventDefault();

        let dummyArr = [];
        let filename = document.getElementById('file-id').files[0].name;

        let productsArray = {
            img: `products/${filename}`,
            title: this.state.productTitle,
            shortDesc: this.state.productShortDesc,
            price: this.state.productPrice,
            longDesc: this.state.productLongDesc,
            quantity: this.state.productQuantity,
            id: this.state.productID
        }
        if (!localStorage.getItem('products')) {
            dummyArr.push(productsArray)
            localStorage.setItem('products', JSON.stringify(dummyArr))
            this.setState({ arr: JSON.parse(localStorage.getItem('products')) })
        } else {
            dummyArr = (JSON.parse(localStorage.getItem('products')));
            dummyArr.push(productsArray);
            localStorage.setItem('products', JSON.stringify(dummyArr))
            this.setState({ arr: dummyArr })
        }
        this.setState({arr:JSON.parse(localStorage.getItem('products'))});
        this.resetForm();
    }

    inputTracker = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    resetForm = () => {
        const inputs = document.querySelectorAll(".form-input");
        inputs.forEach((input) => {
            input.value = '';
        })
    }

    deleteCard = () => {
        //     let oldItemsArray = (JSON.parse(localStorage.getItem('products')));
        //     console.log(oldItemsArray)
        //     const newItemsArray = oldItemsArray.filter((data,index) => data.id !== index)
        //     console.log(newItemsArray)

        // console.log(newItemsArray)
        // localStorage.setItem("products", JSON.stringify(newItemsArray))
        // this.setState({arr: newItemsArray})
        // console.log(this.state.arr)
        // console.log(index)
    }

    render() {
        return (
            <div className="admin-dashboard-container">
                <h1>Admin Dashboard</h1>
                <Card role="admin" cards={this.state.arr} deleteCard={this.deleteCard} />
                <div className="form-wrapper">
                    <h2>Create a product</h2>
                    <form className="admin-dashboard-form" onSubmit={this.editArray}>
                        <label className="custom-file-upload">
                            <input type="file" id="file-id" name="image-url" className="form-input" placeholder="Prodcut's image URL" onChange={this.inputTracker} required />
                            upload a product
                        </label>
                        <input type="text" name="productTitle" className="form-input" placeholder="Product title" value={this.state.productTitle} onChange={this.inputTracker} required />
                        <input type="text" name="productShortDesc" className="form-input" placeholder="short description" value={this.state.productShortDesc} onChange={this.inputTracker} required />
                        <input type="text" name="productPrice" className="form-input" placeholder="Product price" value={this.state.productPrice} onChange={this.inputTracker} required />
                        <textarea type="text" name="productLongDesc" className="form-input" placeholder="Long description" value={this.state.productLongDesc} onChange={this.inputTracker} required ></textarea>
                        <input type="text" name="productID" className="form-input" placeholder="ID" value={this.state.productID} onChange={this.inputTracker} />
                        <button id="add-new-product-button">Add New Product</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Admin
