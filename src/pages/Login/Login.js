import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../useFirebase/UseFirebase';
import useFirebasee from '../../useFirebase/useFirebasee';
import './Login.css'
const Login = () => {
    const {signInUsingGoogle}  = useFirebasee();
    return (
        <div >
            
            <div className='login-container mb-5 pb-5'>
                <div className='border mt-5 rounded'>
                <h2 className='text-center fw-bolder py-2 mb-4'>Login</h2>
                    <form className='p-5'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-regular">Login</button>
                        <p>New to Amar Grocery? <Link to='/register'>Create Account</Link></p>
                        <div className='text-center'>----------or----------</div>
                        <button onClick={signInUsingGoogle} className='btn btn-regular'>Google Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;