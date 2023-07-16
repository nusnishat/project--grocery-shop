import React, { useEffect, useState }  from 'react';
import useFirebase from '../../../useFirebase/UseFirebase';
import Product from '../../Shared/Product/Product';
import img from '../../../images/baby-care1.webp'
const BabyCare = () =>{
    const {products, handleAddToCart} = useFirebase();
    return(
        <div id='BabyCare' className='products'>
            <div className='mb-5 product-banner'>
                <img src={img} alt="" />
                <h3 className='mt-3 text-center fw-bolder'>Baby Care</h3>
            </div>
            <div className='products-container'>
            {
                        products.map(product => {
                            if (product.department === 'Baby Care')
                                return <Product handleAddToCart = {handleAddToCart} key ={product._id} product={product}></Product>
                        }
                        )
                    }
            </div>
        </div>
    );
};
export default BabyCare;