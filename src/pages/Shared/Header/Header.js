import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link,  } from 'react-router-dom';
import useFirebasee from '../../../useFirebase/useFirebasee';
import './Header.css'
import useFirebase from '../../../useFirebase/UseFirebase';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const { user, logOut } = useFirebasee();
    const { cart } = useFirebase();
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.productQuantity) {
            product.productQuantity = 1;
        }
        total = total + product.price * product.productQuantity;
        totalQuantity = totalQuantity + product.productQuantity;
    }


    return (
        <div className='sticky-top'>
            <div className='d-flex py-3 search-field'>
                <div>
                    <FontAwesomeIcon icon={faShoppingBasket} className="CartIcon rounded fs-3 p-2 me-2 cartIcon" /><span className='text-white fw-bold fs-3'><sup>Amar Grocery</sup></span>
                </div>
                <div class="search-button input-group my-auto mx-auto w-50  shadow-sm">
                    <input type="text" class="form-control" placeholder="Search Product" />
                    <button class="btn btn-common fw-bold" type="button">Search</button>
                </div>
                <span className='me-4 px-2 rounded-pill bg-white '><FontAwesomeIcon icon={faShoppingCart} className=" p-1 mt-3" /><sup><a className='text-black' href="/cart">My Cart</a> ( {totalQuantity} )</sup></span>
            </div>
            <nav className='nav-field d-flex'>
                <div >
                    <Dropdown>
                        <Dropdown.Toggle className='all-category px-5 py-3 mx-4 text-white fw-bold' id="dropdown-basic">
                            All Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/fruits-vegetables">Fruits and Vegetables</Dropdown.Item>
                            <Dropdown.Item href="/meat-fish">Meat and Fish</Dropdown.Item>
                            <Dropdown.Item href="/home-kitchen">Home Kitchen</Dropdown.Item>
                            <Dropdown.Item href="/beauty-health">Beauty and Health Care</Dropdown.Item>
                            <Dropdown.Item href="/baby-care">Baby Care</Dropdown.Item>
                            <Dropdown.Item href="/snacks">Snacks</Dropdown.Item>
                            <Dropdown.Item href="/cooking">Cooking</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='my-3'>
                    
                    <Link style={{ textDecoration: "none" }} className='sign-in ms-5 text-dark' as={HashLink} to="/home#home">Home</Link>
                    <Link style={{ textDecoration: "none" }} className='sign-in ms-5 text-dark' as={HashLink} to="/home#order">Order</Link>
                    <Link style={{ textDecoration: "none" }} className='sign-in ms-5 text-dark' as={HashLink} to="/home#aboutUs">About us</Link>
                    <Link style={{ textDecoration: "none" }} className='sign-in ms-5 text-dark' as={HashLink} to="/home#contact">Contact</Link>
                    {/* <a href="/login" className='me-auto'>Sign In</a> */}
                    <span className='d-inline'>
                        {/* {user.email && <span style={{ color: 'white' }}>Hello {user.email}</span>} */}

                        {
                            user.email ?
                                <span className='signOut' style={{ color: 'black' }}><FontAwesomeIcon className='icon  me-2' icon={faUser} />{user.email}<FontAwesomeIcon className='ms-4' icon={faArrowRightLong} /><a className='ms-2 fw-bolder text-dark' href='/home' onClick={logOut} >Sign Out</a></span>
                                :
                                <span className='signIn'><FontAwesomeIcon icon={faUser} /><a className='ms-2 signIn fw-bolder text-dark' href="/login">Sign In</a ></span>
                        }

                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Header;