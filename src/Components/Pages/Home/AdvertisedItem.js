import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';


const AdvertisedItem = () => {
    const { data: fridges = [] } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/getadvertisement')
            const data = res.json();
            return data
        }
    })

    return (
        <div class="h-[55vh] scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
            {/* <div class="h-64"></div> */}
            <div className='max-w-screen-xl mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                    {
                        fridges.map((fridge, i) =>
                            <div key={i} className="">
                                <div className="card w-96 bg-base-100 shadow-xl h-[48rem] my-5 lg:my-10">
                                    <figure><img src={fridge.photo} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{fridge.name}</h2>
                                        <small>{ }</small>
                                        <h4 className="text-xl">Resale Price: {fridge.resalePrice} TK</h4>
                                        <h4 className="text-xl">Original Price: {fridge.originalPrice} TK</h4>
                                        <h5 className="text-lg">Used: {fridge.yearUse} years</h5>
                                        <p>Seller: {fridge.sellerName}</p>
                                        <p className="text-md">{fridge.description}</p>
                                        <p>Post Time: {fridge.post}</p>
                                        <div className="flex justify-between">
                                            {/* <div className="card-actions justify-start">
                                                <button className="btn btn-primary">Add WishList</button>
                                            </div> */}
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* <div className="flex justify-center w-full py-2 gap-2">
                {
                    fridges.map((fridge, i) =>
                        <a href={`#item+i`} className="btn btn-xs">1</a>
                    )
                }
            </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                </div>
            </div>
        </div>

        // <div className='max-w-screen-xl mx-auto'>
        //     <div className="carousel w-full">
        //         {
        //             fridges.map((fridge, i) =>
        //                 <div key={i} className="h-[400vh] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        //                     <div className="card w-96 bg-base-100 shadow-xl h-[48rem] my-5 lg:my-10">
        //                         <figure><img src={fridge.photo} alt="Shoes" /></figure>
        //                         <div className="card-body">
        //                             <h2 className="card-title">{fridge.name}</h2>
        //                             <small>{ }</small>
        //                             <h4 className="text-xl">Resale Price: {fridge.resalePrice} TK</h4>
        //                             <h4 className="text-xl">Original Price: {fridge.originalPrice} TK</h4>
        //                             <h5 className="text-lg">Used: {fridge.yearUse} years</h5>
        //                             <p>Seller: {fridge.sellerName}</p>
        //                             <p className="text-md">{fridge.description}</p>
        //                             <p>Post Time: {fridge.post}</p>
        //                             <div className="flex justify-between">
        //                                 <div className="card-actions justify-start">
        //                                     <button className="btn btn-primary">Add WishList</button>
        //                                 </div>
        //                                 <div className="card-actions justify-end">
        //                                     <button className="btn btn-primary">Book Now</button>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         }
        //     </div>
        //     {/* <div className="flex justify-center w-full py-2 gap-2">
        //         {
        //             fridges.map((fridge, i) =>
        //                 <a href={`#item+i`} className="btn btn-xs">1</a>
        //             )
        //         }
        //     </div> */}
        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        //     </div>
        // </div>
    );
};

export default AdvertisedItem;







// <div id={`item+i`} className="carousel-item w-full">
//     <div className="card w-96 bg-base-100 shadow-xl h-[48rem] my-5 lg:my-10">
//         <figure><img src={fridge.photo} alt="Shoes" /></figure>
//         <div className="card-body">
//             <h2 className="card-title">{fridge.name}</h2>
//             <small>{ }</small>
//             <h4 className="text-xl">Resale Price: {fridge.resalePrice} TK</h4>
//             <h4 className="text-xl">Original Price: {fridge.originalPrice} TK</h4>
//             <h5 className="text-lg">Used: {fridge.yearUse} years</h5>
//             <p>Seller: {fridge.sellerName}</p>
//             <p className="text-md">{fridge.description}</p>
//             <p>Post Time: {fridge.post}</p>
//             <div className="flex justify-between">
//                 <div className="card-actions justify-start">
//                     <button className="btn btn-primary">Add WishList</button>
//                 </div>
//                 <div className="card-actions justify-end">
//                     <button className="btn btn-primary">Book Now</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>