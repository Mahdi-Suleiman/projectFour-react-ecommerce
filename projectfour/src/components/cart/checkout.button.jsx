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
        if (allUsersArray)
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
        props.deleteCounter();
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
// this is the up to date commit
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
                                <h3 className="text-center">Billing details</h3>
                            </div>
                            <div class='useless-padding'>
                                <label>First name :</label><br />
                                <input type='text' ></input>
                            </div>
                            <div class='useless-padding'>
                                <label>Last name :</label><br />
                                <input type='text'></input>
                            </div>


                            <div colspan='2' class='useless-padding'>

                                <label>Country/Region</label>
                                <select required name="country" className="select-city" >

                                    {countries.map((element, i) => {
                                        return <option key={i} >{element.name}</option>
                                    })}
                                </select>
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
                                <h3 className="text-center">Cart totals</h3>
                            </div>
                            <div className="detel-checkout">

                                <div className='useless-padding'>
                                    <div className='incart-total'>
                                        <h5>Product</h5>
                                        <h5>{title}</h5>
                                    </div>
                                </div>


                                <div className='useless-padding'>
                                    <div className='incart-total'>
                                        <h5>Subtotal</h5>
                                        <h5>{price}</h5>
                                    </div>
                                </div>
                                <hr className="line-butween" />
                            </div>

                            <div class='useless-padding'>
                                <div className="counter-total">
                                    <h5>Counter</h5>
                                    <h5>{quantity}</h5>
                                </div>
                            </div>
                            <div class='useless-padding'>
                                <div className="counter-total">
                                    <h5>Total</h5>
                                    <h5>{tottttal}$</h5>
                                </div>
                            </div>
                            <hr className="line-butween text-center" />
                            <div colspan='2' class='cashon text-left' >
                                <div classNam="warning " >
                                    {/* <i class="fa-solid fa-triangle-exclamation"></i> */}
                                    <p className="text-left"> Cash on delivery....</p>
                                </div>
                                <p> Your personal data will be Used to process your order ,support your experience throughout this website</p>

                            </div>
                            </div>
                            <button onClick={checkOut} className="btnorder" >Place Order</button>
                        </div>
                    </div>
                </form>
            </div>
        )

}

                            export default CheckoutButton
