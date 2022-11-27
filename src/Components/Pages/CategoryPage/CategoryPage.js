import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
// import { useLoaderData } from 'react-router-dom';
import Loading from '../Loader/Loading';

const CategoryPage = () => {
    const { user } = useContext(AuthContext);
    const [cUser, SetCUser] = useState('');
    const link = window.location.pathname
    const smallPart = link.slice(link.length - 1, link.length)
    // console.log(smallPart);

    const url = `http://localhost:5000/category/${smallPart}`

    // console.log(url);

    const { data: fridges = [], isLoading } = useQuery({
        queryKey: ['fridges'],
        queryFn: async ({ params }) => {
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data);
            return data;
        }
    })

    const handleReportBtn = (allData) => {
        fetch(`http://localhost:5000/report`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert('report added')
            })
    }

    if (isLoading) {
        <Loading></Loading>
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                SetCUser(data)
            })
    }, [user])

    return (
        <div className='max-w-screen-xl min-h-screen mx-auto'>
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
                                <div className="flex">
                                    <p>Seller: {fridge.sellerName} </p>
                                    {fridge.verify_user === 'true' && <div className='bg-blue-200 flex justify-center w-1/5 rounded-lg py-1'><FaCheck className='text-blue-600 text-xl' /></div>}
                                </div>

                                <p className="text-md">{fridge.description}</p>
                                <p>Post Time: {fridge.post}</p>
                                <div className="flex justify-between">
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-primary">Add WishList</button>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {
                                            cUser?.role === "Buyer" ?
                                                <button className="btn btn-primary">Book Now</button>
                                                :
                                                <button disabled className="btn btn-primary">Book Now</button>
                                        }
                                    </div>
                                </div>
                                {
                                    cUser?.role === "Buyer" && <>
                                        <hr className='font-thin' />
                                        <div onClick={() => handleReportBtn(fridge)} className="btn btn-error">Report to the Admin</div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;