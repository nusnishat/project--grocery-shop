import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../useFirebase/UseFirebase';
import useFirebasee from '../../../useFirebase/useFirebasee';
import CartProduct from '../CartProduct/CartProduct';
import './Cart.css'
const Cart = (props) => {
    const {user} = useFirebasee();
    const { cart } = useFirebase()
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.productQuantity) {
            product.productQuantity = 1;
        }
        total = total + product.price * product.productQuantity;
        totalQuantity = totalQuantity + product.productQuantity;
    }
    // const shipping = total > 0 ? 15 : 0;
    const tax = total * .01;
    const grandTotal = tax + total;

    let navigate = useNavigate()
    const handleCheckoutHome =() =>{
        alert('Plesase Sign Up');
        navigate('/login')
    }
    const handleCheckout =() =>{
        navigate('/checkout')
    }

    return (
        <div>
            {/* <h3>Order Summary</h3>
            <h4>Items orderd:{totalQuantity}</h4>
            <br />
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {grandTotal}</p>
            {props.children} */}
            <div className="cart-title py-4">
                <h2 className='text-center text-white fw-bolder '>Cart</h2>
                <p className='text-center text-white'><a href="/home">Home</a>/Cart</p>
            </div>
            <div className="cart-description container  my-5 shadow">
                <div className="cart-description-title text-center row p-3">
                    <div className="col-2"></div>
                    <div className="col-2"><h6>Product</h6></div>
                    <div className="col-2"><h6>Price</h6></div>
                    <div className="col-2"><h6>Quantity</h6></div>
                    <div className="col-2"><h6>Sub -Total</h6></div>
                    <div className="col-2">Remove Product</div>
                </div>
                {
                    cart.length ?
                        cart.map(cartProduct => <CartProduct cartProduct={cartProduct}></CartProduct>)
                        :
                        <div className='text-center text-secondary py-5'><p>Your current cart is empty</p></div>
                }
                <div className='py-5 px-4'>
                    <h4>Cart Total</h4> <span><p>Free Delivery</p></span>
                    <div className='price-total mt-3 bg-white'>
                        <div className="row px-5 py-2">
                            <div className="col-6 price-title"><h5>SubTotal</h5></div>
                            <div className="col-6">{total}</div>
                        </div>
                        <div className="row tax px-5 py-2">
                            <div className="col-6 price-title"><h5>Tax</h5></div>
                            <div className="col-6">{tax}</div>
                        </div>
                        <div className="row ">
                            <div className="col-6 px-5 py-2 price-title"><h5>Total</h5></div>
                            <div className="col-6">{grandTotal}</div>
                        </div>
                    </div>
                </div>
                {
                    user.email?
                    <button onClick={handleCheckout} className='btn btn-checkout ms-4 px-5 py-2 mb-5'>Proceed To Checkout</button>
                    :
                    <button onClick={handleCheckoutHome} className='btn btn-checkout ms-4 px-5 py-2 mb-5'>Proceed To Checkout</button>
                }
                
            </div>
        </div>
    );
};

export default Cart;