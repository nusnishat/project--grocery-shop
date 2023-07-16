import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../../utilities/fakedb';
import './CartProduct.css'
const CartProduct = (props) => {
    const { title, price, imagePath, productQuantity } = props.cartProduct;

    let navigate = useNavigate();

    const remove = item =>{
        removeFromDb(item);
        window.location.reload(false);
    }


    return (
        <div className='cart-product-container mb-2 text-center'>
            <div className="row py-2">
                <div className="col-2 py-2">
                    <img src={imagePath} alt="" />
                </div>
                <div className="col-2 mt-5">{title}</div>
                <div className="col-2 mt-5">{price}</div>
                <div className="col-2 mt-5">{productQuantity}</div>
                <div className="col-2 mt-5">{productQuantity * price}</div>
                <div className="col-2 mt-5"><button onClick={()=>{remove(props.cartProduct._id)}} className='btn py-2  px-3 btn-remove-product'>Remove</button></div>
            </div>
        </div>
    );
};

export default CartProduct;