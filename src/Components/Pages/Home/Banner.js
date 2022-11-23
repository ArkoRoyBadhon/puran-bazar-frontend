import React from 'react';
import cart from '../../../assets/106961-happy-shopping-cart.gif'



const Banner = () => {
    return (
        <div className="hero max-w-screen-xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={cart} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='max-w-screen-md mx-auto'>
                    <h1 className="text-5xl font-bold">OLD IS GOLD</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;