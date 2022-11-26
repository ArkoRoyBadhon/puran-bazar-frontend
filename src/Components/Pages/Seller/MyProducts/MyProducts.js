import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
// import { set } from 'react-hook-form';
import { AuthContext } from '../../../../Context/AuthProvider';
import Loading from '../../Loader/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [storeData, setStoreData] = useState(true);

    const url = `http://localhost:5000/myproducts?email=${user?.email}`

    const { data: fridges = [], isLoading } = useQuery({
        queryKey: ['fridges'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data);
            setStoreData(false)
            return data;
        }
    })


    const handleAdvertise = (alldata) => {
        fetch(`http://localhost:5000/advertisementpost`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(alldata)
        })
            .then(res => res.json())
            .then(data => {
                // setStoreData(data);
                alert('successfully added to the advertisement')
            })
    }



    if (isLoading) {
        <Loading></Loading>
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         if(storeData){
    //             // window.location.reload(); 
    //         }
    //     }, 500);
    // }, [storeData])

    if (storeData) {
        return <Loading></Loading>
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            {/* <h2>this is my products</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    fridges.map((fridge, i) => <div key={i}>
                        <div className="card w-96 bg-base-100 shadow-xl h-[52rem] my-5 lg:my-10">
                            <figure><img src={fridge.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{fridge.name}</h2>
                                <small>{ }</small>
                                <h6 className="text-md">Stock: {fridge.stock}</h6>
                                <h4 className="text-xl">Resale Price: {fridge.resalePrice} TK</h4>
                                <h4 className="text-xl">Original Price: {fridge.originalPrice} TK</h4>
                                <h5 className="text-lg">Used: {fridge.yearUse} years</h5>
                                <p>Seller: {fridge.sellerName}</p>
                                <p className="text-md">{fridge.description}</p>
                                <p>Post Time: {fridge.post}</p>
                                <div className="flex justify-between">
                                    <div className="card-actions justify-start">
                                        <button onClick={() => handleAdvertise(fridge)} className="btn btn-primary">Advertise</button>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProducts;