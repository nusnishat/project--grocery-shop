import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='mt-5'>
            <div className="footer">
                <div className="footer-front row container py-5">
                    <div className="col-3">
                    <FontAwesomeIcon icon={faShoppingBasket} className="footerCartIcon rounded fs-4 p-2 me-2 cartIcon" /><span className='fw-bold fs-5'><sup>Amar Grocery</sup></span>
                        <br /><br />
                        <p>+61 626 240 310</p>
                        <p>amargrocery@gmail.com</p>
                        <p>www.amargrocery.com</p>
                    </div>
                    <div className="col-3">
                        <h6>TOP CITIES</h6>
                        <p>Dhaka</p>
                        <p>Chittagong</p>
                        <p>Rajshahi</p>
                        <p>Sylhet</p>
                        <p>Khulna</p>
                    </div>
                    <div className="col-3">
                        <h6>CATEGORIES</h6>
                        <p>Fruits and Vegetables</p>
                        <p>Meat and Fish</p>
                        <p>Home Kitchen</p>
                        <p>Beauty and Health Care</p>
                        <p>Snacks</p>
                        <p>Cooking</p>
                    </div>
                    <div className="col-3">
                        <h6>CUSTOMER SERVICE</h6>
                        <p>Privacy Policy</p>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
            <div className="footer-end py-4 text-center">
                <h6>Copyright 2022.Nishat . All rights reserved </h6>
            </div>
        </div>
    );
};

export default Footer;