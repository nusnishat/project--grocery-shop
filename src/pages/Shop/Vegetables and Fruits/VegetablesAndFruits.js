import React, { useEffect, useState }  from 'react';
import useFirebase from '../../../useFirebase/UseFirebase';
import Product from '../../Shared/Product/Product';
import img from '../../../images/fresh-vegetables.webp'
const VegetablesAndFruits = () =>{
    const {products, handleAddToCart} = useFirebase();
    return(
        <div id='VegetablesAndFruits' className='products'>
            <div className='mb-5 product-banner'>
                <img src={img} alt="" />
                <h3 className='mt-3 text-center fw-bolder'>Fruits and Vegetables</h3>
            </div>
            <div className='products-container'>
            {
                        products.map(product => {
                            if (product.department === 'Vegetables and Fruits')
                                return <Product handleAddToCart = {handleAddToCart} key ={product._id} product={product}></Product>
                        }
                        )
                    }
            </div>
        </div>
    );
};
export default VegetablesAndFruits;