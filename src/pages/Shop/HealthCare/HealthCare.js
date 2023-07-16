import React, { useEffect, useState }  from 'react';
import useFirebase from '../../../useFirebase/UseFirebase';
import Product from '../../Shared/Product/Product';
import img from '../../../images/health-care.webp'
const HealthCare = () =>{
    const {products, handleAddToCart} = useFirebase();
    return(
        <div id='HealthCare' className='products'>
            <div className='mb-5 product-banner'>
                <img src={img} alt="" />
                <h3 className='mt-3 text-center fw-bolder'>Beauty and Health Care</h3>
            </div>
            <div className='products-container'>
            {
                        products.map(product => {
                            if (product.department === 'Beauty and Health')
                                return <Product handleAddToCart = {handleAddToCart} key ={product._id} product={product}></Product>
                        }
                        )
                    }
            </div>
        </div>
    );
};
export default HealthCare;