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
            longDesc: this.state.productLongDesc
        }
        if (localStorage.getItem('products') === null) {
            dummyArr.push(productsArray)
            this.setState({ arr: dummyArr })
            localStorage.setItem('products', JSON.stringify(dummyArr))
        }else{
            dummyArr = (JSON.parse(localStorage.getItem('products')));
            dummyArr.push(productsArray);
            localStorage.setItem('products',JSON.stringify(dummyArr))
            this.setState({arr:dummyArr})
        }
    }

    inputTracker = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <h1> Admin Dashboard</h1>
                
                    {this.state.arr.map(data=>{
                        return(
                        <h1>{data.img}</h1>
                        )
                    })}

                <form onSubmit={this.addProductFunction}>
                    <input type="text" name="productImage" value={this.state.productImage} onChange={this.inputTracker} />
                    <input type="text" name="productTitle" value={this.state.productTitle} onChange={this.inputTracker} />
                    <input type="text" name="productShortDesc" value={this.state.productShortDesc} onChange={this.inputTracker} />
                    <input type="text" name="productPrice" value={this.state.productPrice} onChange={this.inputTracker} />
                    <input type="text" name="productLongDesc" value={this.state.productLongDesc} onChange={this.inputTracker} />
                    <button onClick={this.editArray}>Add New Product</button>
                </form>
            </div>
        )
    }
}

export default Admin
