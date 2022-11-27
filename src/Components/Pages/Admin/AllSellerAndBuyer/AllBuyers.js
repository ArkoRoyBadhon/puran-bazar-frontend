import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../Loader/Loading';

const AllBuyers = () => {
    const { deleteUserFromFirebase } = useContext(AuthContext);

    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const url = "https://purana-bazar-server-arkoroybadhon.vercel.app/allbuyers"
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })

    const handleDeleteBuyer = async (id,email) => {
        // fetch(`https://purana-bazar-server-arkoroybadhon.vercel.app/buyerDelete?id=${id}`, {
        //     method: 'DELETE',
        // })
        // .then(res => res.json())
        // .then(data => {
            // alert(email)
        deleteUserFromFirebase(email)
            .then(() => alert('user delete from firebase'))
        // })
        // buyers = data


        // return buyers;
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
                                    <div onClick={() => handleDeleteBuyer(buyer._id, buyer.email)} className="btn btn-error">Delete</div>
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