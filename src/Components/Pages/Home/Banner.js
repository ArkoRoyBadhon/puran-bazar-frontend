import React from 'react';
import { Link } from 'react-router-dom';
// import cart from '../../../assets/106961-happy-shopping-cart.gif'
import fridge from '../../../assets/fridge.jpg'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'


const Banner = () => {
    return (
        <div className="hero max-w-screen-xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={fridge} className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='max-w-screen-md mx-auto'>
                    {/* <h1 className="text-5xl font-bold">OLD IS GOLD</h1> */}
                    <div className='text-5xl font-bold'>
                        <AutoTyping
                            active // <boolean>
                            textRef='Welcome to Purana Bazar' // <string>
                            writeSpeed={100} // <number>
                            deleteSpeed={150} // <number>
                            delayToWrite={1200} // <number>
                            delayToDelete={2000} // <number>
                        />
                        <BlinkCursor
                            active // <boolean>
                            blinkSpeed={500} // <number>
                        />
                    </div>
                    <p className="py-6">Budget Limited?? Don't worry about your low budget. Come to us and choose your favourite Refrigerator in your low budget.</p>
                    <Link className="btn btn-primary">Explore</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;