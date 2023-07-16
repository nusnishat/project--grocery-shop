import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const {handleAddToCart, title, price, quantity, imagePath } = props.product;
    return (
        <div className='product-container text-center pb-2 shadow-sm'>
            <img src={imagePath}></img>
            <h6 className='title fw-bolder mt-3 mx-2'>{title}</h6>
            <p className=' text-secondary'><span className='fs-3'></span><span >{quantity}</span></p>
            <p className=' price '><span className='fs-5'>৳</span><span >{price}</span></p>
            <button onClick={()=>{props.handleAddToCart(props.product)}}className='btn mb-2 btn-regular rounded-pill'>
            <FontAwesomeIcon icon={faShoppingCart} className ="me-1" /> Add to cart
            </button>
        </div>
    );
};
export default Product;