import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Loader/Loading';

const CategoryPage = () => {

    // const fridges = useLoaderData();
    // console.log('current Pathname 👉️', window.location.pathname);
    const link = window.location.pathname
    const smallPart = link.slice(link.length - 1, link.length)
    console.log(smallPart);

    const url = `http://localhost:5000/category/${smallPart}`

    console.log(url);

    const { data: fridges = [], isLoading } = useQuery({
        queryKey: ['fridges'],
        queryFn: async ({ params }) => {
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    fridges.map((fridge, i) => <div key={i}>
                        <div className="card w-96 bg-base-100 shadow-xl h-[52rem] my-5 lg:my-10">
                            <figure><img src={fridge.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{fridge.name}</h2>
                                <small>{ }</small>
                                <h4 className="text-xl">Resale Price: {fridge.resalePrice} TK</h4>
                                <h4 className="text-xl">Original Price: {fridge.originalPrice} TK</h4>
                                <h5 className="text-lg">Used: {fridge.yearUse} years</h5>
                                <p>Seller: {fridge.sellerName}</p>
                                <p>Post Time: {fridge.postTime}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;