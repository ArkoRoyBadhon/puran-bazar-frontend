import React from 'react';
import errorimg from '../../../assets/71244-404-error.gif'

const ErrorPage = () => {
    return (
        <div className='min-h-screen w-4/5 mx-auto' >
            <img src={errorimg} alt="" />
        </div>
    );
};

export default ErrorPage;