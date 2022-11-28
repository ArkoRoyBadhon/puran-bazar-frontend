import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../Loader/Loading';

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const url = `http://localhost:5000/bookings?email=${user?.email}`
            const res = await fetch(url);
            const data = res.json();
            return data;
        }

    })

    console.log('buyer', buyers)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='min-h-screen mt-10'>
            <div className="bg-slate-200 px-10 rounded-2xl mb-10 max-w-screen-lg mx-auto min-h-screen py-10">
                <h2 className='font-bold text-2xl text-red-600 mb-5'>My Order List</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        buyers.map((buyer, i) =>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className='h-56 w-full' src={buyer.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{buyer.itemname}</h2>
                                    <p>Price: {buyer.price}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Pay</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrder;