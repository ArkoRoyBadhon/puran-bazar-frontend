import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../Loader/Loading';

const AllBuyers = () => {
    const { deleteUserFromFirebase } = useContext(AuthContext);

    const { data: buyers = [], isLoading,refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const url = "https://purana-bazar-server-arkoroybadhon.vercel.app/allbuyers"
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    const handleDeleteBuyer = async (id, email) => {

        fetch(`https://purana-bazar-server-arkoroybadhon.vercel.app/buyerDelete?id=${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                alert('user deleted')
                refetch()
            })

        // deleteUserFromFirebase(email)
        //     .then(() => alert('user delete from firebase'))

    }


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='min-h-screen mt-10'>
            <div className="bg-base-200 px-10 rounded-2xl mb-10 max-w-screen-lg mx-auto min-h-screen py-10">
                <h2 className='font-bold text-2xl text-red-600 mb-5'>Buyer List</h2>
                <table className='table-sm md:table w-3/5 mx-auto mt-12'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.map(buyer =>
                                <tr key={buyer._id}>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.role}</td>
                                    <td>
                                        <div onClick={() => handleDeleteBuyer(buyer._id, buyer.email)} className="btn btn-error btn-sm p-0 m-0 md:btn-md">Delete</div>
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

export default AllBuyers;