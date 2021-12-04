import React, { Component } from 'react'

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
            productQuantity:0,
            productID:'',
            arr: JSON.parse(localStorage.getItem('products'))
        }
    }

    editArray = (e) => {
        e.preventDefault();

        let dummyArr = [];

        let productsArray = {
            img: this.state.productImage,
            title: this.state.productTitle,
            shortDesc: this.state.productShortDesc,
            price: this.state.productPrice,
            longDesc: this.state.productLongDesc,
            quantity: this.state.productQuantity,
            id: this.state.productID 
        }
        if (localStorage.getItem('products') === null) {
            dummyArr.push(productsArray)
            this.setState({ arr: dummyArr })
            localStorage.setItem('products', JSON.stringify(dummyArr))
        } else {
            dummyArr = (JSON.parse(localStorage.getItem('products')));
            dummyArr.push(productsArray);
            localStorage.setItem('products', JSON.stringify(dummyArr))
            this.setState({ arr: dummyArr })
        }
    }

    inputTracker = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
            <h1 style={{color:'green'}}> Admin PAGE </h1>
                

                {this.state.arr.map(data => {
                    return (
                        <div>
                            {/* <h1>{data.img}</h1>
                            <h1>{data.title}</h1>
                            <h1>{data.shortDesc}</h1>
                            <h1>{data.longDesc}</h1>
                            <h1>{data.price}</h1> */}
                            <h1>{this.props.counter}</h1>
                            ------------------------------
                            <h1 style={{color:'orange'}}>{JSON.parse(localStorage.getItem('total'))}</h1>
                            ------------------------------
                        </div>
                    )
                })}

                <form onSubmit={this.addProductFunction}>
                    <input type="text" name="productImage" value={this.state.productImage} onChange={this.inputTracker} />
                    <input type="text" name="productTitle" value={this.state.productTitle} onChange={this.inputTracker} />
                    <input type="text" name="productShortDesc" value={this.state.productShortDesc} onChange={this.inputTracker} />
                    <input type="text" name="productPrice" value={this.state.productPrice} onChange={this.inputTracker} />
                    <input type="text" name="productLongDesc" value={this.state.productLongDesc} onChange={this.inputTracker} />
                    <input type="text" name="productLongDesc" value={this.state.productQuantity} onChange={this.inputTracker} />
                    <input type="text" name="productID" value={this.state.productID} onChange={this.inputTracker} />
                    <button onClick={this.editArray}>Add New Product</button>
                </form>
            </div>
        )
    }
}

export default Admin
