import React, { Component } from 'react'
import Card from '../card/card';
import "./admin.css"
export class Admin extends Component {
    constructor() {
        super();
        // admin dashboard where you add items to local storage
        this.state = {
            productImage: '',
            productTitle: '',
            productShortDesc: '',
            productPrice: '',
            productLongDesc: '',
            arr: JSON.parse(localStorage.getItem('products'))
        }
    }

    editArray = (e) => {
        e.preventDefault();
        let filename = document.getElementById('file-id').files[0].name;
        let productsArray = {
            img: `products/${filename}`,
            title: this.state.productTitle,
            shortDesc: this.state.productShortDesc,
            price: this.state.productPrice,
            longDesc: this.state.productLongDesc
        }

        let dummyArr = [];

        //if local storage has to "products key" push an empty array
        if (localStorage.getItem('products') === null) {
            dummyArr.push(productsArray)
            this.setState({ arr: dummyArr })
            localStorage.setItem('products', JSON.stringify(dummyArr))
        }
        //else push a new object to the array 
        else {
            dummyArr = (JSON.parse(localStorage.getItem('products')));
            dummyArr.push(productsArray);
            localStorage.setItem('products', JSON.stringify(dummyArr))
            this.setState({ arr: dummyArr })
        }
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

    render() {
        return (
            <div className="admin-dashboard-container">
                <h1>Admin Dashboard</h1>
                <Card role="admin" />
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
                        <button id="add-new-product-button">Add New Product</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Admin
