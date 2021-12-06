import React, { Component } from 'react'
import './product.details.css'
class ProductDetails extends Component {
    constructor(props) {
        super(props);
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
    componentDidMount() {
        const selectedIndex = JSON.parse(localStorage.getItem("selectedProduct"));
        // console.log(selectedProductFromLocalStorage)
        const products = JSON.parse(localStorage.getItem('products'));
        this.state.arr.map((data) => {
            if (data.id === selectedIndex) {
                console.log("data id", data.id)
                this.setState({
                    productImage: data.img,
                    productTitle: data.title,
                    productPrice: data.price,
                    productLongDesc: data.longDesc,
                    productID: data.id
                })
            }
        })
    }

    render() {
        return (
            <div className="product-wrapper">
                <div className="product-container">
                    <h1>Product details</h1>
                    <img src={this.state.productImage} alt="product's image" id="product-image" />
                    <form className="product-info">
                        <div className="left-grid">
                            <label> Product Title
                                <input type="text" name="" id="" value={this.state.productTitle} readOnly />
                            </label>
                            <label> Product Price
                                <input type="text" name="" id="" value={`${this.state.productPrice}$`} readOnly />
                            </label>
                        </div>

                        <div className="right-grid">
                            <label> Product ID
                                <input type="text" name="" id="" value={this.state.productID} readOnly />
                            </label>
                            <label> Description
                                <textarea type="text" name="" id="" value={this.state.productLongDesc} readOnly ></textarea>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductDetails;