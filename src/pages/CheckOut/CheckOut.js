import React from 'react';
import useFirebase from '../../useFirebase/UseFirebase';
import './CheckOut.css'
const Checkout = () => {
    const {handleCheckout} = useFirebase();
    return (
        <div>
            <div className="cart-title py-4">
                <h2 className='text-center text-white fw-bolder '>Checkout</h2>
                <p className='text-center text-white'><a href="/home">Home</a>/Cart/Checkout</p>
            </div>
            <div class="mb-3 checkout-form my-5">
            <div className='pb-5'>
                <label for="exampleFormControlInput1" class="form-label ">Full Name:</label>
                <input type="text" class="form-control" />
                <label for="exampleFormControlInput1" class="form-label mt-3 ">Phone:</label>
                <input type="text" class="form-control" />
                <label for="exampleFormControlInput1" class="form-label mt-3">Email address</label>
                <input type="text" class="form-control " />
                <label className='mt-3'>District</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select your District</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Chittagong</option>
                    <option value="3">Rajshahi</option>
                    <option value="4">Khulna</option>
                    <option value="5">Sylhet</option>
                    <option value="6">Cumilla</option>
                </select>
                <label className='mt-3'>Delivery Procedure</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Select your delivery procedure</option>
                    <option value="1">Cash on delivery</option>
                    <option value="2">Direct bank transfer</option>
                    <option value="3">By Bikash</option>
                </select>
                <button onClick={handleCheckout} className='btn btn-checkout'>Checkout</button>
            </div>
            </div>
        </div>
    );
};

export default Checkout;