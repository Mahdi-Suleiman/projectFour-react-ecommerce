import React, { Component } from 'react'
import './checkout.style.css'
import { countries } from './countries';

export function CheckoutButton(props) {

    const cartArray = JSON.parse(localStorage.getItem('cart'));
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const checkOut = () => {
        const userCartArray = []
        let userQuantity
        userQuantity = JSON.parse(localStorage.getItem('products'))
        userCartArray.push(JSON.parse(localStorage.getItem('loggedUser')))
        const loggedUserEmail = userCartArray[0].email
        const allUsersArray = JSON.parse(localStorage.getItem('users'))
        for (let i = 0; i < allUsersArray.length; i++) {
            console.log(allUsersArray[i].email)
            if (allUsersArray[i].email === loggedUserEmail) {

                allUsersArray[i].orders.push(cartArray);
            }
        }
        for (let i = 0; i < userQuantity.length; i++) {
            userQuantity[i].quantity = 0;
        }
        console.log(userQuantity)
        localStorage.setItem('products', JSON.stringify(userQuantity))
        localStorage.setItem('users', JSON.stringify(allUsersArray))

        localStorage.removeItem('cart')
    }
    let tottttal = 0;
    let price = 0;
    let quantity = 0;
    let title = ''
    if (localStorage.getItem('cart')) {
        const totalPrice = JSON.parse(localStorage.getItem('cart'))
        totalPrice.forEach(data => tottttal += Number(data.price) * data.quantity)
        cartArray.map(data => {

            {
                price = Number(data.price);
                quantity = data.quantity;
                title = data.title
            }

        })
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <h1 className='heading'>Check Out</h1>
                <div className='div-container'>
                    <div className='first-div'>
                        <div className='checkout-table'>

                            <div colspan='2' className='table-heading'>
                                <h3>Billing details</h3>
                            </div>


                            <div class='useless-padding'>
                                <label>First name :</label><br />
                                <input type='text' value={localStorage.getItem('loggedUser')}></input>
                            </div>
                            <div class='useless-padding'>
                                <label>Last name :</label><br />
                                <input type='text'></input>
                            </div>


                            <div colspan='2' class='useless-padding'>
                                <label>
                                    <p>Country/Region</p>
                                    <select required name="country">

                                        {countries.map((element, i) => {
                                            return <option key={i}>{element.name}</option>
                                        })}
                                    </select>
                                </label>
                            </div>

                            <div colspan='2' class='useless-padding'>
                                <label>Address</label><br />
                                <input type='text'></input>
                            </div>
                            <div colspan='2' class='useless-padding'>
                                <label>Phone number</label><br />
                                <input type='text'></input>

                            </div>


                            <div colspan='2' class='useless-padding'>
                                <label>Email</label><br />
                                <input type='email'></input>
                            </div>
                            <div colspan='2' class='useless-padding'>
                                <label>Note</label><br />
                                <textarea type='email'></textarea>
                            </div>

                        </div>
                    </div>
                    <div className='second-div'>
                        <div className='checkout-table2'>

                            <div colspan='2' className='table-heading'>
                                <h3>Your order</h3>
                            </div>


                            <div class='useless-padding'>
                                <p>Product</p>
                            </div>
                            <div class='useless-padding'>
                                <p>Subtotal</p>
                            </div>

                            <div class='useless-padding'>
                                <p> {title}</p>
                                <p> {price}</p>
                                <p>{quantity}</p>
                            </div>


                            <div class='useless-padding'>
                                <p> {title}</p>
                                <p> {price}</p>
                                <p>{quantity}</p>
                            </div>


                            <div class='useless-padding'>
                                <p>Total</p>
                            </div>
                            <div class='useless-padding'>
                                <p>{tottttal}$</p>
                            </div>



                            <div class='useless-padding'>
                                <p>Total</p>
                            </div>
                            <div class='useless-padding'>
                                <p>{tottttal}$</p>
                            </div>


                            <div colspan='2' class='useless-padding'>

                                <p>Cash on delivery</p>
                            </div>


                            <div colspan='2' class='useless-padding'>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>

                        </div>
                        <button onClick={checkOut} className="button-order">Place Order</button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default CheckoutButton
