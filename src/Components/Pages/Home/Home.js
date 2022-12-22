import React from 'react';
import { Link } from 'react-router-dom';
import AdvertisedItem from './AdvertisedItem';
import Banner from './Banner';
import thinking from '../../../assets/16766-forget-password-animation.gif'

const Home = () => {
    const categories = [
        {
            name: "walton",
            id: 1
        },
        {
            name: "samsung",
            id: 2
        },
        {
            name: "lg",
            id: 3
        },
        {
            name: "All",
            id: 4
        },
    ]

    console.log('length', categories.length);
    return (
        <div className='my-10'>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <div className="max-w-screen-xl mx-auto my-10 py-10 text-center">
                <h4 className="text-3xl font-bold">Categories</h4>
                <h6 className="text-xl">Please Select a Category to buy Products</h6>
                <div className="w-3/5 mx-auto my-8">
                    {
                        categories?.map(category =>
                            <div key={category.id} className="btn w-full"><Link to={`/category/${category.id}`}>{category.name}</Link></div>)
                    }
                </div>
            </div>
            <div className="hero min-h-fit bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={thinking} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='text-left'>
                        <h1 className="text-5xl font-bold">Why You Buy From Us</h1>
                        <ul className='list-disc my-5 ml-6'>
                            <li>We provide safest collaboration with buyer and seller</li>
                            <li>We Provide middleware service so that you can get best products</li>
                            <li>We Provide you the best price in the market</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;