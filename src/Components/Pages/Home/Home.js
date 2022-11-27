import React from 'react';
import { Link } from 'react-router-dom';
import AdvertisedItem from './AdvertisedItem';
import Banner from './Banner';

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
    return (
        <div className='my-10'>
            <Banner></Banner>
            <h4 className="text-2xl text-center font-bold mt-20 mb-8">Advertisement</h4>
            <AdvertisedItem></AdvertisedItem>
            <div className="max-w-screen-xl mx-auto my-10 py-10 text-center">
                <h4 className="text-3xl font-bold">Categories</h4>
                <h6 className="text-xl">Please Select a Category to buy Products</h6>
                <div className="w-3/5 mx-auto my-8">
                    {
                        categories.map(category =>
                            <div key={category.id} className="btn w-full"><Link to={`/category/${category.id}`}>{category.name}</Link></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;