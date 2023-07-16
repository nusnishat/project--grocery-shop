import React, { useEffect, useState }  from 'react';
import useFirebase from '../../../useFirebase/UseFirebase';
import Product from '../../Shared/Product/Product';
import './MeatFish.css'
import img from '../../../images/tofu-meat-alternatives.webp'
const MeatFish = () =>{
    const {products, handleAddToCart} = useFirebase();
    return(
        <div id='MeatFish' className='products'>
            <div className='mb-5 product-banner'>
                <img src={img} alt="" />
                <h3 className='mt-3 text-center fw-bolder'>Meat and Fish</h3>
            </div>
            <div className='products-container mt-5'>
            {
                        products.map(product => {
                            if (product.department === 'Meat and Fish')
                                return <Product handleAddToCart = {handleAddToCart} key ={product._id} product={product}></Product>
                        }
                        )
                    }
            </div>
        </div>
    );
};
export default MeatFish;