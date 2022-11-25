import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Loader/Loading';

const AllBuyers = () => {

    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const url = "http://localhost:5000/allbuyers"
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })

    const handleDeleteBuyer = async (id) => {
        const res = fetch(`http://localhost:5000/buyerDelete?id=${id}`, {
            method: 'DELETE',
        })
        const data = res.json()
        buyers = data
        return buyers;
    }


    if(isLoading) {
    return <Loading></Loading>
    }


    return (
        <div>
            <table className='table w-3/5 mx-auto my-12'>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        buyers?.map(buyer =>
                            <tr key={buyer._id}>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>
                                <td>
                                    <div onClick={()=>handleDeleteBuyer(buyer._id)} className="btn btn-error">Delete</div>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;