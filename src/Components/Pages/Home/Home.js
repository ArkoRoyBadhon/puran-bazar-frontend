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
        <div>
            <Banner></Banner>
            <AdvertisedItem></AdvertisedItem>
            <div className="max-w-screen-xl mx-auto my-10">
                <h4 className="text-3xl font-bold">Categories</h4>
                <h6 className="text-xl">Please Select a Category to buy Products</h6>
                {
                    categories.map(category =>
                        <div key={category.id} className="btn"><Link to={`/category/${category.id}`}>{category.name}</Link></div>)
                }
            </div>
        </div>
    );
};

export default Home;