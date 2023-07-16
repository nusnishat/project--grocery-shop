import React from 'react';
import './Home.css'
import img from '../../images/home-banner.webp'
import imgStep1 from '../../images/order-step1.webp'
import imgStep2 from '../../images/order-step2.webp'
import imgStep3 from '../../images/order-step3.webp'
import imgAboutUsBanner from '../../images/about-us-banner.jpg'
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faAt} from '@fortawesome/free-solid-svg-icons';
import { faLink} from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-banner'>
                <img className='' src={img} alt="" />
            </div>
            <div className='what-we-provide-container mt-4'>
                <h3 className='text-center text-dark my-4'>What we provide?</h3>
                <div className='provide'>
                <div className="row container">
                    <div className="col-4 ">
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <h4>Freshly Picked</h4>
                                <p>Our fresh produce is sourced every morning,you get the best from us</p><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <h4>Wide Products</h4>
                                <p>With 4000+ products to choose from,forget dcouring those aisles for hours</p><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <h4>Convenient and Quick</h4>
                                <p>No waitting in traffic, no haggling, no worries carrying groceries, they are delivered right at you door</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className='my-5' id='order'>
                <div className='home-title py-5  mb-4 fw-bolder'><h2 className='my-2 text-center'>How to order?</h2></div>
                <div className='carousel-container container'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgStep1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgStep2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgStep3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div>
                <div className='home-title py-5  mb-4 fw-bolder' id='aboutUs'><h2 className='my-2 text-center'>About Us</h2></div>
                <div className=' row container my-5'>
                    <div className="col-6 about-us-banner">
                        <img className='ms-5 ps-5' src={imgAboutUsBanner} alt="" />
                    </div>
                    <div className="col-6 about-container ">
                        <h3 className='mx-4 fw-bolder mb-5'>Save more with GO! We give you the lowest prices on all your grocery needs.</h3>
                        <h5 className='text-dark mx-4 mb-2'>Our Vision</h5>
                        <p className='mx-4 mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                        <h5 className='text-dark mx-4 mb-2'>Our Goal</h5>
                        <p className='mx-4'>When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, Lorem Ipsum has been the industry's standard dummy text ever since.,</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='home-title py-5  mb-4 fw-bolder' id='contact'><h2 className='my-2 text-center'>Contact Us</h2></div>
                <div className=' row container my-5'>
                    <div className="address-container col-6 ">
                        <div className='ms-5 ps-5'>
                            <h3 className='text-dark mb-3 fw-bolder'>Get In Touch</h3>
                            <h5 className='text-dark'><FontAwesomeIcon icon={faHome} className="me-2 contact-icon" />Address :</h5>
                            <p>Street 10, K block ,Halishahar <br />Chittagong Town, Bangladesh</p>
                            <h5 className='text-dark'><FontAwesomeIcon icon={faPhone} className="me-2 contact-icon" />Mobile :</h5>
                            <p>01878896612 , 03123</p>
                            <h5 className='text-dark'><FontAwesomeIcon icon={faAt} className="me-2 contact-icon" />Email</h5>
                            <p>amargrocery@gmail.com</p>
                            <h5 className='text-dark'><FontAwesomeIcon icon={faLink} className="me-2 contact-icon" />Website</h5>
                            <p>www.amargrocery.com</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <h3 className='text-dark mb-3 fw-bolder'>Send Us a Message</h3>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputName" class="form-label">Your name</label>
                                <input type="text" placeholder='Enter Your Name' class="form-control" id="exampleInputName" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail" class="form-label">Your name</label>
                                <input type="email" placeholder='Enter Your Email' class="form-control" id="exampleInputEmail" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Enter Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-common">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;