import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/106961-happy-shopping-cart.gif'


const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-20 rounded-lg' src={logo} alt="" />
                    <p>PuranaBazar<br />Providing reliable Second Hand Refrigerator</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Walton</Link>
                    <Link to='/' className="link link-hover">Samsung</Link>
                    <Link to='/' className="link link-hover">Lg</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/blog' className="link link-hover">Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Arko Roy Badhon</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;