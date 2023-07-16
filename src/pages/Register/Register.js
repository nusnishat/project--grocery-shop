import React from 'react';
import useFirebasee from '../../useFirebase/useFirebasee';
import '../Login/Login.css'

const Register = () => {
    const { handleNameChange, toggoleLogin, handlePasswordChange, handleEmailChange, handleResetPassword, handleRegister, isLogin, error } = useFirebasee()

    return (
        <div className=" ">
            <div className="cart-title py-4 mb-5">
                <h2 className='text-center text-white fw-bolder '>My Account</h2>
                <p className='text-center text-white'><a href="/home">Home</a>/Sign in</p>
            </div>
            {/* form */}
            <div className='login-container'>
                <div className='border rounded px-2 pt-2 pb-4'>
                    <form className='p-4' onSubmit={handleRegister}>
                        <h4 className='text-center fw-bolder py-2 mb-4'> {isLogin ? 'Please Login' : 'Create a New Acoount'}</h4>
                        {
                            !isLogin &&
                            <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input required onBlur={handleNameChange} type="text" className="form-control" id="inputName" />
                                </div>
                            </div>
                        }
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input  required onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input  required onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input  onChange={toggoleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-danger">
                            <h4>{error}</h4>
                        </div>
                        <button type="submit" className="ms-5 me-2 btn btn-common">{isLogin ? 'Login' : 'Register'}</button>
                        <button onClick={handleResetPassword} type="submit" className="btn btn-success">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;