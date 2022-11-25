import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loader/Loading';

const AllSellers = () => {
    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const url = "http://localhost:5000/allsellers"
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })

    const handleDeleteBuyer = async (id) => {
        const res = fetch(`http://localhost:5000/sellerDelete?id=${id}`, {
            method: 'DELETE',
        })
        const data = res.json()
        sellers = data
        return sellers;
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
                        sellers?.map(seller =>
                            <tr key={seller._id}>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td>
                                    <div onClick={()=>handleDeleteBuyer(seller._id)} className="btn btn-error">Delete</div>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;