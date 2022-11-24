import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-2/5 mx-auto">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login to this site for best deal to buy Second Hand Refrigerator</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">Login</button>
                        </div>
                        <p>New to PuranaBazar?? <Link to='/signup'>SignUp</Link></p>
                        <hr className='font-thin' />
                        <button className="btn btn-block btn-primary">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;