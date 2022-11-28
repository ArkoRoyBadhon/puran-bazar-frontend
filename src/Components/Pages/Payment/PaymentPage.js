import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const PaymentPage = () => {
    const booking = useLoaderData();

    // console.log(booking);


    return (
        <div>
            <h3>Payment for {booking.itemname}</h3>
            <p className="text-xl">Please Pay {booking.price}</p>
            <div className='w-96 my-12 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default PaymentPage;