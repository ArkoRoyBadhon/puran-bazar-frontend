import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [pCount, setPCount] = useState(null);
    const { user: CurrentUser, LogIn, GoogleSinUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const location = useLocation();


    // const from = location.state?.from?.pathname || '/';



    const handleLoginForm = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const info = {
            email,
            password
        }
        // console.log(info);

        LogIn(email, password)
            .then(result => {
                const user = result.user
                setLoginUserEmail(user?.email)
                getUserToken(email)
                toast.success('Login Successfully!')

            })
            .catch(err => toast.error(err))

    }


    const handleGoogle = () => {
        GoogleSinUp()
            .then(result => {
                const user = result.user
                // console.log(user);
                const saveinfo = {
                    name: user.displayName,
                    email: user.email,
                    role: "Buyer"
                }
                saveUser(saveinfo)
                toast.success('Login Successfully!')
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const saveUser = (saveinfo) => {
        fetch(`https://purana-bazar-server.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveinfo)
        })
            .then(res => res.json())
    }

    const getUserToken = email => {
        fetch(`https://purana-bazar-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/')
                }
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-2/5 mx-auto">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Login to this site for best deal to buy Second Hand Refrigerator</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
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
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white">Login</button>
                        </div>
                        <p>New to PuranaBazar?? <Link to='/signup'>SignUp</Link></p>
                        <hr className='font-thin' />
                        <button onClick={handleGoogle} className="btn btn-block btn-primary">Continue With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;