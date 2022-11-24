import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/5 lg:w-2/3 mx-auto">
                    <h1 className="text-2xl lg:text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">SignUp Hurry !!</p>
                    <p className="">Best deals are waiting for you!! You can buy your desire refrigerator at very affordable prize</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                            {/* <option disabled selected>Who are you?</option> */}
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
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
                            <button className="btn bg-gradient-to-r from-cyan-600 to-blue-600 font-bold">SignUp</button>
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

export default SignUp;