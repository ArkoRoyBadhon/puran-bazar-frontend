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

    const handleVerifyBuyer = (id) => {
        fetch(`http://localhost:5000/sellerVerify?id=${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => alert('success'))
        
    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='min-h-screen'>
            <table className='table w-3/5 mx-auto my-12'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                        <th>verify</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers?.map(seller =>
                            <tr key={seller._id}>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td>
                                    <div onClick={() => handleDeleteBuyer(seller._id)} className="btn btn-error">Delete</div>
                                </td>
                                <td>
                                    <div onClick={() => handleVerifyBuyer(seller._id)} className="btn btn-error">Verify</div>
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