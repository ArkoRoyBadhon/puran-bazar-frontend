import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loader/Loading';
import { FaCheck } from 'react-icons/fa';
import toast from 'react-hot-toast'

const AllSellers = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const url = "https://purana-bazar-server.vercel.app/allsellers"
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    const handleDeleteSeller = async (id) => {
        fetch(`https://purana-bazar-server.vercel.app/sellerDelete?id=${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // alert('user deleted')
                toast.success('user delete Successfully!')
                refetch()
            })
        // sellers = data

        // return sellers;
    }

    const handleVerifyBuyer = (id, email) => {
        fetch(`https://purana-bazar-server.vercel.app/sellerVerify?id=${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => alert('success'))


        fetch(`https://purana-bazar-server.vercel.app/usersverify?email=${email}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // alert('fridge update')
            })

        refetch()

    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='min-h-screen mt-10'>
            <div className="bg-base-200 px-10 rounded-2xl mb-10 max-w-screen-lg mx-auto min-h-screen py-10">
                <h2 className='font-bold text-2xl text-red-600 mb-5'>Seller List</h2>
                <table className='table-xs md:table w-3/5 mx-auto my-12'>
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
                                        <div onClick={() => handleDeleteSeller(seller._id)} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</div>
                                    </td>
                                    <td>
                                        {seller.verify === 'true' ?
                                            <div className="bg-blue-200 py-2 rounded-lg flex justify-center ">
                                                <FaCheck className='text-blue-600 text-xl' />
                                            </div>
                                            :
                                            <div onClick={() => handleVerifyBuyer(seller._id, seller.email)} className="btn btn-sm p-0 m-0 md:btn-md  btn-error">Verify</div>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;