import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SignUp = () => {

    const { signUpWithEmail, updateUser, GoogleSinUp } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUpForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const password = form.password.value;

        const saveinfo = {
            name,
            email,
            role
        }
        // console.log(info);

        signUpWithEmail(email, password)
            .then(res => {
                const user = res.user
                const info = {
                    displayName: name
                }
                updateUser(info)
                    .then(result => {
                        saveUser(saveinfo)
                    })
                    .catch(err => console.error(err))
            })
            .then(data => {
                form.reset()
                alert('success signup')
            })
    }

    const handleGoogle = () => {
        GoogleSinUp()
            .then(result => {
                const user = result.user
                console.log(user);
                const saveinfo = {
                    name: user.displayName,
                    email: user.email,
                    role: "buyer"
                } 
                saveUser(saveinfo)
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const saveUser = (saveinfo) => {
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveinfo)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/5 lg:w-2/3 mx-auto">
                    <h1 className="text-2xl lg:text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">SignUp Hurry !!</p>
                    <p className="">Best deals are waiting for you!! You can buy your desire refrigerator at very affordable prize</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUpForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select name='role' className="select select-bordered w-full max-w-xs">
                                {/* <option disabled selected>Who are you?</option> */}
                                <option defaultValue>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-cyan-600 to-blue-600 font-bold">SignUp</button>
                        </div>
                        <p>New to PuranaBazar?? <Link to='/login'>Login</Link></p>
                        <hr className='font-thin' />
                        <button onClick={handleGoogle} className="btn btn-block btn-primary">Continue With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;